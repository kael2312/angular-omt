import {Component, Input, OnInit} from '@angular/core';
import {UserModel} from "../../models/user.model";
import {NgForm} from "@angular/forms";
import * as uuid from "uuid";
import * as console from "node:console";

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
    userLists: UserModel[] = [];

    onSubmitStudent(formValue: NgForm, event: Event): void {
        event.preventDefault();

        // Kiểm tra tính hợp lệ
        if (formValue.invalid) {
            return; // Không tiếp tục nếu form không hợp lệ
        }
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
