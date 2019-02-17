import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Guest} from './Guest';
import { catchError, map, tap } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class GuestService {

  private guest_url = 'https://clockblogbackend.azurewebsites.net/api/Guest';  // URL to web api

  constructor(private http:HttpClient) { }

  GetGuestsByEvent(id:number) :Observable<Guest[]> {
    const url = `${this.guest_url}/${id}`;
    return this.http.get<Guest[]>(url).pipe(
      catchError(this.handleError<Guest[]>(`getGuests id=${id}`))
    );
  }

  postGuest(guest:Guest):Observable<Guest> {
    return this.http.post<Guest>(this.guest_url, guest, httpOptions).pipe(
      catchError(this.handleError<Guest>('addGuest'))
    ); 
  }
  
  updateGuest(guest:Guest): Observable<Guest> {
    const url = `${this.guest_url}`;
    return this.http.put(url, guest, httpOptions).pipe(
      catchError(this.handleError<any>('updateGuest'))
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
