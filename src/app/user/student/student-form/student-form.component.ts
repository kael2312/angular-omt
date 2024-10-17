import {Component, OnInit} from '@angular/core';
import {Country} from '../../../models/country.model';
import * as jsonCountries from "../../../../assets/countries.json";
import * as uuid from 'uuid';
import {FormsModule, NgForm} from "@angular/forms";
import {StudentListComponent} from "../student-list/student-list.component";
import {NgForOf, NgIf} from "@angular/common";
import {StudentModel} from "../../../models/user.model";
import {InputFormComponent} from "../../../shares/components/input-form/input-form.component";
import {SelectFormComponent} from "../../../shares/components/select-form/select-form.component";
import {OptionSelectModel} from "../../../models/OptionSelect.model";
import {CheckboxFormComponent} from "../../../shares/components/checkbox-form/checkbox-form.component";
import {TextareaFormComponent} from "../../../shares/components/textarea-form/textarea-form.component";
import {ButtonFormComponent} from "../../../shares/components/button-form/button-form.component";

@Component({
    standalone: true,
    selector: 'app-student-form',
    templateUrl: './student-form.component.html',
    imports: [
        FormsModule,
        StudentListComponent,
        NgIf,
        NgForOf,
        InputFormComponent,
        SelectFormComponent,
        CheckboxFormComponent,
        TextareaFormComponent,
        ButtonFormComponent,
    ],
    styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
    public optionsSelectGender: OptionSelectModel[] = [];
    public optionSelectCountries: OptionSelectModel[] = [];
    public optionSelectLanguage: OptionSelectModel[] = [];
    public userLists: StudentModel[] = [];
    public listSkills: string[] = ['Nhảy', 'Bay', 'Chạy']
    public user: StudentModel = {
        id: '',
        name: '',
        email: '',
        gender: '',
        phone: '',
        country: '',
        address: '',
        skills: [],
        description: '',
        language: ''
    };
    private editingUUID: string | null = null;
    public submitted: boolean = false;

    constructor() {
    }

    ngOnInit(): void {
        this.setValueOptionSelectCountry();
        this.setValueOptionSelectGender();
        this.setValueOptionSelectLanguage();
    }

    public onSubmit(form: NgForm): void {
        console.log(this.user, form.valid);
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
            skills: [],
            description: '',
            language: '',
        };
    }

    public onSkillChange(index: number): void {
        if (this.user.skills.includes(index)) {
            const indexInArray = this.user.skills.indexOf(index);
            if (indexInArray !== -1) {
                this.user.skills.splice(indexInArray, 1);
            }
        } else {
            this.user.skills.push(index);
        }
    }

    private setValueOptionSelectGender(): void {
        this.optionsSelectGender = [
            {
                value: '1',
                label: 'Nam'
            },
            {
                value: '2',
                label: 'Nữ'
            },
            {
                value: '3',
                label: '3D'
            }
        ];
    }

    private setValueOptionSelectLanguage():void {
        this.optionSelectLanguage = [
            {
                value: '1',
                label: 'ພາສາລາວ'
            },
            {
                value: '2',
                label: 'Bahasa'
            },
            {
                value: '3',
                label: 'ภาษาไทย'
            }
        ];
    }


    private setValueOptionSelectCountry(): void {
        const countries: Country[] = (jsonCountries as any).default as Country[]
        this.optionSelectCountries = countries.map(country => ({
            value: country.code,
            label: country.name
        }));
    }
}

