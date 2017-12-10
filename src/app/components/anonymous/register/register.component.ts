import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {CriticService} from '../../../services/critic.service.client';
import {ComedianService} from '../../../services/comedian.service.client';
import {SharedService} from '../../../services/shared.service.client';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('f') loginForm: NgForm;

  // properties
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  email: string;
  userType: string;
  url: string;
  errorFlag: boolean;
  errorMsg = 'Invalid form!';

  constructor(private sharedService: SharedService, private router: Router, private criticService: CriticService,
  private comedianService: ComedianService) { }

  ngOnInit() {
  }

  register() {
    // fetching data from loginForm
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;
    this.firstname = this.loginForm.value.firstname;
    this.lastname = this.loginForm.value.lastname;
    this.email = this.loginForm.value.email;
    this.userType = this.loginForm.value.userType;
    this.url = 'https://www.brightfind.com/images/services/design/icon-design-users.png';
    this.errorFlag = false;
    const user = {
      username: this.username,
      password: this.password,
      firstName: this.firstname,
      lastName: this.lastname,
      email: this.email,
      url: this.url
    };

    if (this.userType === 'critic') {
      this.criticService.register(user)
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
    } else {
      this.comedianService.register(user)
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

  }

  home() {
    this.router.navigate(['home']);
  }

}
