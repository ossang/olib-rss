import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FlexLayoutModule }   from '@angular/flex-layout';

import { RssComponent }       from './rss.component';
import { MaterialModule }     from '../material/material.module';
import { RssRoutingModule }   from './rss-routingModule';

@NgModule({
  imports: [
    CommonModule,
    RssRoutingModule,
    FlexLayoutModule,
    MaterialModule
  ],
  declarations: [RssComponent]
})
export class RssModule { }
