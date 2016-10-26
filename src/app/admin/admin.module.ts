import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { AdminComponent }           from './admin.component';
import { SelectTweetsComponent }    from './select-tweets.component';
import { ManageTweetsComponent }    from './manage-tweets.component';
import { TweetsScheduledComponent } from './tweets-scheduled.component';
import { ScheduledDetailComponent }    from './scheduled-detail.component';
import { FormsModule }    from '@angular/forms';




import { AdminRoutingModule }       from './admin-routing.module';


@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ],
  declarations: [
    AdminComponent,
    SelectTweetsComponent,
    ManageTweetsComponent,
    TweetsScheduledComponent,
    ScheduledDetailComponent
  ]
})
export class AdminModule {}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/