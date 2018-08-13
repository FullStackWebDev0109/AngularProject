import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppComponent } from './app.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { TodayComponent } from './today/today.component';
import { AppRoutingModule } from './app-routing.module';
import { EventComponent } from './event/event.component';
import { MessagesComponent } from './messages/messages.component';
import { environment } from './../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    PeopleListComponent,
    TodayComponent,
    EventComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
