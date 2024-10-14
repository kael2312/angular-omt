import {Component, OnInit} from '@angular/core';
import {Country} from '../../../models/country.model';
import * as jsonCountries from "../../../../assets/countries.json";
import * as uuid from 'uuid';
import {FormsModule, NgForm} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {UserModel} from "../../../models/user.model";
import {TeacherListComponent} from "../teacher-list/teacher-list.component";

@Component({
    standalone: true,
    selector: 'app-teacher-form',
    templateUrl: './teacher-form.component.html',
    imports: [
        FormsModule,
        NgIf,
        NgForOf,
        TeacherListComponent
    ],
    styleUrls: ['./teacher-form.component.css']
})
export class TeacherFormComponent implements OnInit {
    public countries: Country[] = [];
    public userLists: UserModel[] = [];
    public listSkills: string[] = ['C#', 'PHP', 'Angular']
    public selectedSkills: boolean[] = [];
    public user: UserModel = {
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
    private editingUUID: string | null = null;
    public submitted: boolean = false;

    ngOnInit(): void {
        this.countries = (jsonCountries as any).default as Country[]
    }

    public onSubmit(form: NgForm): void {
        this.submitted = true;
        if (!form.valid) {
            return;
        }
        if (this.editingUUID !== null) {
            const index = this.userLists.findIndex(user => user.id === this.editingUUID);
            if (index !== -1) {
                this.userLists[index] = {...this.user, id: this.editingUUID};
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
        form.reset();
    }

    public deleteUser(uuid: string): void {
        this.userLists = this.userLists.filter(user => user.id !== uuid);
        this.resetForm();
    }

    public editUser(uuid: string): void {
        const user = this.userLists.find(user => user.id === uuid);
        if (user) {
            this.user = {...user};
            this.editingUUID = uuid;
            this.selectedSkills = this.listSkills.map(skill => this.user.skill.includes(skill));
        }
    }

    public resetForm(): void {
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

    public onSkillChange(index: number): void {
        this.user.skill = this.listSkills
            .filter((_, i) => this.selectedSkills[i])
            .join(', ');
    }
}

