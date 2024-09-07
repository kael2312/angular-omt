import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UserModel} from "./models/user.model";
import {CountryModel} from "./models/country.model";
import * as jsonCountries from '../assets/countries.json';
import * as uuid from 'uuid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  user: UserModel = {
    name: '',
    gender: '',
    email: '',
    phone: '',
    country: '',
    address: '',
    skills: [],
    description: ''
  };
  users: UserModel[] = [];
  countries: CountryModel[] = (jsonCountries as any).default as CountryModel[];
  skills: string[] = ['Angular', 'React', 'Vue', 'Node.js', 'Python', 'Java'];
  isEditing = false;
  data:any = [];

  onSubmit() {
    if (this.isEditing) {
      const index = this.users.findIndex(u => u.name === this.user.name);
      if (index !== -1) {
        this.users[index] = { ...this.user };
      }
    } else {
      this.users.push({ ...this.user });
    }
    this.resetForm();
  }

  resetForm() {
    this.user = {
      name: '',
      gender: '',
      email: '',
      phone: '',
      country: '',
      address: '',
      skills: [],
      description: ''
    };
    this.isEditing = false;
  }

  editUser(user: UserModel) {
    this.user = { ...user };
    this.isEditing = true;
  }

  deleteUser(name: string) {
    this.users = this.users.filter(u => u.name !== name);
  }

  toggleSkill(skill: string) {
    const index = this.user.skills.indexOf(skill);
    if (index === -1) {
      this.user.skills.push(skill);
    } else {
      this.user.skills.splice(index, 1);
    }
  }
}
