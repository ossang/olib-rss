import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';

import { RssRoutingModule }   from './rss-routing.module';
import { RssComponent }       from './rss.component';

@NgModule({
  imports: [
    CommonModule,
    RssRoutingModule
  ],
  declarations: [
    RssComponent
  ]
})
export class RssModule { }
