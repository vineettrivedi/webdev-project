import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TestComponent } from './components/test/test.component';
import { Routing } from './app.routing';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { TestService } from './services/test.service.client';
import { SearchComponent } from './components/search/search.component';
import { FlickrComponent } from './components/flickr/flickr.component';
import { ProjectHomeComponent } from './components/anonymous/project-home/project-home.component';
import { RegisterComponent } from './components/anonymous/register/register.component';
import { ComedianAccountComponent } from './components/comedian/comedian-account/comedian-account.component';
import { ComedianLoginComponent } from './components/comedian/comedian-login/comedian-login.component';
import { ComedianProfileComponent } from './components/comedian/comedian-profile/comedian-profile.component';
import { PortfolioComponent } from './components/comedian/portfolio/portfolio.component';
import { ImageCreateComponent } from './components/comedian/bit/image/image-create/image-create.component';
import { ImageListComponent } from './components/comedian/bit/image/image-list/image-list.component';
import { ImageEditComponent } from './components/comedian/bit/image/image-edit/image-edit.component';
import { VideoEditComponent } from './components/comedian/bit/video/video-edit/video-edit.component';
import { VideoCreateComponent } from './components/comedian/bit/video/video-create/video-create.component';
import { VideoListComponent } from './components/comedian/bit/video/video-list/video-list.component';
import { CriticProfileComponent } from './components/critic/critic-profile/critic-profile.component';
import { CriticAccountComponent } from './components/critic/critic-account/critic-account.component';
import { CriticLoginComponent } from './components/critic/critic-login/critic-login.component';
import { ReviewCreateComponent } from './components/critic/review/review-create/review-create.component';
import { ReviewListComponent } from './components/critic/review/review-list/review-list.component';
import { ReviewEditComponent } from './components/critic/review/review-edit/review-edit.component';
import { BitService } from './services/bit.service.client';
import { ComedianService } from './services/comedian.service.client';
import { CriticService } from './services/critic.service.client';
import { ReviewService } from './services/review.service.client';
import { FlickrService } from './services/flickr.service.client';
import {SafePipe} from './components/safe-pipe';
import {SharedService} from './services/shared.service.client';
import { AdminLoginComponent } from './components/admin/admin-login/admin-login.component';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { AdmincoCreateComponent } from './components/admin/admin-comedian/adminco-create/adminco-create.component';
import { AdmincoListComponent } from './components/admin/admin-comedian/adminco-list/adminco-list.component';
import { AdmincoEditComponent } from './components/admin/admin-comedian/adminco-edit/adminco-edit.component';
import { AdminciEditComponent } from './components/admin/admin-critic/adminci-edit/adminci-edit.component';
import { AdminciCreateComponent } from './components/admin/admin-critic/adminci-create/adminci-create.component';
import { AdminciListComponent } from './components/admin/admin-critic/adminci-list/adminci-list.component';

@NgModule({
  // Declare components here
  declarations: [
    AppComponent,
    HomeComponent,
    TestComponent,
    SearchComponent,
    RegisterComponent,
    ComedianAccountComponent,
    ComedianLoginComponent,
    ComedianProfileComponent,
    PortfolioComponent,
    CriticProfileComponent,
    CriticAccountComponent,
    CriticLoginComponent,
    ReviewCreateComponent,
    ReviewListComponent,
    ReviewEditComponent,
    ImageCreateComponent,
    ImageListComponent,
    ImageEditComponent,
    VideoEditComponent,
    VideoCreateComponent,
    VideoListComponent,
    FlickrComponent,
    SafePipe,
    ProjectHomeComponent,
    AdminLoginComponent,
    AdminHomeComponent,
    AdmincoCreateComponent,
    AdmincoListComponent,
    AdmincoEditComponent,
    AdminciEditComponent,
    AdminciCreateComponent,
    AdminciListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    Routing
  ],
  // Client Side services here
  providers: [ TestService, BitService, ComedianService, CriticService, ReviewService, FlickrService, SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
