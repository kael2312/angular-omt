import {Component, Input, OnInit, Output} from '@angular/core';
import {UserModel} from "../../models/user.model";

@Component({
    selector: 'app-user-tab',
    templateUrl: './user-tab.component.html',
    styleUrls: ['./user-tab.component.css']
})
export class UserTabComponent implements OnInit {
    @Input() user!: UserModel;
    constructor() {
    }

    ngOnInit(): void {
    }

    editingUUID: string | null = null;
    selectedTab: string = 'student';  // Mặc định là tab User
    studentList: UserModel[] = [];
    userLists: UserModel[] = [];


    editUser(uuid: string): void {
    }

    deleteUser(uuid: string): void {
        this.userLists = this.userLists.filter(user => user.id !== uuid);
    }

}
