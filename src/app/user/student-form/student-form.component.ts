import {Component, OnInit} from '@angular/core';
import {StudentModel} from "../../models/student.model";
import {Country} from "../../models/country.model";
import * as jsonCountries from "../../../assets/countries.json";
import * as uuid from 'uuid';
import {FormsModule, NgForm} from "@angular/forms";
import {UserListComponent} from "../user-list/user-list.component";
import {NgFor, NgIf} from "@angular/common";

@Component({
  standalone: true,
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  imports: [
    FormsModule,
    UserListComponent,
    NgIf,
    NgFor,
  ],
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  ngOnInit(): void {}

  // PROPERTIES
  userLists : StudentModel[] = [];
  listSkills: string[] = ['C#', 'PHP', 'Angular']
  countries : Country[] = (jsonCountries as any).default as Country[];

  isSubmitting: boolean = false;

  selectedSkills: boolean[] = [];
  user: StudentModel = {
    id: '',
    name: '',
    email: '',
    gender: '',
    phone: '',
    country: '',
    address: '',
    skill: '',
    description: ''
  };
  editingUUID: string | null = null;

  minLength    : number = 3;
  maxLength    : number = 18;
  maxLengthText: number = 255;
  phonePattern : string = '^0\\d{9}$';

  msgRequired     : string = 'Trường này là bắt buộc';
  msgMinLength    : string = 'Độ dài tối thiểu là 3 ký tự';
  msgMaxLength    : string = 'Độ dài tối đa là 18 ký tự';
  msgMaxLengthText: string = 'Độ dài tối đa là 255 ký tự';
  msgEmail        : string = 'Email không đúng định dạng';
  msgPhonePattern : string = 'Sđt phải có 10 ký tự, và bắt đầu bằng số 0';

  // METHODS
  onSubmit(form: NgForm): void {
    this.isSubmitting = true;

    if (form.invalid) {
      Object.keys(form.controls).forEach(field => {
        const control = form.controls[field];
        control.markAsTouched({ onlySelf: true });
      })
      return;
    }

    if (!this.isAtLeastOneSkillSelected()) {
      return;
    }

    this.isSubmitting = false;
    this.handleSubmit();
  }

  handleSubmit() {
    if (this.editingUUID !== null) {
      const index = this.userLists.findIndex(user => user.id === this.editingUUID);
      if (index !== -1) {
        this.userLists[index] = {...this.user, id: this.editingUUID}
      }
      this.editingUUID = null;
    } else {
      const newUser = {
        ...this.user,
        id: uuid.v4()
      };
      this.userLists.push(newUser);
    }
    this.resetForm();
  }

  deleteUser(uuid: string): void {
    this.userLists = this.userLists.filter(user => user.id !== uuid);
    this.resetForm();
  }

  editUser(uuid: string): void {
    const user = this.userLists.find(user => user.id === uuid);
    if (user) {
      this.user = {...user};
      this.editingUUID = uuid;
      this.selectedSkills = this.listSkills.map(skill => this.user.skill.includes(skill));
    }
  }

  resetForm(): void {
    this.user = {
      id: '',
      name: '',
      email: '',
      gender: '',
      phone: '',
      country: '',
      address: '',
      skill: '',
      description: ''
    };
    this.selectedSkills = [];
  }

  onSkillChange(index: number): void {
    this.user.skill = this.listSkills
      .filter((_, i) => this.selectedSkills[i])
      .join(', ');
  }

  isAtLeastOneSkillSelected(): boolean {
    return this.selectedSkills.some(skill => skill);
  }

  protected readonly events = module;
}
