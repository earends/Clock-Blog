import { Component, OnInit } from '@angular/core';
import {BlogService} from '../blog.service';
import {Blog} from '../blog';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  constructor(private _blogService:BlogService) { }
  blogs:Blog[];
  ngOnInit() {
    this.GetBlogs();
  }
  GetBlogs() {
    this._blogService.GetBlogs()
      .subscribe(b => this.blogs = b);
  }

}
