import { Component, OnInit,AfterViewInit } from '@angular/core';
import { Article, ArticleService} from './article.service';
declare var $:any;

@Component({
  templateUrl: './manage-tweets.component.html',
  styleUrls: ['./manage-tweets.component.css'],
  providers:[ArticleService]
})
export class ManageTweetsComponent implements OnInit,AfterViewInit {
	selected: any;
	id: number;
	pickers: any;



ngOnInit(){
	this.getSelected();
}
ngAfterViewInit(){
	this.pickDate();
}

constructor(private articleservice: ArticleService){

}

getSelected(){
	this.selected = this.articleservice.getTweets();
}

pickDate(){
	this.pickers = this.articleservice.getPickers();

		for (var i = 0; i < this.pickers.length; ++i) {
			$(this.pickers[i]).datetimepicker();
		}
        $('[data-toggle="popover"]').popover();
        $( "#sortable" ).sortable();
  		$( "#sortable" ).disableSelection();

}

onChange(selection,event) {

	// var classAttr = target.attr('.datetimepicker1');
	let timeClass = "."+ selection.id
	let time = $(timeClass).data("DateTimePicker").date().format("LLLL");
	selection.time = time;
	// $('.datetimepicker1').val(selection.time).change();


}

remove(selection){
	this.articleservice.removeArticle(selection,this.selected);

}

}



//this.suggestions.push(new Suggestion(title.value, comment.value, 0));

// For date javascript view: http://jsfiddle.net/X9hyZ/846/