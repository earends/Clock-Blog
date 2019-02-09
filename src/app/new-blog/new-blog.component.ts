import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-new-blog',
  templateUrl: './new-blog.component.html',
  styleUrls: ['./new-blog.component.css',
  ]
})

export class NewBlogComponent implements OnInit {

  constructor() { }
  blogOutput: any;
  isPreview: boolean = true;
  ngOnInit() {

  }

  onChange(event:any) {
    this.blogOutput = event.html;
  }

  done() {
    this.isPreview = true;
  }

  preview() {
    this.isPreview = false;
  }
}
