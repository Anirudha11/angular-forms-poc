import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';

import { GetuserService } from './getuser.service';
import { PostuserService } from './postuser.service';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { PocFormComponent } from './poc-form/poc-form.component';
import { AngularFormComponent } from './angular-form/angular-form.component';
// import { ResuableFormComponent } from './resuable-form/resuable-form.component';
import { ReusableFormComponent } from './reusable-form/reusable-form.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    PocFormComponent,
    AngularFormComponent,
    // ResuableFormComponent,
    ReusableFormComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    UsersComponent,
    PostsComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [GetuserService, PostuserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
