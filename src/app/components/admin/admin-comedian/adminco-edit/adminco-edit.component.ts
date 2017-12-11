import { Component, OnInit } from '@angular/core';
import {ComedianService} from '../../../../services/comedian.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-adminco-edit',
  templateUrl: './adminco-edit.component.html',
  styleUrls: ['./adminco-edit.component.css']
})
export class AdmincoEditComponent implements OnInit {

  // properties
  comedianId: string;
  comedian = {};
  username: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
  url: string;

  constructor(private comedianService: ComedianService, private activatedRoute: ActivatedRoute,
              private router: Router) { }

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
  }

  edit() {
    this.comedianService.updateComedian(this.comedianId, {_id: this.comedianId, username: this.username,
      password: this.password, firstName: this.firstName, lastName: this.lastName, email: this.email, url: this.url})
      .subscribe((comedian: any) => {
        this.router.navigate(['admin', 'comedian']);
      });
  }

  deleteComedian() {
    this.comedianService.deleteComedian(this.comedianId)
      .subscribe(() => {
        this.router.navigate(['admin', 'comedian']);
      });
  }

  profile() {
    this.router.navigate(['admin', 'home']);
  }

  comedians() {
    this.router.navigate(['admin', 'comedian']);
  }
}
