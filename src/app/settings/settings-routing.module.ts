import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { SettingsComponent }           from './settings.component';
import { SelectTopicsComponent }    from './select-topics.component';
import { TutorialComponent }    from './tutorial.component';
import { TimeZoneComponent }    from './time-zone.component';
import { AuthGuard }                from '../auth-guard.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'settings',
        component: SettingsComponent,
        canActivate: [AuthGuard],
        children: [
          {
            path: '',
            canActivateChild: [AuthGuard],
            children: [
              { path: 'tutorial', component: TutorialComponent },
              { path: 'topics', component: SelectTopicsComponent },
              { path: 'zone', component: TimeZoneComponent },
              { path: '', component: TutorialComponent }
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
export class SettingsRoutingModule {}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/