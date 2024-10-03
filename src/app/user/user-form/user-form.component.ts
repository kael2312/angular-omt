import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserModel} from "../../models/user.model";

import * as uuid from 'uuid';
import { NgForm } from '@angular/forms';
import { Country } from 'src/app/models/country.model';

@Component({
    selector: 'app-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
    @Input() userType?: string;
    
    @Input() user: UserModel = {
        id: '',
        name: '',
        email: '',
        gender: '',
        phone: '',
        country: '',
        address: '',
        skill: '',
        description: '',
        otherSkill: '',
        love: '',
    };
    @Input() listSkills: string[] = [];
    @Input() countries: Country[] = [];
    @Input() otherSkills: string[] = [];
    @Input() loves: string[] = [];
    @Input() editingUUID: string='';
    
    @Output() formSubmit: EventEmitter<any> = new EventEmitter();
    @Output() userListsChange = new EventEmitter<any[]>();

    userLists: UserModel[]=[];
    constructor() {
    }

    ngOnInit(): void {
    }

    selectedSkills: boolean[] = [];
    skills:string='';
    emptyUser = {
        id: '',
        name: '',
        email: '',
        gender: '',
        phone: '',
        country: '',
        address: '',
        skill: '',
        description: '',
        otherSkill: '',
        love: '',
    };
    onSubmit(form: NgForm): void {
        if(form.valid) {
            this.user.skill=this.skills;
            if (this.editingUUID !== '') {
                const index = this.userLists.findIndex(user => user.id === this.editingUUID);
                if (index !== -1) {
                    this.userLists[index] = {...this.user, id: this.editingUUID}
                }
                this.editingUUID = '';
            } else {
                var newUser = {
                    ...this.user,
                    id: uuid.v4()
                };
                this.userLists.push(newUser);
                newUser=this.emptyUser;
            }
            this.userListsChange.emit(this.userLists);
            this.resetForm();
        }
    }

    resetForm(): void {
        this.user = this.emptyUser;
        this.selectedSkills = [];
    }

    onSkillChange(index: number): void {
        this.skills = this.listSkills
            .filter((_, i) => this.selectedSkills[i])
            .join(',');
    }

    isAtLeastOneSkillSelected(): boolean {
        return this.skills.trim() != ''
    }

    protected readonly events = module
}
