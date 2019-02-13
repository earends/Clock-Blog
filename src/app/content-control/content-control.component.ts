import { Component, OnInit } from '@angular/core';
import {BlogService} from '../blog.service';
import {Blog} from '../blog';

@Component({
  selector: 'app-content-control',
  templateUrl: './content-control.component.html',
  styleUrls: ['./content-control.component.css']
})
export class ContentControlComponent implements OnInit {

  startPage:boolean = true;
  newBlog:boolean = false;
  updateBlog:boolean = false;
  newEvent:boolean = false;
  updateEvent:boolean = false;
  pin:number;
  constructor() { }

  ngOnInit() {

  }

  checkPin(pin:number):boolean {
    if (this.pin == 1234) {
      return true;
    } else {
      return false;
    }
  }


  onNewBlog() {
    if (!this.checkPin(this.pin)) {
      return;
    }
    this.startPage = false;
    this.newBlog = true;
    this.updateBlog = false;
    this.newEvent = false;
    this.updateEvent = false;
  }

  onUpdateBlog() {
    if (!this.checkPin(this.pin)) {
      return;
    }
    this.startPage = false;
    this.newBlog = false;
    this.updateBlog = true;
    this.newEvent = false;
    this.updateEvent = false;
  }

  onNewEvent() {
    if (!this.checkPin(this.pin)) {
      return;
    }
    this.startPage = false;
    this.newBlog = false;
    this.updateBlog = false;
    this.newEvent = true;
    this.updateEvent = false;
  }

  onUpdateEvent() {
    if (!this.checkPin(this.pin)) {
      return;
    }
    this.startPage = false;
    this.newBlog = false;
    this.updateBlog = false;
    this.newEvent = false;
    this.updateEvent = true;
  }

  onBack() {
    this.startPage = true;
    this.newBlog = false;
    this.updateBlog = false;
    this.newEvent = false;
    this.updateEvent = false;
  }

  

}
