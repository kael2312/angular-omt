import {Component} from '@angular/core';
import { Country } from './models/country.model';
import * as jsonCountries from "../assets/countries.json";
import { UserModel } from './models/user.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    student = {
        id: '',
        name: '',
        email: '',
        gender: '',
        phone: '',
        country: '',
        address: '',
        skill: '',
        description: '',
        otherSkill:'',
        love: '',
    };
    teacher = {
        id: '',
        name: '',
        email: '',
        gender: '',
        phone: '',
        country: '',
        address: '',
        skill: '',
        description: '',
        otherSkill:'',
        love: '',
    };
    studentSkills = ['Nhảy', 'Viết chữ đẹp', 'Hát'];
    teacherSkills = ['Nghiệp vụ toán', 'Nghiệp vụ tiếng việt', 'Nghiệp vụ tiếng anh'];
    otherTeacherSkills=['Cao đẳng', 'Đại học', 'Thạc sĩ'];
    otherStudentSkills=['English', 'Japan', 'Korean'];
    countries: Country[] = (jsonCountries as any).default as Country[];
    loves = ['Độc thân', 'Kết hôn', 'Đã ly hôn']

    studentLists:UserModel[] = [];
    teacherLists:UserModel[] = [];

    emptyUser: UserModel={
        id: '',
        name: '',
        email: '',
        gender: '',
        phone: '',
        country: '',
        address: '',
        skill: '',
        description: '',
        otherSkill: '',
        love: '',
    };
    editingStudent:string = '';
    editingTeacher:string='';
    
    onStudentUserListsChange(updatedLists: UserModel[]) {
        this.studentLists = updatedLists;
        this.editingStudent='';
    }

    onTeacherUserListsChange(updatedLists: UserModel[]) {
        this.teacherLists = updatedLists;
        this.editingTeacher='';
    }

    editTeacher(uuid: string): void {
        this.editingTeacher=uuid;
        const teacherToEdit = this.teacherLists.find(teacher => teacher.id === uuid);
        if (teacherToEdit) {
            this.teacher = { ...teacherToEdit };
        }
    }

    deleteTeacher(uuid: string): void {
        this.teacherLists = this.teacherLists.filter(teacher => teacher.id !== uuid);
        this.teacher = this.emptyUser;
    }

    editStudent(uuid: string): void {
        this.editingStudent=uuid;
        const studentToEdit = this.studentLists.find(teacher => teacher.id === uuid);
        if (studentToEdit) {
            this.student = { ...studentToEdit };
        }
    }

    deleteStudent(uuid: string): void {
        this.studentLists = this.studentLists.filter(teacher => teacher.id !== uuid);
        this.student = this.emptyUser;
    }
}
