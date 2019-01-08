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
import { BoldDirective } from './bold.directive';
import { TextSelectDirective } from './text-select.directive';


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
    BoldDirective,
    TextSelectDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
