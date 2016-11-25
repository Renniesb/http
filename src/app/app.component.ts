import { Component } from '@angular/core';
import { WpostService} from './wpost.service.ts';
import { OnInit } from '@angular/core';
import 'rxjs/add/operator/map';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [WpostService]
})
export class AppComponent implements OnInit {
	articles: any;

	constructor (private wpservice: WpostService) {

  }

    getNew(): void {
    this.articles = this.wpservice.getPosts();
  }

  ngOnInit(): void {
		this.getNew();
  }

}
