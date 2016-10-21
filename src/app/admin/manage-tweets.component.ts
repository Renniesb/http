import { Component, OnInit } from '@angular/core';
import { Schedule, ArticleService} from './article.service.ts'

@Component({
  template:  `

  `,
  providers:[ArticleService]
})
export class ManageTweetsComponent implements OnInit {
scheduled: Schedule[];

ngOnInit(){}

constructor(private articleService: ArticleService){}


}



//this.suggestions.push(new Suggestion(title.value, comment.value, 0));

