import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ComedianService} from '../../../../services/comedian.service.client';

@Component({
  selector: 'app-adminco-list',
  templateUrl: './adminco-list.component.html',
  styleUrls: ['./adminco-list.component.css']
})
export class AdmincoListComponent implements OnInit {

  comedians = [];

  constructor(private comedianService: ComedianService, private router: Router) { }

  ngOnInit() {
    this.comedianService.findAllComedians()
      .subscribe((comedians) => {
        this.comedians = comedians;
      });
  }

  edit(comedian) {
    this.router.navigate(['admin', 'comedian', comedian._id]);
  }

  create() {
    this.router.navigate(['admin', 'comedian', 'create']);
  }

  profile() {
    this.router.navigate(['admin', 'home']);
  }
}
