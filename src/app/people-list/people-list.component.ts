import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  cards: any;
  buttons: any;
  constructor() {
    this.cards = [
      { img: 'assets/images/3.png', name: 'Alena Morris', title: 'Real Estate Agent' },
      { img: 'assets/images/1.png', name: 'Alex Ryer', title: 'Real Estate Broker' },
      { img: 'assets/images/2.png', name: 'Andrew Blitz', title: 'Life Insurance Agent' },
      { img: 'assets/images/3.png', name: 'Andy Corbin', title: 'Software Engineer' },
      { img: 'assets/images/4.png', name: 'Brenda Green', title: 'Photographer' },
      { img: 'assets/images/1.png', name: 'Betty Morris', title: 'UI/UX Designer' }
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
