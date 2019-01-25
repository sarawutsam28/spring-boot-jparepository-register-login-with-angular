import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../src/environments/environment';
import { User } from '../_models/User';

@Injectable()
export class AuthService {
  baseUrl = environment.baseApiUrl + 'user/';
  constructor(private http: HttpClient) {}

  register(_User:User) {
   return this.http.post(this.baseUrl, _User);
  }

  login(_User:User) {
    return this.http.post<any>(this.baseUrl + 'login', _User);
  }
  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }
}
