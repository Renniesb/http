import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { LoginRoutingModule }   from './login-routing.module';


import { AppRoutingModule }     from './app-routing.module';


import { HeroesModule }         from './heroes/heroes.module';
import { CrisisCenterModule }   from './crisis-center/crisis-center.module';

import { LoginComponent }       from './login.component';
import { AppComponent } from './app.component';
import { SignOnComponent } from './sign-on/sign-on.component';
import { TutorialComponent } from './settings/tutorial.component';
import { TimeZoneComponent } from './settings/time-zone.component';
import { SelectTopicsComponent } from './settings/select-topics.component';
import { SchedTweetsComponent } from './sched-tweets/sched-tweets.component';
import { TweetsSchedComponent } from './tweets-sched/tweets-sched.component';
import { DialogService }        from './dialog.service';
import { SettingsComponent } from './settings/settings.component';
import { SettingsRoutingModule } from './settings/settings-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    SignOnComponent,
    TutorialComponent,
    TimeZoneComponent,
    SelectTopicsComponent,
    SchedTweetsComponent,
    TweetsSchedComponent,
    LoginComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HeroesModule,
    CrisisCenterModule,
    LoginRoutingModule,
    AppRoutingModule,
    SettingsRoutingModule
  ],
  providers: [DialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
