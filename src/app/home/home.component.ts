import { Component, OnInit } from '@angular/core';
import HomeService from './home.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	todos:any;
	fbdata:any;
	online:any;
	constructor(public homeService: HomeService) {}

	ngOnInit() {
	}
	test(){
		this.todos = this.homeService.getTodos();
		console.log(this.todos);
	}
	fbposts(){
		this.homeService.getFBData()
		.subscribe(data => this.fbdata = data.data);
		console.log("FB datas",this.fbdata);
	}
	online_test(){
		this.homeService.getData()
		.subscribe(data => this.online = data);
		console.log(this.online);
	}
}
