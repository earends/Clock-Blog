import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {EVENTS} from './mock-events'; 
import {Event} from './event';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  //private event_url = "";
  constructor(private http:HttpClient) { 
    
  }

  GetEvents(): Observable<Event[]>{
    return of(EVENTS);
  }
  
  GetEvent(id:number) :Observable<Event> {

    for(var i = 0; i < EVENTS.length; i ++)
    {
      if (EVENTS[i].id == id) {
        return of(EVENTS[i]);
      }
    }
    return of(EVENTS[0]);
  }

  
}
