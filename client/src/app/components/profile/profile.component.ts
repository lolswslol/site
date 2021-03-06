import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {AuthGuard} from "../../guards/auth.guard";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  username;
  email;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.getProfile()
      .subscribe(data=>{
        const profile=data.json();
        this.username=profile.user.username;
        this.email=profile.user.email;
      })
  }

  check(){
    console.log(this.authService.isLoggedIn())
  }

}
