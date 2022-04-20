import { BrowserModule } from '@angular/platform-browser';
import {  CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './component/profile/profile.component';

import { AppRoutingModule } from './app-routing.module'
import { GithubServiceService } from './service/github.service';
import { AppComponent } from './app.component';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './component/user/user.component';



@NgModule({
  declarations: [
    ProfileComponent,
    AppComponent,
    UserComponent,


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule

],
  providers: [GithubServiceService],
  bootstrap: [AppComponent, ProfileComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
