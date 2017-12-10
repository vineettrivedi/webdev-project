import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BitService} from '../../../../../services/bit.service.client';

@Component({
  selector: 'app-video-edit',
  templateUrl: './video-edit.component.html',
  styleUrls: ['./video-edit.component.css']
})
export class VideoEditComponent implements OnInit {

  comedianId: string;
  videoId: string;
  url: string;

  constructor(private bitService: BitService,
              private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.comedianId = params['cid'];
          this.videoId = params['bid'];
        }
      );

    this.bitService.findBitById(this.videoId)
      .subscribe((video: any) => {
        this.url = video.url;
      });
  }

  edit() {
    this.bitService.updateBit(this.videoId, {url: this.url, type: 'VIDEO'})
      .subscribe((video: any) => {
        this.router.navigate(['comedian', this.comedianId, 'video']);
      });
  }

  profile() {
    this.router.navigate(['comedian', this.comedianId]);
  }

  deleteVideo() {
    this.bitService.deleteBit(this.videoId)
      .subscribe(() => {
        this.router.navigate(['comedian', this.comedianId, 'video']);
      });
  }

  videos() {
    this.router.navigate(['comedian', this.comedianId, 'video']);
  }

}
