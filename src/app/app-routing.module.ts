import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './component/profile/profile.component';
import { UserComponent } from './component/user/user.component';
import { RouterOutlet } from '@angular/router';



const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo: '/' },
  { path: '', component:  ProfileComponent   },
  { path: 'user', component: UserComponent },
 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }