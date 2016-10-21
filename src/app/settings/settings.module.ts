import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';


import { SettingsComponent }     from './settings.component';
import { SelectTopicsComponent }       from './select-topics.component';
import { TimeZoneComponent } from './time-zone.component';
import { TutorialComponent }     from './tutorial.component';

import { SettingsRoutingModule } from './settings-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SettingsRoutingModule
  ],
  declarations: [
    TimeZoneComponent,
    TutorialComponent,
    SelectTopicsComponent,
    SettingsComponent
  ],
  providers: [
  ]
})
export class CrisisCenterModule {}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/