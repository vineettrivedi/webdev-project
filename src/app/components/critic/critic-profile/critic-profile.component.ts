import { Component, OnInit } from '@angular/core';
import {CriticService} from '../../../services/critic.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../services/shared.service.client';


@Component({
  selector: 'app-critic-profile',
  templateUrl: './critic-profile.component.html',
  styleUrls: ['./critic-profile.component.css']
})
export class CriticProfileComponent implements OnInit {
  // properties
  criticId: string;
  critic = {};
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  url: string;


  constructor(private sharedService: SharedService, private criticService: CriticService,
              private activatedRoute: ActivatedRoute, private router: Router) { }

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

    // this.critic = this.sharedService.user;
    // this.criticId = this.critic['_id'];
    // this.username = this.critic['username'];
    // this.password = this.critic['password'];
    // this.email = this.critic['email'];
    // this.firstName = this.critic['firstName'];
    // this.lastName = this.critic['lastName'];
    // this.url = this.critic['url'];

  }

  logout() {
    this.criticService.logout()
      .subscribe(
        (data: any) => this.router.navigate(['criticlogin'])
      );
  }

  profile() {
    this.router.navigate(['critic', this.criticId]);
  }

  account() {
    this.router.navigate(['critic', this.criticId, 'account']);
  }

  flickr() {
    this.router.navigate(['flickr', this.criticId]);
  }

  search() {
    this.router.navigate(['search']);
  }

  review() {
    this.router.navigate(['critic', this.criticId, 'review']);
  }
}
