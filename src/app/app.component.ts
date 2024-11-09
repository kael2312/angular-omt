import {Component, OnInit} from '@angular/core';
import {UserRegisterModel} from "./models/user.model";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    public isLogin: boolean = true;
    public sessionUser: UserRegisterModel | null = null;

    public ngOnInit(): void {
        this.setSessionUser();
    }

    public receiveEventLogin($event: boolean): void {
        this.isLogin = $event;
        this.sessionUser = null;
    }

    public receiveSessionUser($event: UserRegisterModel): void {
        this.sessionUser = $event;
    }

    private setSessionUser(): void {
        let session: string | null = sessionStorage.getItem('userLogin');
        this.sessionUser = session == null ? null : JSON.parse(session ?? '');
    }
}
