import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';
import { MyTweetsComponent }           from './my-tweets.component';
import { SelectTweetsComponent }    from './select-tweets.component';
import { ManageTweetsComponent }    from './manage-tweets.component';



import { AuthGuard }                from '../auth-guard.service';


@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: MyTweetsComponent,
        canActivate: [AuthGuard],
        children: [
          {
            path: '',
            canActivateChild: [AuthGuard],
            children: [
              { path: 'select', component: SelectTweetsComponent },
              { path: 'manage', component: ManageTweetsComponent },
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
export class MyTweetsRoutingModule {}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/