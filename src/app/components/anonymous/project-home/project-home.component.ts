import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-project-home',
  templateUrl: './project-home.component.html',
  styleUrls: ['./project-home.component.css']
})
export class ProjectHomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  register() {
    this.router.navigate(['register']);
  }

  comedianlogin() {
    this.router.navigate(['comedianlogin']);
  }

  criticlogin() {
    this.router.navigate(['criticlogin']);
  }

  adminlogin() {
    this.router.navigate(['adminlogin']);
  }
}
