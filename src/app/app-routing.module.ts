import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { PostComponent } from './post/post.component';

const routes : Routes = [
  { path:'', component: HomeComponent },
  { path:'about', component: AboutComponent },
  { path:'users', component: UsersComponent },
  { path:'posts', component: PostsComponent },
  { path:'post/:id', component: PostComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
