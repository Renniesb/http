import { Injectable } from '@angular/core';

export class Schedule {
  constructor(public name: string, public time: number, public id: number) { }
}

let TWEETS = [];

let ARTICLES = [

];

let id = 0;

@Injectable()
export class ArticleService {

  getArticles() { return ARTICLES; }

  getTweets() {return TWEETS;}

  getTweet(id: number | string) {
      return TWEETS.find(tweet => tweet.id == id);
  }

  addArticle(article){
    ARTICLES.push(article);
  }
  getId(){
  	id= id+1;
  	return id;
  }

  addScheduled(post, time, id){
    TWEETS.push( new Schedule(post, time, id));
  }

}
