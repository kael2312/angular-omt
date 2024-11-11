import { Component, OnInit } from '@angular/core';
import { UserInfo } from '../models/userInfo.model';
import { AuthService } from '../services/authService';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentUser: UserInfo | null = null;
  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.currentUser$.subscribe(u => {
      this.currentUser = u;
    })
  }
  
  logout(): void{
    this.authService.logout();
  }

}
