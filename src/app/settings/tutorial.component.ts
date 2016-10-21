import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorial',
  template: `
  <!-- Header Carousel -->
<header id="myCarousel" class="carousel slide">
<!-- Indicators -->
<ol class="carousel-indicators">
  <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
  <li data-target="#myCarousel" data-slide-to="1"></li>
  <li data-target="#myCarousel" data-slide-to="2"></li>
  <li data-target="#myCarousel" data-slide-to="3"></li>
  <li data-target="#myCarousel" data-slide-to="4"></li>
</ol>
<!-- Wrapper for slides -->
<div class="carousel-inner">
  <div class="item active">
    <div><img class="img-responsive center-block" src="http://placehold.it/550x250"></div>
    <div class="carousel-caption">
      <h1>Set your time zone</h1>
    </div>
  </div>
  <div class="item">
    <div><img class="img-responsive center-block" src="http://placehold.it/550x250" /></div>
    <div class="carousel-caption">
      <h1>Select topics</h1>
    </div>
  </div>
  <div class="item">
    <div><img class="img-responsive center-block" src="http://placehold.it/550x250"></div>
    <div class="carousel-caption">
      <h1 class="text-center">Schedule Tweets</h1>
    </div>
  </div>
  <div class="item">
    <div><img class="img-responsive center-block" src="http://placehold.it/550x250"></div>
    <div class="carousel-caption">
      <h1>Revisit settings menu- to adjust topics, time zone and other settings</h1>
    </div>
  </div>
</div>
<!-- Controls -->
<a data-target="#myCarousel" data-slide="prev" class="left carousel-control">
  <span class="icon-prev"></span>
</a>
<a data-target="#myCarousel" data-slide="next" class="right carousel-control">
  <span class="icon-next"></span>
</a>
</header>

    <!-- Script to Activate the Carousel -->
    <script>
    $('.carousel').carousel({
        interval: 5000 //changes the speed
    });
    </script>


  `
})
export class TutorialComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
