import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR} from '@angular/forms';
import {NgForOf, NgIf} from "@angular/common";
import {OptionSelectModel} from "../../../models/OptionSelect.model";

@Component({
    standalone: true,
    selector: 'app-select-form',
    templateUrl: './select-form.component.html',
    styleUrls: ['./select-form.component.css'],
    imports: [
        FormsModule,
        NgIf,
        NgForOf
    ],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => SelectFormComponent),
            multi: true
        }
    ]
})
export class SelectFormComponent implements ControlValueAccessor {
    @Input() label: string = '';
    @Input() name: string = '';
    @Input() required: boolean = false;
    @Input() submitted: boolean = false;
    @Input() options: OptionSelectModel[] = [];
    @Input() optionSelected: string = '';
    @Input() requiredMessage: string = 'Nhập dữ liệu đi';
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
