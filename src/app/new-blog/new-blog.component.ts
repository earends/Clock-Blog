import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Blog } from '../blog';
import {BlogService} from '../blog.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-blog',
  templateUrl: './new-blog.component.html',
  styleUrls: ['./new-blog.component.css',
  ]
})

export class NewBlogComponent implements OnInit {

  constructor(private _blogService:BlogService, private router:Router) { }
  blogOutput: any;
  isPreview: boolean = true;
  _blog:Blog = new Blog();
  ngOnInit() {

  }

  onChange(event:any) {
    this._blog.Body = event.html;
  }

  onSubmit() {
    this._blogService.postBlog(this._blog)
    .subscribe(blog => { 
      this.router.navigate([`/Blog/${blog.ID}`])
    });
  }
}
