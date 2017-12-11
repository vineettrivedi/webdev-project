import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {ComedianService} from '../../../../services/comedian.service.client';


@Component({
  selector: 'app-adminco-create',
  templateUrl: './adminco-create.component.html',
  styleUrls: ['./adminco-create.component.css']
})
export class AdmincoCreateComponent implements OnInit {

  @ViewChild('f') loginForm: NgForm;

  // properties
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  email: string;
  url: string;

  constructor(private comedianService: ComedianService,  private router: Router) { }

  ngOnInit() {
  }

  create() {

    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;
    this.firstname = this.loginForm.value.firstname;
    this.lastname = this.loginForm.value.lastname;
    this.email = this.loginForm.value.email;
    this.url = 'https://www.brightfind.com/images/services/design/icon-design-users.png';
    const user = {
      username: this.username,
      password: this.password,
      firstName: this.firstname,
      lastName: this.lastname,
      email: this.email,
      url: this.url
    };

    this.comedianService.register(user)
      .subscribe( (comedian: any) => {
          this.router.navigate(['admin', 'comedian']);
      });

  }

  comedians() {
    this.router.navigate(['admin', 'comedian']);
  }

  profile() {
    this.router.navigate(['admin', 'home']);
  }
}
