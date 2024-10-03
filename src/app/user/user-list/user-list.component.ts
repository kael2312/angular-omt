import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserModel} from "../../models/user.model";
import {NgForOf, NgIf, NgStyle} from "@angular/common";

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    standalone: true,
    imports: [
        NgForOf,
        NgIf,
        NgStyle
    ],
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }

    @Input() userLists: UserModel[] = [];
    @Output() deleteUserEvent = new EventEmitter<any>();;
    @Output() editUserEvent = new EventEmitter<any>();;

    getGenderColor(gender: string): string {
        return gender === 'Female' ? 'red' : 'blue';
    }

    deleteUser(id: string) {
        this.deleteUserEvent.emit(id)
    }

    editUser(id: string) {
        this.editUserEvent.emit(id);
    }
}
