import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {ComedianService} from '../../../services/comedian.service.client';
import {SharedService} from '../../../services/shared.service.client';

@Component({
  selector: 'app-comedian-login',
  templateUrl: './comedian-login.component.html',
  styleUrls: ['./comedian-login.component.css']
})
export class ComedianLoginComponent implements OnInit {

  @ViewChild('f') loginForm: NgForm;

  // properties
  username: string;
  password: string;
  errorFlag: boolean;
  errorMsg = 'Invalid username or password !';

  constructor(private comedianService: ComedianService, private sharedService: SharedService, private router: Router) {
  }

  ngOnInit() {
  }

  login() {
    // fetching data from loginForm
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;
    this.comedianService.login(this.username, this.password)
      .subscribe(
        (comedian: any) => {
          this.errorFlag = false;
          this.sharedService.user = comedian;
          this.router.navigate(['comedian', comedian._id]);
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
