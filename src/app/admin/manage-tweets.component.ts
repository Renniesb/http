import { Component, OnInit } from '@angular/core';
import { Schedule, ArticleService} from './article.service.ts'

@Component({
  template:  `
  <div class="col-sm-6">
    <h2> Schedule Tweets</h2>
    <div class="panel-group" *ngFor="let selection of selected">
      <div class="panel panel-primary">
        <div class="panel-body">
          <p>{{selection}}</p>
          Time <input type="datetime-local" name="usr_time" style="height: 22px;" #time>
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
		this.id = this.articleservice.getId()
		 console.log(this.id);
		this.articleservice.addScheduled(selection,time.value,this.id);
		console.log(this.articleservice.getScheduled());
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

