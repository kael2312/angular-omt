import {Component, Input, OnInit} from '@angular/core';
import {UserModel} from "../../../models/user.model";

@Component({
    selector: 'app-professional',
    templateUrl: './professional.component.html',
    styleUrls: ['./professional.component.css']
})
export class ProfessionalComponent {
    @Input() user!: UserModel;
    constructor() {
    }

    professionals = [
        {id: 1, name: 'Cao đẳng'},
        {id: 2, name: 'Đại học'},
        {id: 3, name: 'Thạc sĩ'},
        {id: 4, name: 'Tiến sĩ'},
    ];
}
