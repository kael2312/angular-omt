import {Component, OnInit} from '@angular/core';
import * as uuid from 'uuid';
import {FormsModule, NgForm} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {UserRegisterModel} from "../../../models/user.model";
import {InputFormComponent} from "../../../shares/components/input-form/input-form.component";
import {SelectFormComponent} from "../../../shares/components/select-form/select-form.component";
import {CheckboxFormComponent} from "../../../shares/components/checkbox-form/checkbox-form.component";
import {TextareaFormComponent} from "../../../shares/components/textarea-form/textarea-form.component";
import {ButtonFormComponent} from "../../../shares/components/button-form/button-form.component";

@Component({
    standalone: true,
    selector: 'app-manager-form',
    templateUrl: './manager-form.component.html',
    imports: [
        FormsModule,
        NgIf,
        NgForOf,
        InputFormComponent,
        SelectFormComponent,
        CheckboxFormComponent,
        TextareaFormComponent,
        ButtonFormComponent
    ],
    styleUrls: ['./manager-form.component.css']
})
export class ManagerFormComponent implements OnInit {
    public userLists: UserRegisterModel[] = [];
    public user: UserRegisterModel = {
        id: '',
        name: '',
        email: '',
        password: '',
        permissions: []
    };
    public submitted: boolean = false;
    public createdSuccess: boolean = false;
    public createdFail: boolean = false;

    constructor() {
    }

    ngOnInit(): void {
        this.userLists = sessionStorage.getItem('users') == null ? [] : JSON.parse(sessionStorage.getItem('users') ?? '');
    }

    public onSubmit(form: NgForm): void {
        this.submitted = true;
        if (!form.valid) {
            return;
        }
        let user: UserRegisterModel | undefined = this.userLists.find(user =>
            user.email === this.user.email
        );
        if (user !== undefined) {
            this.createdFail = true;
            return;
        }
        const newUser: UserRegisterModel = {
            ...this.user,
            id: uuid.v4(),
            permissions: ['manager', 'customer']
        };
        this.userLists.push(newUser);
        sessionStorage.setItem('users', JSON.stringify(this.userLists));
        this.createdSuccess = true;
        this.resetForm();
        form.reset();
    }


    public resetForm(): void {
        this.user = {
            id: '',
            name: '',
            email: '',
            password: '',
            permissions: []
        };
    }


}
