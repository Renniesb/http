import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClickOutsideModule } from 'ng2-click-outside';

import { LoginRoutingModule }   from './login-routing.module';


import { AppRoutingModule }     from './app-routing.module';
import { TutorialRoutingModule }     from './tutorial/tutorial-routing.module';




import { LoginComponent }       from './login.component';
import { AppComponent } from './app.component';
import { SignOnComponent } from './sign-on/sign-on.component';
import { TutorialComponent } from './settings/tutorial.component';
import { TimeZoneComponent } from './settings/time-zone.component';
import { SelectTopicsComponent } from './settings/select-topics.component';

import { DialogService }        from './dialog.service';
import { SettingsComponent } from './settings/settings.component';
import { SettingsRoutingModule } from './settings/settings-routing.module';
import { MainTutorialComponent } from './tutorial/tutorial.component'




@NgModule({
  declarations: [
    AppComponent,
    SignOnComponent,
    MainTutorialComponent,
    TutorialComponent,
    TimeZoneComponent,
    SelectTopicsComponent,
    LoginComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    LoginRoutingModule,
    AppRoutingModule,
    SettingsRoutingModule,
    TutorialRoutingModule,
    ClickOutsideModule
  ],
  providers: [DialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
