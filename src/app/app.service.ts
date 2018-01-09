 import {Injectable} from '@angular/core';
 import {Http, Response} from '@angular/http';
 import 'rxjs/add/operator/map';
 import { Observable } from 'rxjs/Observable';

 @Injectable()
 export default class AppService {
       constructor(private http:Http) {}
       getLoc(lat,lon){ 
             let check = this.http.get('http://maps.googleapis.com/maps/api/geocode/json?latlng='+lat+','+lon+'&sensor=true')
             .map((res:Response) => res.json());
             console.log("loc",check);
             return check;
       }
       getWeather(lat,lon){ 
             let weather = this.http.get('http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid=05fd8f08c51f2e612aaa833d41ac06a3')
             .map((res:Response) => res.json());
             console.log("whe",weather);
             return weather;
       }
 }



// key=05fd8f08c51f2e612aaa833d41ac06a3
// api.openweathermap.org/data/2.5/forecast/daily?lat=35&lon=139&cnt=10