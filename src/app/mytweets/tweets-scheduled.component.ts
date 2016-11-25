import { Component, OnInit } from '@angular/core';
import { Schedule, ArticleService} from './article.service.ts';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  templateUrl: './tweets-scheduled.component.html',
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

