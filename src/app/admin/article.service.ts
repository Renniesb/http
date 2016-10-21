import { Injectable } from '@angular/core';

export class Schedule {
  constructor(public name: string, public time: number) { }
}

let SCHEDULED = [];

let ARTICLES = [

];



@Injectable()
export class ArticleService {
  getArticles() { return ARTICLES; }

  getScheduled() {return SCHEDULED;}

  addArticle(article){
    ARTICLES.push(article);
  }

  addScheduled(post, time){
    SCHEDULED.push( new Schedule(post, time));
  }

}

