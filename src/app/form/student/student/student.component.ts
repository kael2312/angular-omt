import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserModel} from "../../../models/user.model";
import { Country } from "../../../models/country.model";
import { StudentModel} from "../../../models/student.model";
import * as uuid from 'uuid';
import * as jsonCountries from "../../../../assets/countries.json";

@Component({
  selector: 'app-student-form',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  @Output() studentAdded = new EventEmitter<StudentModel>();
  @Output() studentEdited = new EventEmitter<StudentModel>();

  countries: Country[] = (jsonCountries as any).default as Country[];
  listSkills: string[] = ['Nhảy', 'Viết chữ đẹp', 'Hát'];
  selectedSkills: boolean[] = [];
  listLanguages: string[] = ['English', 'Spanish', 'French'];

  studentList: StudentModel[] = [];
  student: StudentModel = {
    id: '',
    name: '',
    email: '',
    gender: '',
    phone: '',
    country: '',
    address: '',
    skill: '',
    description: '',
    language: ''
  };
  editingUUID: string | null = null;

  validationErrors: any = {};

  constructor() {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.validationErrors = {};

    // Validation logic
    if (!this.student.name || this.student.name.length < 3 || this.student.name.length > 18) {
      this.validationErrors.name = 'Tên phải có 3 đến 18 ký tự';
    }

    if (!this.student.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.student.email)) {
      this.validationErrors.email = 'Email phải có định dạng xxx@xxx.com';
    }

    if (!this.student.gender) {
      this.validationErrors.gender = 'Vui lòng chọn giới tính';
    }

    if (!this.student.language) {
      this.validationErrors.language = 'Vui lòng chọn ngôn ngữ';
    }

    if (!this.student.phone || !/^0\d{9}$/.test(this.student.phone)) {
      this.validationErrors.phone = 'Số điện thoại phải có 10 ký tự và bắt đầu bằng số 0';
    }

    if (!this.student.country) {
      this.validationErrors.country = 'Vui lòng chọn country';
    }

    if (!this.student.address) {
      this.validationErrors.address = 'Vui lòng nhập address';
    }

    if (!this.student.description ) {
      this.validationErrors.description = 'Vui lòng nhập mô tả';
    }

    if (!this.student.skill) {
      this.validationErrors.skill = 'Vui lòng chọn kỹ năng';
    }

    if (Object.keys(this.validationErrors).length === 0) {
      if (this.editingUUID !== null) {
        const index = this.studentList.findIndex(student => student.id === this.editingUUID);
        if (index !== -1) {
          this.studentList[index] = { ...this.student, id: this.editingUUID };
          this.studentEdited.emit(this.studentList[index]);
        }
        this.editingUUID = null;
      } else {
        const newStudent = { ...this.student, id: uuid.v4() };
        this.studentList.push(newStudent);
        this.studentAdded.emit(newStudent);
      }
      this.resetForm();
    }
  }

  editStudent(uuid: string): void {
    const student = this.studentList.find(student => student.id === uuid);
    if (student) {
      this.student = { ...student };
      this.editingUUID = uuid;
      this.selectedSkills = this.listSkills.map(skill => this.student.skill.includes(skill));
    }
  }

  deleteStudent(uuid: string): void {
    this.studentList = this.studentList.filter(student => student.id !== uuid);
  }

  resetForm(): void {
    this.student = {
      id: '',
      name: '',
      email: '',
      gender: '',
      phone: '',
      country: '',
      address: '',
      skill: '',
      description: '',
      language: ''
    };
    this.selectedSkills = [];
  }

  onSkillChange(index: number): void {
    this.student.skill = this.listSkills
      .filter((_, i) => this.selectedSkills[i])
      .join(', ');
  }
}
