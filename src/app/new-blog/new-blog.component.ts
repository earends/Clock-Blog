import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-new-blog',
  templateUrl: './new-blog.component.html',
  styleUrls: ['./new-blog.component.css']
})
export class NewBlogComponent implements OnInit {
  preview:boolean = false;
  done:boolean = true;

  _post = {
    title: "My Awesome title",
    description: "My Awesome Description"
  }
  pinWrong:boolean = false;
  pin;
  
  constructor() { }

  ngOnInit() {
  }

  onPreview() {
    this.preview = true;
    this.done = false;
  }

  onDone() {
    this.done = true;
    this.preview = false;
  }

  onSubmit() {
    if (this.pin != 4) {
      this.pinWrong = true;
    } else {
      this.pinWrong = false;
    }
  }

  onBold(textArea:string) {

  }




}
