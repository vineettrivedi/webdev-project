import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ReviewService} from '../../../../services/review.service.client';
import {SharedService} from '../../../../services/shared.service.client';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {

  criticId: string;
  reviews = [];

  constructor(private sharedService: SharedService, private reviewService: ReviewService,
              private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.criticId = params['crid'];
        }
      );

    this.reviewService.findReviewsByCriticId(this.criticId)
      .subscribe((reviews: any) => {
        this.reviews = reviews;
      });
  }

  create() {
    this.router.navigate(['critic', this.criticId, 'review', 'create']);
  }

  edit(review) {
    this.router.navigate(['critic', this.criticId, 'review', review._id]);
  }

  profile() {
    this.router.navigate(['critic', this.criticId]);
  }
}
