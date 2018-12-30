import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { NbCardModule }       from '@nebular/theme';

import { RssRoutingModule }   from './rss-routing.module';
import { RssComponent }       from './rss.component';

@NgModule({
  declarations: [RssComponent],
  imports: [
    CommonModule,
    RssRoutingModule,
    NbCardModule
  ]
})
export class RssModule { }
