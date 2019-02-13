import { Component, Input, AfterViewInit } from '@angular/core';
import {BlogService} from '../blog.service';
import {Blog} from '../blog';

@Component({
  selector: 'app-update-blog',
  templateUrl: './update-blog.component.html',
  styleUrls: ['./update-blog.component.css']
})
export class UpdateBlogComponent implements AfterViewInit {

  constructor(private _blogService:BlogService) { }

  isEditBlog:boolean = false;
  preview:boolean = false;
  _blog:Blog; // selected blog
  blogs:Blog [];

  ngAfterViewInit() {
    this.getBlogs();
  }

  onChange(event:any) {
    this._blog.body = event.html;

  }

  getBlogs() {
    this._blogService.GetBlogs()
      .subscribe(b => this.blogs = b);
  }
  
  onPreview() {
    if (this.preview) {
      this.preview = false;
    } else {
      this.preview = true;
    }
  }

  onSelectBlog(blog:Blog) {
    this._blog = blog;
    this.isEditBlog = true;
  }

  onSubmit() {
    this.isEditBlog = false;
  }
}
