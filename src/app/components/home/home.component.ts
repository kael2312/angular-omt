import {Component, Input, OnInit} from '@angular/core';
import {UserRegisterModel} from "../../models/user.model";
import {NgIf} from "@angular/common";

@Component({
    standalone: true,
    selector: 'app-home',
    templateUrl: './home.component.html',
    imports: [
        NgIf
    ],
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    @Input() sessionUser!: UserRegisterModel;
    public role: string = '';

    constructor() {
    }

    ngOnInit(): void {
        if (this.sessionUser.permissions.includes('admin')) {
            this.role = 'admin';
        } else if (this.sessionUser.permissions.includes('manager')) {
            this.role = 'manager';
        } else {
            this.role = 'customer';
        }
    }
}
