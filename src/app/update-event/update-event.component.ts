import { Component, AfterViewInit } from '@angular/core';
import {Event} from '../event';
import {EventService} from '../event.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.css']
})
export class UpdateEventComponent implements AfterViewInit {

  constructor(private eventService:EventService,private router:Router) { }
  events:Event [];
  isEditEvent:boolean = false;
  selectedEvent: Event;

  ngAfterViewInit() {
    this.getEvents();
  }

  getEvents() {
    this.eventService.GetEvents()
    .subscribe(events => this.events = events);

  }

  onSelectEvent(event:Event) {
    this.selectedEvent = event;
    this.isEditEvent = true;
  }

  onSubmit() {
    this.eventService.updateEvent(this.selectedEvent)
    .subscribe(event => { 
      this.router.navigate([`/Events`])
    });
  }

  onDelete() {
    this.eventService.deleteEvent(this.selectedEvent.id)
    .subscribe(event => { 
      this.router.navigate([`/Events`])
    });
  }
}
