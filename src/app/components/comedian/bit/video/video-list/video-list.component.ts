import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BitService} from '../../../../../services/bit.service.client';
import {SharedService} from '../../../../../services/shared.service.client';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  comedianId: string;
  videos = [];

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
          if (bits[x].type === 'VIDEO') {
            this.videos[i++] = bits[x];
          }
        }
      });

  }

  create() {
    this.router.navigate(['comedian', this.comedianId, 'video', 'create']);
  }

  edit(video) {
    this.router.navigate(['comedian', this.comedianId, 'video', video._id]);
  }

  profile() {
    this.router.navigate(['comedian', this.comedianId]);
  }

}
