import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  @ViewChild('f') loginForm: NgForm;

  // properties
  username: string;
  password: string;
  errorFlag: boolean;
  errorMsg = 'Invalid username or password !';

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  login() {
    // fetching data from loginForm
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;
    if (this.username === 'admin' && this.password === 'admin') {
      this.errorFlag = false;
      this.router.navigate(['admin', 'home']);
    } else {
      this.errorFlag = true;
    }
  }

  home() {
    this.router.navigate(['home']);
  }

}
