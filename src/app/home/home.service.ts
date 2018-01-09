import {Injectable} from '@angular/core';

import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export default class HomeService {
  constructor(private http:Http) {}
  getTodos(){
    return [{
      "id": 1,
      "label": "delectus aut autem",
      "completed": false
    },{
      "id": 2,
      "label": "quis ut nam facilis et officia qui",
      "completed": false
    },{
      "id": 3,
      "label": "fugiat veniam minus",
      "completed": false
    },{
      "id": 4,
      "label": "et porro tempora",
      "completed": true
    },{
      "id": 5,
      "label": "laboriosam mollitia et enim quasi adipisci quia provident illum",
      "completed": false
    }];
  }

  getData(){ 
        let check = this.http.get('http://jsonplaceholder.typicode.com/posts/')
           .map((res:Response) => res.json());
           console.log(check);
           return check;
    }
    getFBData(){ 
        let posts = this.http.get('https://graph.facebook.com/v2.4/215000951849628/photos?access_token=833367813443301%7CnDhKBT0o6K7a7j_5LMfc3QSbRNs&fields=images,name')
           .map((res:Response) => res.json());
           console.log(posts);
           return posts;
    }
    getLoc(){ 
        let check = this.http.get('http://maps.googleapis.com/maps/api/geocode/json?latlng=8.560692999999999,76.87785&sensor=true')
           .map((res:Response) => res.json());
           console.log(check);
           return check;
    }
}