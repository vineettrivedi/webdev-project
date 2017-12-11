import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import {SharedService} from './shared.service.client';

// injecting service into module
@Injectable()

export class CriticService {

  options: RequestOptions = new RequestOptions();
  constructor(private _http: Http, private sharedService: SharedService, private router: Router) { }

  baseUrl = environment.baseUrl;

  register(critic: any) {
    this.options.withCredentials = true;
    return this._http.post(this.baseUrl + '/api/critic/register', critic, this.options)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  login(username: String, password: String) {
    this.options.withCredentials = true;
    const critic = {
      username : username,
      password : password
    };
    return this._http.post(this.baseUrl + '/api/critic/login', critic, this.options)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  loggedIn() {
    this.options.withCredentials = true;
    return this._http.post(this.baseUrl + '/api/critic/loggedin', '', this.options)
      .map(
        (res: Response) => {
          const critic = res.json();
          if (critic !== 0) {
            this.sharedService.user = critic;
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
    return this._http.post(this.baseUrl + '/api/critic/logout', '', this.options)
      .map(
        (res: Response) => {
          const data = res;
        }
      );
  }

  findAllCritics() {
    return this._http.get(this.baseUrl + '/api/critic/all')
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  createCritic(critic: any) {
    return this._http.post(this.baseUrl + '/api/critic', critic)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  findCriticById(criticId: string) {
    return this._http.get(this.baseUrl + '/api/critic/' + criticId)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  findCriticByCredentials(username: string, password: string) {
    return this._http.get(this.baseUrl + '/api/critic/?username=' + username + '&password=' + password)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  findCriticByUsername(username: string) {
    return this._http.get(this.baseUrl + '/api/critic/?username=' + username)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  updateCritic(criticId: string, critic: any) {
    return this._http.put(this.baseUrl + '/api/critic/' + criticId, critic)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  deleteCritic(criticId: string) {
    return this._http.delete(this.baseUrl + '/api/critic/' + criticId)
      .map(
        (res: Response) => {
          return;
        }
      );
  }

}
