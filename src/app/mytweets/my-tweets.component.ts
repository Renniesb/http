import { Component } from '@angular/core';

@Component({
  template:  `
    <h3>My Tweets</h3>
    <nav>
      <a routerLink="./" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Select Tweets</a>
      <a routerLink="./manage" routerLinkActive="active">Schedule Tweets</a>

    </nav>
    <router-outlet></router-outlet>
  `
})
export class MyTweetsComponent {
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/