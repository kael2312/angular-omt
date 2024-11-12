import {Component} from '@angular/core';
import {AuthService} from "../service/auth.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService) {
  }

  login() {
    if (this.authService.login('user', this.username, this.password)) {
      this.errorMessage = '';
    } else {
      this.errorMessage = 'Invalid user credentials';
    }
  }

}
