import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Blog} from './blog';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})




export class BlogService {

  private blog_url = 'https://localhost:44396/api/Blog';  // URL to web api

  constructor(private http: HttpClient) { }

  GetBlogs(): Observable<Blog[]>{
    return this.http.get<Blog[]>(this.blog_url)
    .pipe(
      catchError(this.handleError('getBlog', []))
    );
  }
  

  GetBlog(id:number) :Observable<Blog> {
   const url = `${this.blog_url}/${id}`;
    return this.http.get<Blog>(url).pipe(
      catchError(this.handleError<Blog>(`getBlog id=${id}`))
    );
  }

  postBlog(blog:Blog):Observable<Blog> {
    return this.http.post<Blog>(this.blog_url, blog, httpOptions).pipe(
      catchError(this.handleError<Blog>('addBlog'))
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
