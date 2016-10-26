import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { MainTutorialComponent }           from './tutorial.component';

import { FormsModule }    from '@angular/forms';




import { TutorialRoutingModule }       from './tutorial-routing.module';


@NgModule({
  imports: [
    CommonModule,
    TutorialRoutingModule,
    FormsModule
  ],
  declarations: [
    MainTutorialComponent
  ]
})
export class TutorialModule {}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/