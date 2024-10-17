import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RouterModule} from '@angular/router';
import {UserModel} from "../../models/user.model";
import {NgForOf} from "@angular/common";

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css'],
    imports: [
        RouterModule,
        NgForOf
    ],
    standalone: true
})
export class UserListComponent {
    @Input() users: UserModel[] = [];

    @Output() userToEdit = new EventEmitter<UserModel>();
    @Output() userIdToDelete = new EventEmitter<number>();

    editUser(user: UserModel) {
        this.userToEdit.emit(user);
    }

    deleteUser(userId: number) {
        this.userIdToDelete.emit(userId);
    }
}
