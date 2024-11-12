import {Component, OnInit} from '@angular/core';
import {AuthService} from "../service/auth.service";

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  constructor(public authService: AuthService) {
  }

  ngOnInit(): void {
  }

}
