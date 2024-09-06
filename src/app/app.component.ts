import {Component} from '@angular/core';
import {UserModel} from "./models/user.model";
import * as jsonCountries from '../assets/countries.json';
import * as uuid from 'uuid';

interface User {
  name: string;
  gender: string;
  country: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
  
export class AppComponent{
   user: User = { name: '', gender: '' , country: ''};
  users: User[] = [];
  editIndex: number | null = null;
  isUserSubmitted: boolean = false;

  onSubmit() {
    if (this.user.name && this.user.gender) {
      if (this.editIndex !== null) {
        // Update existing user
        this.users[this.editIndex] = { ...this.user };
        this.editIndex = null;
      } else {
        // Add new user
        this.users.push({ ...this.user });
      }
      this.isUserSubmitted = true; // Mark user as submitted
    }
    this.resetForm();
  }

  onDelete(index: number) {
    this.users.splice(index, 1);
  }

  onEdit(index: number) {
    this.user = { ...this.users[index] };
    this.editIndex = index;
  }

  resetForm() {
    this.user = { name: '', gender: '' , country:''};
    this.isUserSubmitted = false; // Reset submission status
  }
}
