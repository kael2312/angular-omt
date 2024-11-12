import {Component} from '@angular/core';
import {AuthService} from "../service/auth.service";


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService) {
  }

  login() {
    if (this.authService.login('admin', this.username, this.password)) {
      this.errorMessage = '';
    } else {
      this.errorMessage = 'Invalid admin credentials';
    }
  }

}
