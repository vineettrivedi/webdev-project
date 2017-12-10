import { Component, OnInit } from '@angular/core';
import {ComedianService} from '../../../services/comedian.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../services/shared.service.client';

@Component({
  selector: 'app-comedian-profile',
  templateUrl: './comedian-profile.component.html',
  styleUrls: ['./comedian-profile.component.css']
})
export class ComedianProfileComponent implements OnInit {
  // properties
  comedianId: string;
  comedian = {};
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  url: string;


  constructor(private sharedService: SharedService, private comedianService: ComedianService,
              private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.comedianId = params['cid'];
        }
      );

    this.comedianService.findComedianById(this.comedianId)
      .subscribe((comedian: any) => {
      this.comedian = comedian;
        this.username = this.comedian['username'];
        this.password = this.comedian['password'];
        this.email = this.comedian['email'];
        this.firstName = this.comedian['firstName'];
        this.lastName = this.comedian['lastName'];
        this.url = this.comedian['url'];
      });

    // this.comedian = this.sharedService.user;
    // this.comedianId = this.comedian['_id'];
    // this.username = this.comedian['username'];
    // this.password = this.comedian['password'];
    // this.email = this.comedian['email'];
    // this.firstName = this.comedian['firstName'];
    // this.lastName = this.comedian['lastName'];
    // this.url = this.comedian['url'];

  }

  logout() {
    this.comedianService.logout()
      .subscribe(
        (data: any) => this.router.navigate(['comedianlogin'])
      );
  }

  profile() {
    this.router.navigate(['comedian', this.comedianId]);
  }

  account() {
    this.router.navigate(['comedian', this.comedianId, 'account']);
  }

  flickr() {
    this.router.navigate(['flickr', this.comedianId]);
  }

  search() {
    this.router.navigate(['search']);
  }

  portfolio() {
    this.router.navigate(['comedian', this.comedianId, 'portfolio']);
  }

  image() {
    this.router.navigate(['comedian', this.comedianId, 'image']);
  }

  video() {
    this.router.navigate(['comedian', this.comedianId, 'video']);
  }
}
