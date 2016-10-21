import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeroListComponent }    from './hero-list.component';
import { HeroDetailComponent }  from './hero-detail.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'heroes',  component: HeroListComponent },
      { path: 'hero/:id', component: HeroDetailComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class HeroRoutingModule { }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/