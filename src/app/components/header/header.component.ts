import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserRegisterModel} from "../../models/user.model";
import {NgIf} from "@angular/common";

@Component({
    standalone: true,
    selector: 'app-header',
    templateUrl: './header.component.html',
    imports: [
        NgIf
    ],
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    @Input() sessionUser: UserRegisterModel | null = null;
    @Output() eventClickIsLogin: EventEmitter<boolean> = new EventEmitter<boolean>();
    public isLogin: boolean = true;

    ngOnInit(): void {
    }

    public clickLogin(): void {
        this.isLogin = true;
        this.eventClickIsLogin.emit(true);
    }

    public clickRegister(): void {
        this.isLogin = false;
        this.eventClickIsLogin.emit(false);
    }

    public clickLogout(): void {
        this.eventClickIsLogin.emit(true);
        sessionStorage.removeItem('userLogin');
    }
}
