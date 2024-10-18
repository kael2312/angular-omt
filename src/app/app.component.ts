import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UserModel} from "./models/user.model";
import {CountryModel} from "./models/country.model";
import * as jsonCountries from '../assets/countries.json';
import * as uuid from 'uuid';
import {StudentModel} from "./models/student.model";
import {TeacherModel} from "./models/teacher.model";
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
    countries: CountryModel[] = (jsonCountries as any).default as CountryModel[];
    skills: string[] = ['Angular', 'React', 'Vue', 'Node.js', 'Python', 'Java'];

    users: UserModel[] = [
        {
            id: 1,
            role: 'student',
            name: 'Nguyễn Văn A',
            gender: 'male',
            email: 'a@omt.vn',
            phone: '0112',
            country: 'VN',
            address: 'Hà Nội',
            skills: ["Angular", "React"],
            description: 'Mô tả'
        },
        {
            id: 2,
            role: 'student',
            name: 'Trần Thị B',
            gender: 'female',
            email: 'b@omt.vn',
            phone: '1023',
            country: 'YE',
            address: 'California',
            skills: ["React"],
            description: 'Nothing'
        }
    ];

    selectedUser: UserModel = {
        id: this.users.length + 1,
        role: 'student',
        name: '',
        gender: '',
        email: '',
        phone: '',
        country: '',
        address: '',
        skills: [],
        description: ''
    };

    addUser(user: UserModel) {
        if (user.id > this.users[this.users.length-1].id) {
            user.id = this.users.length + 1;
            this.users.push(user);
        }
        else {
            const index = this.users.findIndex(u => u.id === this.selectedUser.id);
            this.users[index] = user;
            this.selectedUser = {
                id: this.users.length + 1,
                role: 'student',
                name: '',
                gender: '',
                email: '',
                phone: '',
                country: '',
                address: '',
                skills: [],
                description: ''
            }; // Reset sau khi cập nhật
        }
    }

    editUser(user: UserModel) {
        this.selectedUser = { ...user };
    }
    deleteUser(id: number) {
        console.log(id);
        this.users = this.users.filter(user => user.id !== id);
    }
}
