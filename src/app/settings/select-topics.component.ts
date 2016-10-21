import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-topics',
  templateUrl: `
	<div class="container-fluid">
  <div class="row">
    <div class="jumbotron col-xs-12">
      <h2>Choose a topic</h2>
      <button type="button" class="btn btn-default btn-block">Economy</button>
      <button type="button" class="btn btn-default btn-block">Sports</button>
      <button type="button" class="btn btn-default btn-block">Business</button>
      <button type="button" class="btn btn-default btn-block">Technology</button>
    </div>
  </div>

</div>
  `
})
export class SelectTopicsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
