import { Injectable } from '@angular/core';

export class Schedule {
  constructor(public name: string, public time: number, id: number) { }
}

let SCHEDULED = [];

let ARTICLES = [

];

let id = 0;



@Injectable()
export class ArticleService {

  getArticles() { return ARTICLES; }

  getScheduled() {return SCHEDULED;}

  addArticle(article){
    ARTICLES.push(article);
  }
  getId(){
  	id= id+1;
  	return id;
  }

  addScheduled(post, time, id){
    SCHEDULED.push( new Schedule(post, time, id));
  }

}

