import { Component, OnInit, HostBinding,
         trigger, transition, animate,
         style, state } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Schedule, ArticleService} from './article.service.ts'

@Component({
  template: `
  <h2>Edit Scheduled Tweets</h2>
  <div *ngIf="tweet">
    <h3>"{{tweet.name}}"</h3>
      <label>Time: </label>
      <input type="datetime-local" [(ngModel)]="tweet.time" placeholder="time"/>
    <p>
      <button (click)="gotoTweet()">Back</button>
    </p>
  </div>
  `,
  providers:[ArticleService],
  animations: [
    trigger('routeAnimation', [
      state('*',
        style({
          opacity: 1,
          transform: 'translateX(0)'
        })
      ),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100%)'
        }),
        animate('0.2s ease-in')
      ]),
      transition('* => void', [
        animate('0.5s ease-out', style({
          opacity: 0,
          transform: 'translateY(100%)'
        }))
      ])
    ])
  ]
})
export class ScheduledDetailComponent implements OnInit {
  @HostBinding('@routeAnimation') get routeAnimation() {
    return true;
  }

  @HostBinding('style.display') get display() {
    return 'block';
  }

  @HostBinding('style.position') get position() {
    return 'absolute';
  }

  tweet: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ArticleService) {}

  ngOnInit() {
   this.tweet = this.service.getTweet(this.route.snapshot.params['id']);
  }

  gotoTweet() { let detailId = this.tweet ? this.tweet.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    this.router.navigate(['admin/tweets']);
  }
}