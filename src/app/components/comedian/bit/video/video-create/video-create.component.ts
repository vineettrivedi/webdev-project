import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {BitService} from '../../../../../services/bit.service.client';


@Component({
  selector: 'app-video-create',
  templateUrl: './video-create.component.html',
  styleUrls: ['./video-create.component.css']
})
export class VideoCreateComponent implements OnInit {

  @ViewChild('f') newWebsiteForm: NgForm;

  url: string;
  comedianId: string;

  constructor(private bitService: BitService,
              private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.comedianId = params['cid'];
        }
      );
  }

  create() {
    this.url = this.newWebsiteForm.value.url;
    this.bitService.createBit(this.comedianId, {url: this.url, type: 'VIDEO'})
      .subscribe((video: any) => {
        this.router.navigate(['comedian', this.comedianId, 'video']);
      });
  }

  profile() {
    this.router.navigate(['comedian', this.comedianId]);
  }

  videos() {
    this.router.navigate(['comedian', this.comedianId, 'video']);
  }

}
