import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ReviewService} from '../../../../services/review.service.client';
import {ComedianService} from '../../../../services/comedian.service.client';

@Component({
  selector: 'app-review-edit',
  templateUrl: './review-edit.component.html',
  styleUrls: ['./review-edit.component.css']
})
export class ReviewEditComponent implements OnInit {

  criticId: string;
  reviewId: string;
  url: string;
  username: string;

  constructor(private reviewService: ReviewService, private comedianService: ComedianService,
              private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.criticId = params['crid'];
          this.reviewId = params['rid'];
        }
      );

    this.reviewService.findReviewById(this.reviewId)
      .subscribe((review: any) => {
        this.url = review.url;
        const comedianId = review.portfolio;
        this.comedianService.findComedianById(comedianId)
          .subscribe((comedian) => {
            this.username = comedian.username;
          });
      });

  }

  edit() {
    this.comedianService.findComedianByUsername(this.username)
      .subscribe((comedian) => {
        this.reviewService.updateReview(this.reviewId, {url: this.url, portfolio: comedian._id})
          .subscribe((review: any) => {
            this.router.navigate(['critic', this.criticId, 'review']);
          });
      });
  }

  deleteReview() {
    this.reviewService.deleteReview(this.reviewId)
      .subscribe(() => {
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
