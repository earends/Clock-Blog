import { Component, OnInit } from '@angular/core';
import {Event} from '../Event'
import {EventService} from '../event.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css']
})
export class NewEventComponent implements OnInit {

  constructor(private _eventService:EventService, private router:Router) { }
  event:Event = new Event();

  ngOnInit() {
  }

  onSubmit() {
    this._eventService.postEvent(this.event)
    .subscribe(event => { 
      this.router.navigate([`/Events`])
    });
  }

}
