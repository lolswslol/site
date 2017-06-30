import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthService } from "../../services/auth.service";
import 'rxjs/operator/map';
import { Router } from "@angular/router";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form:FormGroup;
  message;
  messageClass;
  emailValid;
  emailMessage;
  usernameValid;
  usernameMessage;



  constructor(private formBuilder: FormBuilder,private authService:AuthService, private router:Router) {
    this.createForm();
  }

  createForm(){
    this.form=this.formBuilder.group(
      {
        email:['',Validators.compose([
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(30),
          this.validateEmail
        ])],
        username:['',Validators.compose([
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(30),
          this.validateUsername
        ])],
        password:['',Validators.compose([
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(30),
          this.validatePassword
        ])],
        confirmPassword:['',Validators.compose([
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(30),

        ])],
      },
      {
        validator: this.matchingPassword('password','confirmPassword')
      }
    )
  }

  //custom validations
  validateEmail(controls){
    const regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    if(regExp.test(controls.value)){
      return null;
    }else {
      return {validateEmail:true}
    }
  }

  validateUsername(controls){
    const regExp = new RegExp(/^[a-z0-9_-]{5,30}$/);
    if(regExp.test(controls.value)){
      return null;
    }else return {validateUsername:true}
  }

  validatePassword(controls){
    const regExp = new RegExp(/^[a-z0-9_-]{5,30}$/);
    if(regExp.test(controls.value)){
      return null;
    }else return {validatePassword:true}
  }

  matchingPassword(password,confirmPassword){
    return (group:FormGroup)=>{
      if(group.controls[password].value===group.controls[confirmPassword].value){
        return null;
      }else {
        return {matchingPassword:true}
      }
    }
  }
//Checkers
  checkEmail(){
    const email = this.form.get('email').value;
    this.authService.checkEmail(email).subscribe(data=>{
      let emailData= data.json();
      console.log(emailData);
      if(!emailData.success){
        this.emailValid=false;
        this.emailMessage=emailData.message;
      }else {
        this.emailValid=true;
        this.emailMessage=emailData.message;
      }
    });
  }

  checkUsername(){
    const username = this.form.get('username').value;
    this.authService.checkUsername(username).subscribe(data=>{
      let usernameData= data.json();
      console.log(usernameData);
      if(!usernameData.success){
        this.usernameValid=false;
        this.usernameMessage=usernameData.message;
      }else {
        this.usernameValid=true;
        this.usernameMessage=usernameData.message;
      }
    });
  }



  onRegistrySubmit(){
    const user = {
      email: this.form.get('email').value,
      username: this.form.get('username').value,
      password:this.form.get('password').value
    };

    this.authService.registerUser(user)
        .subscribe((data:any)=>{
          let messageData=data.json();
          if(!messageData.success){
            this.messageClass='alert alert-danger';
            this.message=messageData.message;
          }else {
            this.messageClass='alert alert-success';
            this.message=messageData.message;
            setTimeout(()=>{
              this.router.navigate(['/login'])
            },2000);
          }
          console.log(data.json())});

  }


  ngOnInit() {
  }

}
