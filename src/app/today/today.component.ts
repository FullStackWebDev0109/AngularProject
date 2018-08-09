import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {

  persons: any;
  buttons: any;
  constructor() {
    this.persons = [
      'assets/images/1.png', 'assets/images/2.png', 'assets/images/3.png'
    ];
    this.buttons = [
      {link: '', icon: 'fa fa-qrcode icons'},
      {link: '/people', icon: 'fa fa-group icons'},
      {link: '/event', icon: 'fa fa-calendar-check-o icons'},
      {link: '/messages', icon: 'fa fa-commenting-o icons'}
    ];
  }

  ngOnInit() {
  }

}
