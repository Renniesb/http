import { Component, OnInit } from '@angular/core';
import { Schedule, ArticleService} from './article.service.ts';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  template:  `
	<div class="col-sm-6">
    <h3>Tweets Scheduled </h3>
    <div class="panel-group" *ngFor="let tweet of scheduled">
      <div class="panel panel-primary">
        <div class="panel-body">
          <p>{{tweet.name}}</p>
          <label>Date Scheduled: </label><input type="datetime-local" [(ngModel)]="tweet.time" style="height: 22px;">
      </div>
      <input type="button" class="btn btn-danger" value="Remove"(click)="removeScheduled(tweet)" />
    </div>
   </div>
  `,
  providers:[ArticleService]
})
export class TweetsScheduledComponent implements OnInit {
scheduled: Schedule[];

private selectedId: number;

  constructor(
    private service: ArticleService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.scheduled = this.service.getTweets();
  }

  removeScheduled(tweet){
    this.service.getTweets().splice(tweet, 1);
  }

}



//this.suggestions.push(new Suggestion(title.value, comment.value, 0));

