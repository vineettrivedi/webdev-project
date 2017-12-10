/**
 * Created by sesha on 7/26/17.
 */

import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {TestComponent} from './components/test/test.component';
import {RegisterComponent} from './components/anonymous/register/register.component';
import {ComedianLoginComponent} from './components/comedian/comedian-login/comedian-login.component';
import {ComedianProfileComponent} from './components/comedian/comedian-profile/comedian-profile.component';
import {ComedianAccountComponent} from './components/comedian/comedian-account/comedian-account.component';
import {PortfolioComponent} from './components/comedian/portfolio/portfolio.component';
import {CriticLoginComponent} from './components/critic/critic-login/critic-login.component';
import {CriticProfileComponent} from './components/critic/critic-profile/critic-profile.component';
import {CriticAccountComponent} from './components/critic/critic-account/critic-account.component';
import {ReviewListComponent} from './components/critic/review/review-list/review-list.component';
import {ReviewEditComponent} from './components/critic/review/review-edit/review-edit.component';
import {ReviewCreateComponent} from './components/critic/review/review-create/review-create.component';
import {SearchComponent} from './components/search/search.component';
import {ImageListComponent} from './components/comedian/bit/image/image-list/image-list.component';
import {ImageEditComponent} from './components/comedian/bit/image/image-edit/image-edit.component';
import {ImageCreateComponent} from './components/comedian/bit/image/image-create/image-create.component';
import {VideoListComponent} from './components/comedian/bit/video/video-list/video-list.component';
import {VideoCreateComponent} from './components/comedian/bit/video/video-create/video-create.component';
import {VideoEditComponent} from './components/comedian/bit/video/video-edit/video-edit.component';
import {FlickrComponent} from './components/flickr/flickr.component';
import {ProjectHomeComponent} from './components/anonymous/project-home/project-home.component';
import {HomeComponent} from './components/home/home.component';

// cid, crid, bid, rid

const APP_ROUTES: Routes = [
  {path: '', component : HomeComponent},
  {path: 'test', component: TestComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'home', component: ProjectHomeComponent},
  {path: 'search', component: SearchComponent},
  {path: 'flickr/:id', component: FlickrComponent},
  {path: 'comedianlogin', component: ComedianLoginComponent},
  {path: 'comedian/:cid', component: ComedianProfileComponent},
  {path: 'comedian/:cid/account', component: ComedianAccountComponent},
  {path: 'comedian/:cid/portfolio', component: PortfolioComponent},
  {path: 'comedian/:cid/image', component: ImageListComponent},
  {path: 'comedian/:cid/image/create', component: ImageCreateComponent},
  {path: 'comedian/:cid/image/:bid', component: ImageEditComponent},
  {path: 'comedian/:cid/video', component: VideoListComponent},
  {path: 'comedian/:cid/video/create', component: VideoCreateComponent},
  {path: 'comedian/:cid/video/:bid', component: VideoEditComponent},
  {path: 'criticlogin', component: CriticLoginComponent},
  {path: 'critic/:crid', component: CriticProfileComponent},
  {path: 'critic/:crid/account', component: CriticAccountComponent},
  {path: 'critic/:crid/review', component: ReviewListComponent},
  {path: 'critic/:crid/review/create', component: ReviewCreateComponent},
  {path: 'critic/:crid/review/:rid', component: ReviewEditComponent},
];

// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
