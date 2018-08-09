import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { TodayComponent } from './today/today.component';
import { EventComponent } from './event/event.component';
import { MessagesComponent } from './messages/messages.component';

const routes: Routes = [
    {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    },
    {
      path: 'home',
      component: TodayComponent
    },
    {
      path: 'people',
      component: PeopleListComponent
    },
    {
      path: 'event',
      component: EventComponent
    },
    {
      path: 'messages',
      component: MessagesComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [ RouterModule ],
    declarations: []
})
export class AppRoutingModule { }
