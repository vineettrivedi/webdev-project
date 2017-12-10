import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BitService} from '../../../../../services/bit.service.client';
import {SharedService} from '../../../../../services/shared.service.client';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {

  comedianId: string;
  images = [];

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
        let i = 0;
        for (let x = 0; x < bits.length; x++) {
          if (bits[x].type === 'IMAGE') {
            this.images[i++] = bits[x];
          }
        }
      });

  }

  create() {
    this.router.navigate(['comedian', this.comedianId, 'image', 'create']);
  }

  edit(image) {
    this.router.navigate(['comedian', this.comedianId, 'image', image._id]);
  }

  profile() {
    this.router.navigate(['comedian', this.comedianId]);
  }

}
