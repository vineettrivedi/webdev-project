import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import {SharedService} from './shared.service.client';

// injecting service into module
@Injectable()

export class ComedianService {

  options: RequestOptions = new RequestOptions();
  constructor(private _http: Http, private sharedService: SharedService, private router: Router) { }

  baseUrl = environment.baseUrl;

  register(comedian: any) {
    this.options.withCredentials = true;
    return this._http.post(this.baseUrl + '/api/comedian/register', comedian, this.options)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  login(username: String, password: String) {
    this.options.withCredentials = true;
    const comedian = {
      username : username,
      password : password
    };
    return this._http.post(this.baseUrl + '/api/comedian/login', comedian, this.options)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  loggedIn() {
    this.options.withCredentials = true;
    return this._http.post(this.baseUrl + '/api/comedian/loggedin', '', this.options)
      .map(
        (res: Response) => {
          const comedian = res.json();
          if (comedian !== 0) {
            this.sharedService.user = comedian;
            return true;
          } else {
            this.router.navigate(['login']);
            return false;
          }
        }
      );
  }

  logout() {
    this.options.withCredentials = true;
    return this._http.post(this.baseUrl + '/api/comedian/logout', '', this.options)
      .map(
        (res: Response) => {
          const data = res;
        }
      );
  }

  findAllComedians() {
    return this._http.get(this.baseUrl + '/api/comedian/all')
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  createComedian(comedian: any) {
    return this._http.post(this.baseUrl + '/api/comedian', comedian)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  findComedianById(comedianId: string) {
    return this._http.get(this.baseUrl + '/api/comedian/' + comedianId)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  findComedianByCredentials(username: string, password: string) {
    return this._http.get(this.baseUrl + '/api/comedian/?username=' + username + '&password=' + password)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  findComedianByUsername(username: string) {
    return this._http.get(this.baseUrl + '/api/comedian/?username=' + username)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  updateComedian(comedianId: string, comedian: any) {
    return this._http.put(this.baseUrl + '/api/comedian/' + comedianId, comedian)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  deleteComedian(comedianId: string) {
    return this._http.delete(this.baseUrl + '/api/comedian/' + comedianId)
      .map(
        (res: Response) => {
          return;
        }
      );
  }

}
