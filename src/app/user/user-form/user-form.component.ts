import {Component, ContentChild, OnInit} from '@angular/core';
import {UserModel} from "../../models/user.model";
import {Country} from "../../models/country.model";
import * as jsonCountries from "../../../assets/countries.json";
import {NgForm} from "@angular/forms";
import * as uuid from "uuid";

@Component({
    selector: 'app-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
    @ContentChild('specialInput') specialInput: any;  // Truy cập nội dung chiếu qua ng-content
    constructor() {
    }

    ngOnInit(): void {
    }

    countries: Country[] = (jsonCountries as any).default as Country[];
    user: UserModel = {
        id: '',
        name: '',
        email: '',
        gender: '',
        phone: '',
        country: '',
        address: '',
        skill: '',
        description: '',
        professional: ''
    };
    editingUUID: string | null = null;
    selectedTab: string = 'student';  // Mặc định là tab User
    studentList: UserModel[] = [];
    userLists: UserModel[] = [];
    listData: UserModel[] = [];

    onSubmit(formValue: NgForm): void {
        let value = formValue.value;
        if (this.editingUUID !== null) {
            const index = this.userLists.findIndex(user => user.id === this.editingUUID);
            if (index !== -1) {
                this.userLists[index] = {...this.user, id: this.editingUUID}
            }
            this.editingUUID = null;
        } else {
            const newUser = {
                ...this.user,
                id: uuid.v4(),
                value
            };
            this.userLists.push(newUser);
            formValue.resetForm();
        }
    }

    editUser(uuid: string): void {
    }

    deleteUser(uuid: string): void {
        this.userLists = this.userLists.filter(user => user.id !== uuid);
    }


}
