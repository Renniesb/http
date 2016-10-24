import { Component, OnInit } from '@angular/core';
import { Schedule, ArticleService} from './article.service.ts'

@Component({
  template:  `
	<div class="col-sm-6">
    <h2> Schedule Tweets</h2>
    <div class="panel-group" *ngFor="let tweet of scheduled">
      <div class="panel panel-primary">
        <div class="panel-body">
          <p>{{tweet.name}}</p>
          Time <input type="datetime-local" name="usr_time"  style="height: 22px;" #time>
           <button class="btn btn-primary"(click)="onChange(tweet, time)">Change Scheduled time</button>
      </div>
      <input type="button" class="btn btn-danger" value="Remove" (click)="removeScheduled(tweet)" />
    </div>
   </div>
  `,
  providers:[ArticleService]
})
export class TweetsScheduledComponent implements OnInit {
scheduled: any;

ngOnInit(){
	this.getScheduled();
}

constructor(private articleservice: ArticleService){}

getScheduled(){
	this.scheduled = this.articleservice.getScheduled();
}

onChange(tweet, time) {


}

}



//this.suggestions.push(new Suggestion(title.value, comment.value, 0));

