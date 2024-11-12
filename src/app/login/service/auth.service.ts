import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

interface UserInfo {
  role: string;
  name: string;
}

interface User {
  username: string;
  password: string;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userInfoSubject = new BehaviorSubject<UserInfo | null>(null);
  userInfo$: Observable<UserInfo | null> = this.userInfoSubject.asObservable();

  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$: Observable<boolean> = this.isLoggedInSubject.asObservable();

  public users: Record<'admin' | 'manager' | 'user', User> = {
    admin: {username: 'admin', password: '1', name: 'Admin'},
    manager: {username: 'manager', password: '1', name: 'Manager'},
    user: {username: 'user', password: '1', name: 'User'},
  };

  constructor() {
    const storedUserInfo = localStorage.getItem('userInfo');
    const storedIsLoggedIn = localStorage.getItem('isLoggedIn');

    if (storedUserInfo && storedIsLoggedIn === 'true') {
      this.userInfoSubject.next(JSON.parse(storedUserInfo));
      this.isLoggedInSubject.next(true);
    }
  }

  login(role: 'admin' | 'manager' | 'user', username: string, password: string): boolean {
    const user = this.users[role];
    if (user && user.username === username && user.password === password) {

      const userInfo: UserInfo = { role, name: user.name };
      this.userInfoSubject.next(userInfo);
      this.isLoggedInSubject.next(true);

      localStorage.setItem('userInfo', JSON.stringify(userInfo));
      localStorage.setItem('isLoggedIn', 'true');

      return true;
    } else {
      return false;
    }
  }

  logout() {
    this.userInfoSubject.next(null);
    this.isLoggedInSubject.next(false);

    localStorage.removeItem('userInfo');
    localStorage.removeItem('isLoggedIn');
  }

  hasAccess(role: string): boolean {
    const userInfo = this.userInfoSubject.getValue();
    if (!userInfo) return false;

    const allowedRoles: Record<'admin' | 'manager' | 'user', string[]> = {
      admin: ['admin', 'manager', 'user'],
      manager: ['manager', 'user'],
      user: ['user'],
    };

    if (userInfo.role in allowedRoles) {
      return allowedRoles[userInfo.role as 'admin' | 'manager' | 'user'].includes(role);
    }

    return false;
  }
}
