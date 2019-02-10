import { Component, OnInit } from '@angular/core';
import  {BlogService} from '../blog.service';
import {Blog} from '../blog';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blog:Blog;

  constructor(private _blogService:BlogService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    this.GetBlog();
  }

  GetBlog():void {
    const id = +this.route.snapshot.paramMap.get('id');
    this._blogService.GetBlog(id)
      .subscribe(e => this.blog = e);
  }
  goBack(): void {
    this.location.back();
  }

}
