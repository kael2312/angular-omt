import {Component, ContentChild, OnInit} from '@angular/core';
import {UserModel} from "../../models/user.model";
import {Country} from "../../models/country.model";
import * as jsonCountries from "../../../assets/countries.json";

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



}
