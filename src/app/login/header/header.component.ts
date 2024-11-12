import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from "../service/auth.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  userName: string | null = null;
  private userInfoSubscription: Subscription | undefined;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.userInfoSubscription = this.authService.userInfo$.subscribe(userInfo => {
      this.userName = userInfo ? userInfo.name : null;
    });
  }

  logout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    // @ts-ignore
    this.userInfoSubscription.unsubscribe();
  }
}
