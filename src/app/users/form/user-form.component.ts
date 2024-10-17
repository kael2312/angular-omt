import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {UserModel} from "../../models/user.model";
import {RouterModule} from "@angular/router";
import {FormsModule, NgForm} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {CountryModel} from "../../models/country.model";
import * as jsonCountries from "../../../assets/countries.json";

@Component({
    selector: 'app-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.css'],
    standalone: true,
    imports: [
        RouterModule,
        NgForOf,
        FormsModule,
        NgIf
    ]
})
export class UserFormComponent {
    @Input() countries: CountryModel[] = [];
    @Input() skills: string[] = [];
    @Input() user: UserModel = {
        id: 0,
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

    @Output() userAdded = new EventEmitter<any>();
    @ViewChild('userForm') userForm: any;
    showError: boolean = false;
    onSubmit() {
        if (!this.userForm.form.controls['name'].valid) {
            this.userForm.form.controls['name'].markAsTouched();
            this.showError = true;
            return;
        }
        this.userAdded.emit(this.user);
        this.resetForm();
    }

    resetForm() {
        this.user = {
            id: this.user.id + 1,
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
        this.showError = false;
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
