import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR} from '@angular/forms';
import {NgIf} from "@angular/common";

@Component({
    standalone: true,
    selector: 'app-input-form',
    templateUrl: './input-form.component.html',
    styleUrls: ['./input-form.component.css'],
    imports: [
        FormsModule,
        NgIf
    ],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => InputFormComponent),
            multi: true
        }
    ]
})
export class InputFormComponent implements ControlValueAccessor {
    @Input() label: string = '';
    @Input() type: string = 'text';
    @Input() name: string = '';
    @Input() placeholder: string = '';
    @Input() required: boolean = false;
    @Input() pattern: string = '';
    @Input() minlength: number | null = null;
    @Input() maxlength: number | null = null;
    @Input() submitted: boolean = false;
    @Input() requiredMessage: string = 'Nhập dữ liệu đi';
    @Input() patternMessage: string = 'Định dạng không hợp lệ';
    @Input() minlengthMessage: string = 'Dài rồi';
    @Input() maxlengthMessage: string = 'Ngắn rồi';
    private _model: string = '';


    get model(): string {
        return this._model;
    }

    set model(value: string) {
        this._model = value;
        this.onChange(value);
        this.onTouched();
    }

    writeValue(value: string): void {
        this.model = value;
    }

    registerOnChange(fn: (value: string) => void): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }

    private onChange: (value: string) => void = (): void => {
    };
    private onTouched: () => void = (): void => {
    };
}