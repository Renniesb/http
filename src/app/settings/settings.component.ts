import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	this.popups();
  }

  popups(){
    let popover1 = $('#myPopover');
    let popover2 = $('#myPopover2');
    let popover3 = $('#myPopover3');
    let popover4 = $('#myPopover4');

    var time =3000;


   setTimeout(function(){ pop1();},time);

   var pop1 = function(){
      popover1.popover('show');
      setTimeout( function(){ popover1.popover('hide');
      pop2()}, time);}

    var pop2 = function(){
      popover2.popover('show');
      setTimeout( function(){ popover2.popover('hide');
      pop3()}, time);}
    var pop3 = function(){
      popover3.popover('show');
      setTimeout( function(){ popover3.popover('hide');
      pop4()}, time);}
    var pop4 = function(){
      popover4.popover('show');
      setTimeout( function(){ popover4.popover('hide');
      }, time);}

  }


}
