import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ComedianService} from '../../services/comedian.service.client';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  username: string;
  result: any;

  constructor( private comedianService: ComedianService, private activatedRoute: ActivatedRoute,
               private router: Router) { }

  ngOnInit() {
  }

  selectComedian(comedian: any) {
    this.router.navigate(['comedian', comedian._id, 'portfolio']);
  }

  searchComedian(username: string) {
    this.comedianService.findComedianByUsername(username)
      .subscribe((result) => {
        this.result = result;
      });
  }
}
