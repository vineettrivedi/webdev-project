import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CriticService} from '../../../../services/critic.service.client';

@Component({
  selector: 'app-adminci-edit',
  templateUrl: './adminci-edit.component.html',
  styleUrls: ['./adminci-edit.component.css']
})
export class AdminciEditComponent implements OnInit {

  // properties
  criticId: string;
  critic = {};
  username: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
  url: string;

  constructor(private criticService: CriticService, private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {

    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.criticId = params['crid'];
        }
      );

    this.criticService.findCriticById(this.criticId)
      .subscribe((critic: any) => {
        this.critic = critic;
        this.username = this.critic['username'];
        this.password = this.critic['password'];
        this.email = this.critic['email'];
        this.firstName = this.critic['firstName'];
        this.lastName = this.critic['lastName'];
        this.url = this.critic['url'];
      });
  }

  edit() {
    this.criticService.updateCritic(this.criticId, {_id: this.criticId, username: this.username,
      password: this.password, firstName: this.firstName, lastName: this.lastName, email: this.email, url: this.url})
      .subscribe((critic: any) => {
        this.router.navigate(['admin', 'critic']);
      });
  }

  deleteCritic() {
    this.criticService.deleteCritic(this.criticId)
      .subscribe(() => {
        this.router.navigate(['admin', 'critic']);
      });
  }

  profile() {
    this.router.navigate(['admin', 'home']);
  }

  critics() {
    this.router.navigate(['admin', 'critic']);
  }
}
