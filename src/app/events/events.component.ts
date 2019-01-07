import { Component, OnInit } from '@angular/core';
import {EventService} from '../event.service';
import {Event} from '../event';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor(private _eventService:EventService) { }
  events: Event[];

  ngOnInit() {
    this.GetEvents();
  }
  GetEvents():void {
    this._eventService.GetEvents()
      .subscribe(events => this.events = events);
  }
  
}
