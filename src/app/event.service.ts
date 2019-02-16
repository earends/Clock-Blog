import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Event} from './event';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})

export class EventService {
  private event_url = 'https://clockblogbackend.azurewebsites.net/api/Event';  // URL to web api

  constructor(private http:HttpClient) { 
    
  }

  GetEvents(): Observable<Event[]>{
    return this.http.get<Event[]>(this.event_url)
    .pipe(
      catchError(this.handleError('getEvents', []))
    );
  }
  
  GetEvent(id:number) :Observable<Event> {
    const url = `${this.event_url}/${id}`;
    return this.http.get<Event>(url).pipe(
      catchError(this.handleError<Event>(`getEvent id=${id}`))
    );
  }

  postEvent(event:Event):Observable<Event> {
    return this.http.post<Event>(this.event_url, event, httpOptions).pipe(
      catchError(this.handleError<Event>('addEvent'))
    ); 
  }

  deleteEvent (id: number): Observable<Event> {
    const url = `${this.event_url}/${id}`;
    return this.http.delete<Event>(url, httpOptions).pipe(
      catchError(this.handleError<Event>('deleteEvent'))
    );
  }
  
  updateEvent(event:Event): Observable<Event> {
    const url = `${this.event_url}/${event.id}`;
    return this.http.put(url, event, httpOptions).pipe(
      catchError(this.handleError<any>('updateEvent'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
