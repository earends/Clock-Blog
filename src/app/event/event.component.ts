import { Component, OnInit } from '@angular/core';
import {EventService} from '../event.service';
import { ActivatedRoute } from '@angular/router';
import {Event} from '../event';
import {Location} from '@angular/common';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  event:Event;
  constructor(
    private _eventService:EventService,
    private route: ActivatedRoute,
    private location: Location) { }

  going = 4;
  going_people = []
  no_name:Boolean = false;
  ngOnInit() {
    this.GetEvent();
  }

  GetEvent() {
    const id = +this.route.snapshot.paramMap.get('id');
    this._eventService.GetEvent(id)
      .subscribe(e => this.event = e)
  }

  isGoing(newName:string) {
    
    if (newName) {
      this.going += 1;
      this.going_people.push(newName + " is going!");
      this.no_name = false;
    } else {
      this.no_name = true;
    }
    
  }

  isNotGoing(newName:string) {
    if (newName) {
         this.going_people.push(newName + " is not able to make it!");
         this.no_name = false;
    } else {
      this.no_name = true;
    }
  }

  goBack(): void {
    this.location.back();
  }



}
