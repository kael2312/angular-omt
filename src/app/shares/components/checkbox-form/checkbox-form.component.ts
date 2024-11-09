import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgForOf} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
    standalone: true,
    selector: 'app-checkbox-form',
    templateUrl: './checkbox-form.component.html',
    imports: [
        NgForOf,
        ReactiveFormsModule,
        FormsModule
    ],
    styleUrls: ['./checkbox-form.component.css']
})
export class CheckboxFormComponent {
    @Input() label: string = '';
    @Input() checked: boolean = false;
    @Input() name: string = '';
    @Output() checkedChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    onCheckboxChange(event: Event): void {
        const inputElement: HTMLInputElement = event.target as HTMLInputElement;
        this.checkedChange.emit(inputElement.checked);
    }
}
