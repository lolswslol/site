import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";
import { tokenNotExpired } from "angular2-jwt";

@Injectable()
export class AuthService {

  domain = 'http://localhost:8080';
  authToken;
  user;
  options;

  constructor(private http:Http) {

  }

  loadToken(){
    this.authToken=localStorage.getItem('token');
  }

  createAuthenticationHeaders(){
    this.loadToken();
    this.options=new RequestOptions({
      headers: new Headers({
        'Content-Type':'application/json',
        'authorization': this.authToken
      })
    })
  }

  registerUser(user){
    return this.http.post(this.domain+"/authentication/register",user);

  }

  checkUsername(username){
    return this.http.get(this.domain+"/authentication/checkUsername/"+ username,username);

  }

  checkEmail(email){
    return this.http.get(this.domain+"/authentication/checkEmail/"+ email,email);

  }

  login(user):Observable<Response>{
    return this.http.post(this.domain+'/authentication/login',user)

  }

  logout(){
    this.authToken=null;
    this.user=null;
    localStorage.clear();
  }

  storeUserData(token,user){
    localStorage.setItem('token',token);
    localStorage.setItem('user',JSON.stringify(user));
    this.authToken=token;
    this.user = user;
  }

  getProfile(){
    this.createAuthenticationHeaders();
    return this.http.get(this.domain+'/authentication/profile',this.options)
  }

  getPublicProfile(username){
    this.createAuthenticationHeaders();
    return this.http.get(this.domain+'/authentication/publicProfile/'+username,this.options)
      .map(res=>res.json())
  }

  isLoggedIn(){
    return tokenNotExpired();
  }

}
