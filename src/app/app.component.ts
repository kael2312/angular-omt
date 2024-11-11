import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/authService';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    private keySaveUserLocalStorage: string = 'currentUser';
    loggedIn: boolean = false;

    
    constructor(private authService: AuthService) {
        this.loggedIn = localStorage.getItem(this.keySaveUserLocalStorage) ? true : false;
    }

    ngOnInit(): void {
        this.authService.currentUser$.subscribe(user => {
            this.loggedIn = user == null ? false : true
        });
    }

}
