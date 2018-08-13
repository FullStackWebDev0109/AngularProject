import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {

  public events: Observable<any[]>;
  persons: any;
  buttons: any;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  constructor(db: AngularFirestore) {
    this.events = db.collection('/events').valueChanges();
    console.log(this.events, '-----');
    this.persons = [
      'assets/images/1.png', 'assets/images/2.png', 'assets/images/3.png'
    ];
    this.buttons = [
      { link: '', icon: 'fa fa-qrcode icons' },
      { link: '/people', icon: 'fa fa-group icons' },
      { link: '/event', icon: 'fa fa-calendar-check-o icons' },
      { link: '/messages', icon: 'fa fa-commenting-o icons' }
    ];
    this.text1 = 'What you should know about driving inbound referrals into your business through online sources.';
    this.text2 = 'Suzi, Royce and Anna are metting for coffee - join us?';
    this.text3 = 'The key success is simple, yet it requires the right activity.';
    this.text4 = 'When you help others get what they want, you will get what you want. Make introductions and give referrals.';
  }

  ngOnInit() {
  }

}
