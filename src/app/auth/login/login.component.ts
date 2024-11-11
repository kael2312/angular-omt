import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/authService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';
  errMessage: string = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {

  }

  onSubmit(): void {
    const loginResult = this.authService.login(this.username, this.password);

    if (!loginResult) {
      this.errMessage = "Tên đăng nhập hoặc mật khẩu không chính xác"
    }
  }

}
