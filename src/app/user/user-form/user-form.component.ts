import { Component, OnInit } from '@angular/core';
import { UserModel } from "../../models/user.model";
import { Country } from "../../models/country.model";
import * as jsonCountries from "../../../assets/countries.json";
import * as uuid from 'uuid';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  userLists: UserModel[] = [];
  listSkills: string[] = ['C#', 'PHP', 'Angular'];
  countries: Country[] = (jsonCountries as any).default as Country[];
  selectedSkills: boolean[] = [];
  user: UserModel = {
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

  constructor() {}

  ngOnInit(): void {}

  validationErrors: any = {};
  onSubmit(): void {
    this.validationErrors = {};

    if (!this.user.name || this.user.name.length < 3 || this.user.name.length > 18) {
      this.validationErrors.name = 'Tên phải có 3 đến 18 ký tự';
    }

    if (!this.user.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.user.email)) {
      this.validationErrors.email = 'Email phải có định dạng xxx@xxx.com';
    }

    if (!this.user.gender) {
      this.validationErrors.gender = 'Vui lòng chọn giới tính';
    }

    if (!this.user.phone || !/^0\d{9}$/.test(this.user.phone)) {
      this.validationErrors.phone = 'Số điện thoại phải có 10 ký tự và bắt đầu bằng số 0';
    }

    if (!this.user.country) {
      this.validationErrors.country = 'Vui lòng chọn country';
    }

    if (!this.user.skill) {
      this.validationErrors.skill = 'Vui lòng chọn kỹ năng';
    }

    if (!this.user.address ) {
      this.validationErrors.address = 'Vui lòng nhập địa chỉ';
    }
    if (!this.user.description ) {
      this.validationErrors.description = 'Vui lòng nhập mô tả';
    }

    if (Object.keys(this.validationErrors).length === 0) {
      if (this.editingUUID !== null) {
        const index = this.userLists.findIndex(user => user.id === this.editingUUID);
        if (index !== -1) {
          this.userLists[index] = { ...this.user, id: this.editingUUID };
        }
        this.editingUUID = null;
      } else {
        const newUser = { ...this.user, id: uuid.v4() };
        this.userLists.push(newUser);
      }

      console.log('Form submitted successfully:', this.user);
      this.resetForm();
    }
  }


  deleteUser(uuid: string): void {
    this.userLists = this.userLists.filter(user => user.id !== uuid);
    this.resetForm();
  }

  editUser(uuid: string): void {
    const user = this.userLists.find(user => user.id === uuid);
    if (user) {
      this.user = { ...user };
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
}
