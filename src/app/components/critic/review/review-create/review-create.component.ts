import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {ReviewService} from '../../../../services/review.service.client';

@Component({
  selector: 'app-review-create',
  templateUrl: './review-create.component.html',
  styleUrls: ['./review-create.component.css']
})
export class ReviewCreateComponent implements OnInit {

  @ViewChild('f') newWebsiteForm: NgForm;

  url: string;
  criticId: string;

  constructor(private reviewService: ReviewService,
              private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.criticId = params['crid'];
        }
      );
  }

  create() {
    this.url = this.newWebsiteForm.value.review;
    this.reviewService.createReview(this.criticId, {url: this.url})
      .subscribe((review: any) => {
        this.router.navigate(['critic', this.criticId, 'review']);
        });
  }

  profile() {
    this.router.navigate(['critic', this.criticId]);
  }

  reviews() {
    this.router.navigate(['critic', this.criticId, 'review']);
  }
}
