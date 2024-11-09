import {Component, EventEmitter, Input, Output} from '@angular/core';
import {UserModel} from "../../../models/user.model";
import {NgForOf, NgIf, NgStyle} from "@angular/common";
import {ButtonFormComponent} from "../../../shares/components/button-form/button-form.component";

@Component({
    selector: 'app-student-list',
    templateUrl: './student-list.component.html',
    standalone: true,
    imports: [
        NgForOf,
        NgIf,
        NgStyle,
        ButtonFormComponent
    ],
    styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {
    @Input() userLists: UserModel[] = [];
    @Output() editUserEvent: EventEmitter<string> = new EventEmitter<string>();
    @Output() deleteUserEvent: EventEmitter<string> = new EventEmitter<string>();

    public deleteUser(id: string): void {
        this.deleteUserEvent.emit(id)
    }

    public editUser(id: string): void {
        this.editUserEvent.emit(id);
    }
}
