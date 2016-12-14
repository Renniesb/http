import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { MyTweetsComponent }           from './my-tweets.component';
import { SelectTweetsComponent }    from './select-tweets.component';
import { ManageTweetsComponent }    from './manage-tweets.component';
import { FormsModule }    from '@angular/forms';




import { MyTweetsRoutingModule }       from './my-tweets-routing.module';


@NgModule({
  imports: [
    CommonModule,
    MyTweetsRoutingModule,
    FormsModule
  ],
  declarations: [
    MyTweetsComponent,
    SelectTweetsComponent,
    ManageTweetsComponent
  ]
})
export class MyTweetsModule {}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/