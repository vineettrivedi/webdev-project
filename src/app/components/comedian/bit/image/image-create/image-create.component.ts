import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {BitService} from '../../../../../services/bit.service.client';


@Component({
  selector: 'app-image-create',
  templateUrl: './image-create.component.html',
  styleUrls: ['./image-create.component.css']
})
export class ImageCreateComponent implements OnInit {

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
    this.bitService.createBit(this.comedianId, {url: this.url, type: 'IMAGE'})
      .subscribe((image: any) => {
        this.router.navigate(['comedian', this.comedianId, 'image']);
      });
  }

  profile() {
    this.router.navigate(['comedian', this.comedianId]);
  }

  images() {
    this.router.navigate(['comedian', this.comedianId, 'image']);
  }

}
