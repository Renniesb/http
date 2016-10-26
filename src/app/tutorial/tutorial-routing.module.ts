import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { MainTutorialComponent }           from './tutorial.component';

import { AuthGuard }                from '../auth-guard.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'tutorial', component: MainTutorialComponent }
    ])
  ],
  exports: [
    RouterModule
  ]})
export class TutorialRoutingModule {}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/