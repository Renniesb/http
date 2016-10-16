import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toArray';



@Injectable()
export class WpostService {

  constructor( private http: Http ) {

   }

	getPosts(){
   	return this.http
   	.get("https://newsapi.org/v1/articles?source=the-washington-post&sortBy=top&apiKey=c23015fcb2c248abaef820c25b393f34")
   	.map(res => res.json())
   	.map(data => data.articles);
   }
}
