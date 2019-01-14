import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable()
export class PostuserService {

  constructor(private http: HttpClient) {  }

  postProfile(userData) {
    this.http.post(environment.postUrl,userData).subscribe(response => {
      console.log(response);
    })
  }

}
