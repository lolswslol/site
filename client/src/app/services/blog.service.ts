import { Injectable } from '@angular/core';
import {Headers, RequestOptions, Http} from "@angular/http";
import { AuthService } from './auth.service';

@Injectable()
export class BlogService {

  options;
  domain = this.authService.domain;

  constructor(private authService: AuthService, private http: Http) { }

  createAuthenticationHeaders(){
    this.authService.loadToken();
    this.options=new RequestOptions({
      headers: new Headers({
        'Content-Type':'application/json',
        'authorization': this.authService.authToken
      })
    })
  }

  newBlog(blog){
    this.createAuthenticationHeaders();
    return this.http.post(this.domain+'/blogs/newBlog',blog,this.options)
  }

}
