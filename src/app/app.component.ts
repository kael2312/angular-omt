import {Component} from '@angular/core';
import {UserModel} from "./models/user.model";
import {Country} from "./models/country.model";
import * as jsonCountries from '../assets/countries.json';
import * as uuid from 'uuid';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
  title() {

  }


  userLists: UserModel[] = [];
  listSkills: string[] = ['C#', 'PHP', 'Angular'];
  listGenders: string[] = ['Male', 'Female'];

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
    skill: [],
    description: ''
  };
  editingIndex: number | null = null;

  onSubmit() {
    console.log('User data before submit:', this.user);

    if (this.editingIndex !== null) {
      this.userLists[this.editingIndex] = {...this.user};
      this.editingIndex = null; // Clear editing index
    } else {
      this.userLists.push({...this.user});
    }
    this.resetForm();
  }



  deleteUser(index: number) {
    this.userLists.splice(index, 1);
  }

  editUser(index: number) {
    this.user = {...this.userLists[index]};
    this.editingIndex = index;

    this.selectedSkills = this.listSkills.map(skill => this.user.skill.includes(skill));
  }

  resetForm() {
    this.user = {
      id: '',
      name: '',
      email: '',
      gender: '',
      phone: '',
      country: '',
      address: '',
      skill: [],
      description: ''
    };
    this.selectedSkills = [];
  }


  onSkillChange(index: number) {
    this.selectedSkills[index] = !this.selectedSkills[index];
    this.user.skill = this.listSkills
      .filter((_, i) => this.selectedSkills[i]);
  }


}
