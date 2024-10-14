import {Component, EventEmitter, Input, Output} from '@angular/core';
import {UserModel} from "../../../models/user.model";
import {NgForOf, NgIf, NgStyle} from "@angular/common";

@Component({
    selector: 'app-student-list',
    templateUrl: './student-list.component.html',
    standalone: true,
    imports: [
        NgForOf,
        NgIf,
        NgStyle
    ],
    styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {
    @Input() userLists: UserModel[] = [];
    @Output() editUserEvent: EventEmitter<string> = new EventEmitter<string>();
    @Output() deleteUserEvent: EventEmitter<string> = new EventEmitter<string>();

    public getGenderColor(gender: string): string {
        return gender === 'Female' ? 'red' : 'blue';
    }

    public deleteUser(id: string): void {
        this.deleteUserEvent.emit(id)
    }

    public editUser(id: string): void {
        this.editUserEvent.emit(id);
    }
}
