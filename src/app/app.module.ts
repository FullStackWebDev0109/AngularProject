import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { TodayComponent } from './today/today.component';
import { AppRoutingModule } from './app-routing.module';
import { EventComponent } from './event/event.component';
import { MessagesComponent } from './messages/messages.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
