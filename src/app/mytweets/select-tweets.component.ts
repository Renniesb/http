import { Component } from '@angular/core';
import { WpostService} from '../wpost.service.ts';
import { ArticleService} from './article.service.ts'
@Component({
  template:  `

	 <div class="container">
            <div class="row">
                <div class="col-sm-6">
                    <h3>Choose tweets</h3>

                <div class="scroll panel-group">

                <div *ngFor="let article of articles | async" class="panel panel-primary">
                  <div class="panel-body">
                  <input type="checkbox" (change)="onChange(article.title)">
                 		<q>{{article.title}}</q>
                </div>
            </div>
        </div>
        <button type="button" class="btn btn-warning"><a routerLink="./manage" routerLinkActive="active">Schedule Tweets</a></button>
    </div>


  `,
   providers: [WpostService, ArticleService]
})



export class SelectTweetsComponent {

	articles: any;

	constructor (private wpservice: WpostService, private articleservice: ArticleService) {

  	}

    getNew(): void {
    this.articles = this.wpservice.getPosts();

  }

  ngOnInit(): void {
		this.getNew();
  }

onChange(article) {



   if (this.articleservice.getArticles().indexOf(article) ===-1) {
                this.articleservice.addArticle(article);
                console.log(this.articleservice.getArticles());



            }
  else {

               //this.articleservice.getArticles().splice(article, 1);
               console.log(this.articleservice.getArticles());
               alert("tweet is already selected");
        };

}




}

