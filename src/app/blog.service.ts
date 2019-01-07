import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Blog} from './blog';
import {BLOGS} from './mock-blogs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor() { }

  GetBlogs(): Observable<Blog[]>{
    return of(BLOGS);
  }
  
  GetBlog(id:number) :Observable<Blog> {

    for(var i = 0; i < BLOGS.length; i ++)
    {
      if (BLOGS[i].id == id) {
        return of(BLOGS[i]);
      }
    }
    return of(BLOGS[0]);
  }
}
