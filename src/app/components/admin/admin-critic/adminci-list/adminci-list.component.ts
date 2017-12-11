import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CriticService} from '../../../../services/critic.service.client';

@Component({
  selector: 'app-adminci-list',
  templateUrl: './adminci-list.component.html',
  styleUrls: ['./adminci-list.component.css']
})
export class AdminciListComponent implements OnInit {

  critics = [];

  constructor(private criticService: CriticService, private router: Router) { }

  ngOnInit() {
    this.criticService.findAllCritics()
      .subscribe((critics) => {
        this.critics = critics;
      });
  }

  edit(critic) {
    this.router.navigate(['admin', 'critic', critic._id]);
  }

  create() {
    this.router.navigate(['admin', 'critic', 'create']);
  }

  profile() {
    this.router.navigate(['admin', 'home']);
  }
}
