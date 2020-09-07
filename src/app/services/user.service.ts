import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; //Nos permite hacer conexiones con aplicaciones externas utilizando el protocolo http
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public apiURL: String;

  constructor(private http: HttpClient) {
    this.apiURL = GLOBAL.url;
  }

  prepareHeaders() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
  }
  getUsers(page) {
    return this.http.get(`${this.apiURL}/users/${page}`, this.prepareHeaders());
  }
}
