import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-new-blog',
  templateUrl: './new-blog.component.html',
  styleUrls: ['./new-blog.component.css',
  ]
})

export class NewBlogComponent implements OnInit {

  constructor() { }
  textOutput: any
  ngOnInit() {

  }

  onChange(event:any) {
    this.textOutput = event.html;
  }
}
