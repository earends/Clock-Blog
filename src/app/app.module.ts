import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogComponent } from './blog/blog.component';
import { EventsComponent } from './events/events.component';
import { EventComponent } from './event/event.component';
import { AboutComponent } from './about/about.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NewBlogComponent } from './new-blog/new-blog.component';
import { PreviewBlogComponent } from './preview-blog/preview-blog.component';
import { QuillModule } from 'ngx-quill';
import { NavbarComponent } from './navbar/navbar.component';
import { NewEventComponent } from './new-event/new-event.component';
import { UpdateEventComponent } from './update-event/update-event.component';
import { UpdateBlogComponent } from './update-blog/update-blog.component';
import { ContentControlComponent } from './content-control/content-control.component';
import { NewGuestComponent } from './new-guest/new-guest.component';
import { UpdateguestComponent } from './updateguest/updateguest.component';


@NgModule({
  declarations: [
    AppComponent,
    BlogsComponent,
    BlogComponent,
    EventsComponent,
    EventComponent,
    AboutComponent,
    PagenotfoundComponent,
    NewBlogComponent,
    PreviewBlogComponent,
    NavbarComponent,
    NewEventComponent,
    UpdateEventComponent,
    UpdateBlogComponent,
    ContentControlComponent,
    NewGuestComponent,
    UpdateguestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    QuillModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
