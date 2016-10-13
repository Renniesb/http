import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SignOnComponent } from './sign-on/sign-on.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { TimeZoneComponent } from './time-zone/time-zone.component';
import { TopicsComponent } from './topics/topics.component';
import { SchedTweetsComponent } from './sched-tweets/sched-tweets.component';
import { TweetsSchedComponent } from './tweets-sched/tweets-sched.component';

@NgModule({
  declarations: [
    AppComponent,
    SignOnComponent,
    TutorialComponent,
    TimeZoneComponent,
    TopicsComponent,
    SchedTweetsComponent,
    TweetsSchedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
