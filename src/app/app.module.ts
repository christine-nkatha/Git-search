import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { ProfileComponent } from './component/profile/profile.component';

import { GithubService } from './service/github.service';

@NgModule({
  declarations: [
    AppComponent, 
    ProfileComponent,

  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
