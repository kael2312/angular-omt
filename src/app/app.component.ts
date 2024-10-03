import {Component} from '@angular/core';
import {UserModel} from "./models/user.model";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    userLists: UserModel[] = [];
    studentSkills = ['C#', 'PHP', 'Angular'];
    teacherSkills = ['Dạy tốt', 'Hát hay', 'Múa đẹp'];
    title: string = '';

    onFormSubmit(user: UserModel) {
        this.userLists.push(user);
    }
}
