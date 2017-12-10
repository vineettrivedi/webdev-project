import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BitService} from '../../../../../services/bit.service.client';

@Component({
  selector: 'app-image-edit',
  templateUrl: './image-edit.component.html',
  styleUrls: ['./image-edit.component.css']
})
export class ImageEditComponent implements OnInit {

  comedianId: string;
  imageId: string;
  url: string;

  constructor(private bitService: BitService,
              private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.comedianId = params['cid'];
          this.imageId = params['bid'];
        }
      );

    this.bitService.findBitById(this.imageId)
      .subscribe((image: any) => {
        this.url = image.url;
      });
  }

  edit() {
    this.bitService.updateBit(this.imageId, {url: this.url, type: 'IMAGE'})
      .subscribe((image: any) => {
        this.router.navigate(['comedian', this.comedianId, 'image']);
      });
  }

  profile() {
    this.router.navigate(['comedian', this.comedianId]);
  }

  deleteImage() {
    this.bitService.deleteBit(this.imageId)
      .subscribe(() => {
        this.router.navigate(['comedian', this.comedianId, 'image']);
      });
  }

  images() {
    this.router.navigate(['comedian', this.comedianId, 'image']);
  }

}
