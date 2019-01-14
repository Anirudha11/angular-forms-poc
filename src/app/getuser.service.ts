import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable()
export class GetuserService {
  // userUrl = 'https://reqres.in/api/users?page=1';
  constructor(private httpClient: HttpClient) { }

  getUser(){
    return this.httpClient.get(environment.getUrl);
  }
}
