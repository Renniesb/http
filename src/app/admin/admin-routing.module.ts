import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { AdminComponent }           from './admin.component';
import { SelectTweetsComponent }    from './select-tweets.component';
import { ManageTweetsComponent }    from './manage-tweets.component';
import { TweetsScheduledComponent }    from './tweets-scheduled.component';

import { AuthGuard }                from '../auth-guard.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: AdminComponent,
        canActivate: [AuthGuard],
        children: [
          {
            path: '',
            canActivateChild: [AuthGuard],
            children: [
              { path: 'select', component: SelectTweetsComponent },
              { path: 'manage', component: ManageTweetsComponent },
              { path: 'tweets', component: TweetsScheduledComponent },
              { path: '', component: SelectTweetsComponent }
            ]
          }
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule {}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/