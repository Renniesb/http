import { Component, OnInit } from '@angular/core';
import { Schedule, ArticleService} from './article.service';
declare var $:any;

@Component({
  templateUrl: './manage-tweets.component.html',
  styleUrls: ['./manage-tweets.component.css'],
  providers:[ArticleService]
})
export class ManageTweetsComponent implements OnInit {
scheduled: Schedule[];
selected: any;
id: number;



ngOnInit(){
	this.getSelected();
	this.pickDate();
}

constructor(private articleservice: ArticleService){

}

getSelected(){
	this.selected = this.articleservice.getArticles();
}

removeSelected(selection){
	this.articleservice.getArticles().splice(selection, 1);
}

pickDate(){
	    $('.datetimepicker1').datetimepicker();
        $('[data-toggle="popover"]').popover();
        $( "#sortable" ).sortable();
  		$( "#sortable" ).disableSelection();
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

// For date javascript view: http://jsfiddle.net/X9hyZ/846/