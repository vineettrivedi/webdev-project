import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BitService} from '../../../services/bit.service.client';
import {SharedService} from '../../../services/shared.service.client';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  comedianId: string;
  bits = [];

  constructor(private sharedService: SharedService, private bitService: BitService,
              private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.comedianId = params['cid'];
        }
      );

    this.bitService.findBitsByComedianId(this.comedianId)
      .subscribe((bits: any) => {
        this.bits = bits;
      });
  }

}
