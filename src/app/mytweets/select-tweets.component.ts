import { Component } from '@angular/core';
import { WpostService} from '../wpost.service';
import { ArticleService} from './article.service'
@Component({
  template:  `

	 <div class="container">
            <div class="row">
               <div class="col-sm-8">
                    <h3>Choose tweets</h3>

                <div class="scroll panel-group">

                <div *ngFor="let article of articles | async" class="panel panel-primary">
                  <div class="panel-body">
                    <input type="checkbox" (change)="onChange(article.title)">
                   		<q>{{article.title}}</q>
                  </div>
                </div>
               </div>
               <button type="button" class="btn btn-default" routerLink="./manage" routerLinkActive="active"><a>Schedule Tweets</a>
               </button>
              </div>

            </div>
    </div>

  `,
   providers: [WpostService, ArticleService]
})



export class SelectTweetsComponent {
  articles: any;
	tweets: any;
  id: any;
  modal: any;

	constructor (private wpservice: WpostService, private articleservice: ArticleService) {

  	}

    getNew(): void {
    this.articles = this.wpservice.getPosts();

  }

  ngOnInit(): void {
		this.getNew();
  }



onChange(article) {

  this.tweets = this.articleservice.getTweets();

     let isTweet = this.articleservice.findWithAttr(this.tweets, 'name', article);

   if (isTweet === false) {
               let modalid = "";
                this.id = this.articleservice.getId();
                this.modal = this.articleservice.getModal();
                modalid = "#" + this.modal;
                this.articleservice.addArticle(article,"Click Calendar to schedule",this.id,this.modal, modalid, "","");
                console.log(this.articleservice.getTweets());



            }
  else {

               // this.articleservice.getTweets().splice( this.tweets.indexOf(isTweet), 1);
               console.log(this.articleservice.getTweets());



        };

}




}

