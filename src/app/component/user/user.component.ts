import { Component, OnInit } from '@angular/core';
//import { bind } from 'events';

import { RepoArray } from 'src/app/user.ts/user';


 @Component( {
  selector: 'app-user',
  templateUrl: 'user.component.html',
  styleUrls: ['user.component.css']
})
export class UserComponent implements OnInit {

  title = 'Github Search';
  values = Boolean;
  isLoading:boolean = false;
  noInput:boolean = true;
  getFetchSuccess:boolean = false;
  NoUser:boolean = false;
  repoArrays: RepoArray[] | undefined;
  private _githubServiceService: any;

  constructor() { }

  ngOnInit() {
  }


  onKey(event: any) { // without type info
    this.values = event.target.value;
    this.getFetchSuccess = false;
    this.NoUser = false;
    if (this.values == Boolean) {
  			this.noInput = true;
  	} else {
  			this.noInput = false;
    } 
  }

  search(userName: string): void {
  	this.getFetchSuccess = false;
  	this.NoUser = false;
    userName = this.values.caller();
    if (!userName) { return; }
    this._githubServiceService.getRepos(userName) 
    this.isLoading = true;
    this.fetchUser(userName);
  }

fetchUser(UserName: string): void{ 
    this._githubServiceService.getRepos(UserName).subscribe( (data: RepoArray[]) => {
		this.repoArrays = data;
		 if (this.repoArrays == undefined || this.repoArrays && this.repoArrays.length == 0) {
			 this.NoUser = true;
		 } else {
	     this.NoUser = false;
     }
    
	});



    setTimeout(() =>{
       this.isLoading = false;
       this.getFetchSuccess = true;
    }
    )};
    
  }
function createComponent(arg0: { selector: string; templateUrl: string; styleUrls: string[]; }) {
  throw new Error('Function not implemented.');
}

function Componentobject(arg0: { selector: string; templateUrl: string; styleUrls: string[]; }) {
  throw new Error('Function not implemented.');
}

