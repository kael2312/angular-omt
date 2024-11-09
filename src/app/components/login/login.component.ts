import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ButtonFormComponent} from "../../shares/components/button-form/button-form.component";
import {FormsModule, NgForm, ReactiveFormsModule} from "@angular/forms";
import {InputFormComponent} from "../../shares/components/input-form/input-form.component";
import {UserLoginModel, UserRegisterModel} from "../../models/user.model";
import {NgIf} from "@angular/common";

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    imports: [
        ButtonFormComponent,
        FormsModule,
        InputFormComponent,
        ReactiveFormsModule,
        NgIf
    ],
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    @Output() sessionUser: EventEmitter<UserRegisterModel> = new EventEmitter<UserRegisterModel>;
    public submitted: boolean = false;
    public loginFail: boolean = false;
    public userLogin: UserLoginModel = {
        email: '',
        password: '',
    };
    public userLists: UserRegisterModel[] = [];

    ngOnInit(): void {
        this.userLists = sessionStorage.getItem('users') == null ? [] : JSON.parse(sessionStorage.getItem('users') ?? '');
    }

    public onSubmit(form: NgForm): void {
        this.submitted = true;
        if (!form.valid) {
            return;
        }
        let user: UserRegisterModel | undefined = this.userLists.find(user =>
            user.email === this.userLogin.email && user.password === this.userLogin.password
        );
        if (user === undefined) {
            this.loginFail = true;
            return;
        }
        sessionStorage.setItem('userLogin', JSON.stringify(user));
        this.sessionUser.emit(user);
        this.resetForm();
        form.reset();
    }


    public resetForm(): void {
        this.userLogin = {
            email: '',
            password: '',
        };
    }
}
