import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {BlogService} from "../../../services/blog.service";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-delete-blog',
  templateUrl: './delete-blog.component.html',
  styleUrls: ['./delete-blog.component.css']
})
export class DeleteBlogComponent implements OnInit {

  messageClass;
  message;
  foundedBlog;
  processing=false;
  blog;
  currentUrl;

  constructor(private location:Location, private blogService: BlogService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.currentUrl=this.activatedRoute.snapshot.params;
    this.blogService.getSingleBlog(this.currentUrl.id)
      .subscribe(data=>{
        if(!data.success){
          this.messageClass='alert alert-danger';
          this.message=data.message;
        }else {
          this.blog=data.blog;
          this.foundedBlog=true;
        }
      })
  }

  deleteBlog(){
    this.processing=true;
    this.blogService.deleteBlog(this.currentUrl.id)
      .subscribe(data=>{
        if(!data.success){
          this.messageClass='alert alert-danger';
          this.message=data.message;
          this.processing=false;
        }else {
          this.messageClass='alert alert-success';
          this.message=data.message;
          setTimeout(()=>{
            this.router.navigate(['/blog']);
          },2000);

        }
      })
  }

  goBack(){
    this.location.back();
  }
}
