import { Injectable } from '@angular/core';
declare var $:any;


export class Article {
  constructor(public name: string, public time: string, public id: any, public modal:any, public modalid:any, public twitterHandle: string, public hashTag:any) { }
}

let PICKERS = [];

let TWEETS = [];

let ARTICLES = [

];


let id = "datetimepicker";
let timeid = "";
let number = 0;
let timeClass = "";
let modalName = "editweet"
let modal = "";

@Injectable()
export class ArticleService {

  getPickers() { return PICKERS; }

  getTweets() {return TWEETS;}

  getTweet(id: string) {
      return TWEETS.find(tweet => tweet.id == id);
  }

  // addArticle(article){
  //   ARTICLES.push(article);
  // }

  getId(){
  	number= number+1;
    timeid = id + number.toString();
    timeClass="." + timeid;
    PICKERS.push(timeClass);
  	return timeid;
  }
  getModal(){
    modal = modalName + number.toString();
    return modal;
  }

  addArticle(post, time, id, modal, modalid,twitterHandle, hashTag){
    TWEETS.push( new Article(post, time, id, modal, modalid, twitterHandle, hashTag));
  }

  removeArticle(selection, tweets){
      let isTweet = this.findWithAttr(tweets, 'name', selection.name);
      tweets.splice( tweets.indexOf(isTweet), 1);

  }

  findWithAttr(tweets, attr, article) {
    for(var i = 0; i < tweets.length; i += 1) {
        if(tweets[i][attr] === article) {
            return tweets[i];
        }
    }
    return false;
  }

}
