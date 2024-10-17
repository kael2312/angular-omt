import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserModel} from "../../models/user.model";
import {Country} from "../../models/country.model";
import * as jsonCountries from "../../../assets/countries.json";
import * as uuid from 'uuid';
import {UserModule} from "../user.module";
import {NgForm} from "@angular/forms";

@Component({
    selector: 'app-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

    constructor() {

    }

    ngOnInit(): void {
    }

    @Input() skills: string[] = [];

    userLists: UserModel[] = [];
    listSkills: string[] = ['C#', 'PHP', 'Angular']
    @Output() formSubmit = new EventEmitter<any>();

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
    submitted = false;

    onSubmit(form: NgForm): void {
        this.submitted = true;
        if (form.valid) {
            this.formSubmit.emit(this.user);

            if (this.editingUUID !== null) {
                const index = this.userLists.findIndex(user => user.id === this.editingUUID);
                if (index !== -1) {
                    this.userLists[index] = { ...this.user, id: this.editingUUID };
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
        } else {
            console.log('Form không hợp lệ');
        }
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
        this.submitted = false;
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
