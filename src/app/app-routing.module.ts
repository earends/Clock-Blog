import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {BlogComponent} from './blog/blog.component';
import {BlogsComponent} from './blogs/blogs.component';
import {EventComponent} from './event/event.component';
import {EventsComponent} from './events/events.component';
import {NewBlogComponent} from './new-blog/new-blog.component';
import {PreviewBlogComponent} from './preview-blog/preview-blog.component';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';

const routes: Routes = [   
  { path: '', redirectTo: '/Events', pathMatch: 'full' },
  { path: 'Events', component: EventsComponent },
  {path: 'Events/:id',component:EventComponent },
  {path: 'Blogs',component:BlogsComponent},
  {path :'Blogs/:id',component:BlogComponent},
  {path : 'About',component:AboutComponent},
  {path : 'NewBlog',component:NewBlogComponent},
  {path: 'PreviewBlog',component:PreviewBlogComponent},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
