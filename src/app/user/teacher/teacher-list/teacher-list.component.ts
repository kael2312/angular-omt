import {Component, EventEmitter, Input, Output} from '@angular/core';
import {UserModel} from "../../../models/user.model";
import {NgForOf, NgIf, NgStyle} from "@angular/common";
import {ButtonFormComponent} from "../../../shares/components/button-form/button-form.component";

@Component({
    selector: 'app-teacher-list',
    templateUrl: './teacher-list.component.html',
    standalone: true,
    imports: [
        NgForOf,
        NgIf,
        NgStyle,
        ButtonFormComponent
    ],
    styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent {
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
