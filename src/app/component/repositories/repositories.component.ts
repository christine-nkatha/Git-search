import { Component, OnInit, Input, SimpleChanges, NgModule } from '@angular/core';


@Component({
  selector: 'app-repository',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
  export class  implements OnInit {

  	@Input() passData: any;
	          arrayData: any;

 constructor() {
 }

  ngOnInit() {
  }

 ngOnChanges(changes: SimpleChanges) {
    if (changes['passData']) {
		this.arrayData = this.passData;
	}
  }
}

function Componentobj(arg0: { selector: string; templateUrl: string; styleUrls: string[]; }) {
  throw new Error('Function not implemented.');
}
