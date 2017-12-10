import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FlickrService} from '../../services/flickr.service.client';
import {CriticService} from '../../services/critic.service.client';
import {ComedianService} from '../../services/comedian.service.client';

@Component({
  selector: 'app-flickr',
  templateUrl: './flickr.component.html',
  styleUrls: ['./flickr.component.css']
})
export class FlickrComponent implements OnInit {

  image: String;
  result: any;
  user: any;
  userId: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  url: string;
  userType: string;

  constructor(private flickrService: FlickrService, private criticService: CriticService,
              private comedianService: ComedianService, private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['id'];
        }
      );
    this.criticService.findCriticById(this.userId)
      .subscribe((user: any) => {
      if (user) {
        this.user = user;
        this.username = this.user['username'];
        this.password = this.user['password'];
        this.email = this.user['email'];
        this.firstName = this.user['firstName'];
        this.lastName = this.user['lastName'];
        this.url = this.user['url'];
        this.userType = 'critic';
      } else {
        this.comedianService.findComedianById(this.userId)
          .subscribe((comedian: any) => {
            this.user = comedian;
            this.username = this.user['username'];
            this.password = this.user['password'];
            this.email = this.user['email'];
            this.firstName = this.user['firstName'];
            this.lastName = this.user['lastName'];
            this.url = this.user['url'];
            this.userType = 'comedian';
          });
      }
      });
  }

  selectImage(photo) {
    const user = {'username': this.username, 'password': this.password, 'firstName': this.firstName,
      'lastName': this.lastName, 'email': this.email,
      'url': 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server + '/' + photo.id + '_'
      + photo.secret + '_s.jpg' };

    if (this.userType === 'critic') {
      this.criticService.updateCritic(this.userId, user)
        .subscribe((critic: any) => {
          this.router.navigate(['critic', this.userId]);
        });
    } else {
      this.comedianService.updateComedian(this.userId, user)
        .subscribe((comedian: any) => {
          this.router.navigate(['comedian', this.userId]);
        });
    }
  }

  searchImage(image: String) {
    this.flickrService.searchImage(image)
      .subscribe((result) => {
        this.result = result;
      });
  }

}
