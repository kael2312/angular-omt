import {Component} from '@angular/core';
import {AuthService} from "../service/auth.service";

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService) {
  }

  login() {
    if (this.authService.login('manager', this.username, this.password)) {
      this.errorMessage = '';
    } else {
      this.errorMessage = 'Invalid manager credentials';
    }
  }

}
