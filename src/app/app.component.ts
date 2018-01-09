import { Component } from '@angular/core';
import AppService from './app.service';
import {Observable} from 'rxjs/Rx';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'app';
	location:any;
	lat:any;
	lon:any;
	add:any;
	wea:any;
	avgtemp:any;
	maxtemp:any;
	mintemp:any;
	place:any;
	district:any;
	area:any;
	pressure:any;
	humidity:any;
	allow:boolean = false;
	constructor(public appService: AppService) {}
	ngOnInit() {
		if(navigator.geolocation){
			navigator.geolocation.getCurrentPosition(position => {
				this.location = position.coords;
				this.lat=position.coords.latitude;
				this.lon=position.coords.longitude;
				console.log(position.coords.latitude,position.coords.longitude); 
				this.getLocation(position.coords.latitude,position.coords.longitude);
				// setTimeout(()=>{this.Weather(this.lat,this.lon)}, 1000);
				this.Weather(this.lat,this.lon);
				this.allow=true;
			});
		}

	}

	getLocation(lat,lon){
		this.appService.getLoc(lat,lon)
		.subscribe(data => {
			this.add = data.results[1];
			this.place = this.add.address_components[0].long_name;
			this.area = this.add.address_components[1].long_name;
			this.district = this.add.address_components[2].short_name;
		});
		// this.place=this.add.address_components[0].long_name
		// .results[1].formatted_address
		console.log("Datas",this.add);
	}
	Weather(lat,lon){
		this.appService.getWeather(lat,lon)
		.subscribe(data =>{
			this.wea = data.main;
			console.log("Weather",this.wea);
			this.pressure = this.wea.pressure;
			this.humidity = this.wea.humidity;
			if(this.wea){
				this.avgtemp=Math.floor(this.wea.temp -273);
				this.maxtemp=Math.floor(this.wea.temp_max -273);
				this.mintemp=Math.floor(this.wea.temp_min -273);
			}
		},
		error => {
			console.log("error");
		} );
	}
}
