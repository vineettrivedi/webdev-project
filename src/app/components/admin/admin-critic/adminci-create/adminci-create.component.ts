import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {CriticService} from '../../../../services/critic.service.client';

@Component({
  selector: 'app-adminci-create',
  templateUrl: './adminci-create.component.html',
  styleUrls: ['./adminci-create.component.css']
})
export class AdminciCreateComponent implements OnInit {

  @ViewChild('f') loginForm: NgForm;

  // properties
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  email: string;
  url: string;

  constructor(private criticService: CriticService,  private router: Router) { }

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

    this.criticService.register(user)
      .subscribe( (critic: any) => {
        this.router.navigate(['admin', 'critic']);
      });

  }

  critics() {
    this.router.navigate(['admin', 'critic']);
  }

  profile() {
    this.router.navigate(['admin', 'home']);
  }
}
