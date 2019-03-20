import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  template: `<a [hidden]="needsLogin()">Login</a>`,
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService) {
  }

  ngOnInit() {
  }

  needsLogin() {
    return !this.auth.isAuthenticated();
  }

}
