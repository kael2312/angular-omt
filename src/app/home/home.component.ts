import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/authService';
import { UserInfo } from '../models/userInfo.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentUser: UserInfo | null = null;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.currentUser$.subscribe(u => {
      this.currentUser = u;
    })
  }

}
