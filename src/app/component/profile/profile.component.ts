import { Component, OnInit } from '@angular/core';
import { GithubService } from './service/github.service';
import { FormControl } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  providers: [GithubService]
})
export class ProfileComponent implements OnInit {
  user: any;
  repos: any;
  username: FormControl = new FormControl();
  constructor(private _githubService: GithubService) { }

  ngOnInit() {
    this.username.valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .subscribe((username: any) => this._githubService.getUser(username)
        .subscribe((user: any) => {
          this.user = user
          this._githubService.getRepos(username).subscribe((repos: any) => {
          this.repos = repos
        })}
      ))
  }
}

