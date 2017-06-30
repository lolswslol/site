import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  domain = 'http://localhost:8080';

  constructor(private http:Http) {

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

}
