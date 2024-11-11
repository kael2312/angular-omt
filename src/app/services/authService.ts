import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { UserInfo } from "../models/userInfo.model";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private currentUserSubject: BehaviorSubject<UserInfo | null>;
    public currentUser$: Observable<UserInfo | null>

    private keySaveUserLocalStorage: string = 'currentUser';

    private fakeUsers = [
        { username: 'admin', password: '123', role: 'admin' },
        { username: 'user', password: '456', role: 'user' },
        { username: 'manager', password: '789', role: 'manager' }
    ];

    constructor() {
        const currentUserJson = localStorage.getItem(this.keySaveUserLocalStorage);
        const currentUser: UserInfo | null = currentUserJson ? JSON.parse(currentUserJson) : null;
        this.currentUserSubject = new BehaviorSubject<UserInfo | null>(currentUser);
        this.currentUser$ = this.currentUserSubject.asObservable();
    }

    login(username: string, password: string): boolean {
        const user = this.fakeUsers.find(x => x.username === username && x.password === password);
        if (user) {
            const userInfo: UserInfo = {
                username: user.username,
                role: user.role
            }
            localStorage.setItem(this.keySaveUserLocalStorage, JSON.stringify(user));
            this.currentUserSubject.next(user);
            return true;
        }

        return false;
    }

    logout() {
        localStorage.removeItem(this.keySaveUserLocalStorage);
        this.currentUserSubject.next(null);
    }
}