import { Component } from '@angular/core';

@Component({
  template:  `
    <h3>My Tweets</h3>
    <nav>
      <a routerLink="./" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Select Tweets</a>
      <a routerLink="./manage" routerLinkActive="active">Manage Tweets</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AdminComponent {
}
