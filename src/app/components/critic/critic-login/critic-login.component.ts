import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {CriticService} from '../../../services/critic.service.client';
import {SharedService} from '../../../services/shared.service.client';

@Component({
  selector: 'app-critic-login',
  templateUrl: './critic-login.component.html',
  styleUrls: ['./critic-login.component.css']
})
export class CriticLoginComponent implements OnInit {

  @ViewChild('f') loginForm: NgForm;

  // properties
  username: string;
  password: string;
  errorFlag: boolean;
  errorMsg = 'Invalid username or password !';

  constructor(private criticService: CriticService, private sharedService: SharedService, private router: Router) {
  }

  ngOnInit() {
  }

  login() {
    // fetching data from loginForm
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;
    this.criticService.login(this.username, this.password)
      .subscribe(
        (critic: any) => {
          this.errorFlag = false;
          this.sharedService.user = critic;
          this.router.navigate(['critic', critic._id]);
        },
        (error: any) => {
          this.errorFlag = true;
        }
      );
  }

  register() {
    this.router.navigate(['register']);
  }

  home() {
    this.router.navigate(['home']);
  }

}
