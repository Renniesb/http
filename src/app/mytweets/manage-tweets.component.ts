import { Component, OnInit } from '@angular/core';
import { Schedule, ArticleService} from './article.service.ts'

@Component({
  template:  `
  <div class="col-sm-6">
    <h3> Schedule Tweets</h3>
    <div class="panel-group" *ngFor="let selection of selected">
      <div class="panel panel-primary">
        <div class="panel-body">
          <q>{{selection}}</q>
          <p><label>Choose Time: </label> <input type="datetime-local" name="usr_time" style="height: 22px;" #time></p>
           <button class="btn btn-primary"(click)="onChange(selection, time)">Schedule Tweet</button>
      </div>
      <input type="button" class="btn btn-danger" value="Remove" (click)="removeSelected(selection)" />
    </div>
   </div>
  `,
  providers:[ArticleService]
})
export class ManageTweetsComponent implements OnInit {
scheduled: Schedule[];
selected: any;
id: number;



ngOnInit(){
	this.getSelected();
}

constructor(private articleservice: ArticleService){

}

getSelected(){
	this.selected = this.articleservice.getArticles();
}

removeSelected(selection){
	this.articleservice.getArticles().splice(selection, 1);
}

onChange(selection, time: HTMLInputElement,id) {

	if(time.value.length > 0) {
		this.id = this.articleservice.getId();
		this.articleservice.addScheduled(selection,time.value,this.id);
		console.log(this.articleservice.getTweets());
    this.articleservice.getArticles().splice(selection, 1);
    alert("Tweet Scheduled");
	} else {
		alert('enter a date and time')
	}

//   if (this.articleservice.getArticles().indexOf(article) ===-1) {
//                this.articleservice.addArticle(article);
//                console.log(this.articleservice.getArticles());

//            }else {

//               this.articleservice.getArticles().splice(article, 1);
//               console.log(this.articleservice.getArticles());
//            };

}

}



//this.suggestions.push(new Suggestion(title.value, comment.value, 0));

