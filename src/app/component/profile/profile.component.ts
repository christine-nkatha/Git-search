import { Component, OnInit } from '@angular/core';

import { FormControl } from '@angular/forms';
import { GithubService } from 'src/app/service/github.service';
//import { ProfileComponent } from './component/profile/profile.component';
//import 'rxjs/add/operator/debounceTime';
//import 'rxjs/add/operator/distinctUntilChanged';


@Component({
  //moduleId: module.id,
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  providers: []
})
export class ProfileComponent implements OnInit {
  user: any;
  repos: any;
  username: FormControl = new FormControl();
  constructor(private _githubService: GithubService) { }

  ngOnInit() {
   //{} this.username.valueChanges,
     // .debounceTime(400)
     // .distinctUntilChanged()
     // .subscribe((username: any) => this._githubService.getUser(username)
     // .subscribe((user: any) => {
       //   this.user = user
        //  this._githubService.getRepos(username).subscribe((repos: any) => {
       //   this.repos = repos
     //   })}
    //  ))
//  }
  }
}