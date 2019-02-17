import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {ApprovedGuest} from './approvedGuest';
import { catchError, map, tap } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})

export class ApprovedguestService {

  private guest_url = 'https://clockblogbackend.azurewebsites.net/api/ApprovedGuest';  // URL to web api

  constructor(private http:HttpClient) { }

  GetApprovedGuest(): Observable<ApprovedGuest[]>{
    return this.http.get<ApprovedGuest[]>(this.guest_url)
    .pipe(
      catchError(this.handleError('getApprovedGuests', []))
    );
  }

  postApprovedGuest(guest:ApprovedGuest):Observable<ApprovedGuest> {
    return this.http.post<ApprovedGuest>(this.guest_url, guest, httpOptions).pipe(
      catchError(this.handleError<ApprovedGuest>('addApprovedGuest'))
    ); 
  }

  updateApprovedGuest(guest:ApprovedGuest): Observable<ApprovedGuest> {
    const url = `${this.guest_url}`;
    return this.http.put(url, guest, httpOptions).pipe(
      catchError(this.handleError<any>('updateApprovedGuest'))
    );
  }

  deleteApprovedGuest (id: number): Observable<ApprovedGuest> {
    const url = `${this.guest_url}/${id}`;
    return this.http.delete<ApprovedGuest>(url, httpOptions).pipe(
      catchError(this.handleError<ApprovedGuest>('deleteApprovedGuest'))
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
