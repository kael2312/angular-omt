import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    standalone: true,
    selector: 'app-button-form',
    templateUrl: './button-form.component.html',
    styleUrls: ['./button-form.component.css']
})
export class ButtonFormComponent {
    @Input() label: string = '';
    @Input() type: string = 'button';
    @Input() classMore: string = 'btn-primary';
    @Output() eventClick: EventEmitter<void> = new EventEmitter<void>();

    public eventClickInput(): void {
        this.eventClick.emit();
    }
}
