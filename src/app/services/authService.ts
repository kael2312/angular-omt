import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { UserIdentity } from "../models/userIdentity.model";

export class AuthService {
    private currentUserSubject: BehaviorSubject<UserIdentity | null>;
    public currentUser$: Observable<UserIdentity | null>

    private keySaveUserLocalStorage: string = 'currentUser';

    private fakeUsers: UserIdentity[] = [
        { username: 'admin', password: 'adminpass', role: 'admin' },
        { username: 'user', password: 'userpass', role: 'user' },
        { username: 'manager', password: 'managerpass', role: 'manager' }
    ];

    constructor() {
        const currentUserJson = localStorage.getItem(this.keySaveUserLocalStorage);
        const currentUser: UserIdentity | null = currentUserJson ? JSON.parse(currentUserJson) : null;
        this.currentUserSubject = new BehaviorSubject<UserIdentity | null>(currentUser);
        this.currentUser$ = this.currentUserSubject.asObservable();
    }

    login(username: string, password: string): boolean {
        const user = this.fakeUsers.find(x => x.username === username && x.password === password);
        if(user){
            localStorage.setItem(this.keySaveUserLocalStorage, JSON.stringify(user));
            this.currentUserSubject.next(user);
            return true;
        }

        return false;
    }

    logout(){
        localStorage.removeItem(this.keySaveUserLocalStorage);
        this.currentUserSubject.next(null);
    }

    getCurrentUser(): UserIdentity | null {
        return this.currentUserSubject.value;
    }
}