import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  messageClass;
  message;
  newPost = false;
  loadingBlogs= false;
  form;
  processing = false;

  constructor(private formBuilder: FormBuilder) {
    this.createNewBlogForm();
  }

  createNewBlogForm(){
    this.form=this.formBuilder.group({
      title:['',Validators.compose([
        Validators.required,
        Validators.maxLength(60),
        Validators.minLength(3),
        this.alphaNumericValidation
      ])],
      body:['',Validators.compose([
        Validators.required,
        Validators.maxLength(500),
        Validators.minLength(5)
      ])]
    })
  }

  enableFormNewBlogForm(){
    this.form.get('title').enable();
    this.form.get('body').enable();
  }

  disableFormNewBlogForm(){
    this.form.get('title').disable();
    this.form.get('body').disable();
  }

  /*Validations for forms*/
  alphaNumericValidation(controls){
    const regExp = new RegExp(/^[a-zA-Z0-9 ]+$/);
    if(regExp.test(controls.value)){
      return null
    }else return {'alphaNumericValidation':true}
  }

  onBlogSubmit(){
   this.processing=true;
   this.disableFormNewBlogForm();
   const blog = {
     title: this.form.get('title').value,
     body: this.form.get('body').value,
   }
  }


  ngOnInit() {
  }

  newBlogForm(){
    this.newPost=true;
  }

  reloadsBlogs(){
    this.loadingBlogs=true;
    setTimeout(()=>{
      this.loadingBlogs=false;
    },4000)
  }

  draftComment(){

  }

  goBack(){
    window.location.reload()
  }

}
