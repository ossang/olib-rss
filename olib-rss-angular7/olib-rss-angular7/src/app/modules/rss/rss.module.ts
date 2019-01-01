import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { NbCardModule }       from '@nebular/theme';
import { DragDropModule }     from '@angular/cdk/drag-drop'; 

import { RssRoutingModule }   from './rss-routing.module';
import { RssComponent }       from './rss.component';

@NgModule({
  declarations: [RssComponent],
  imports: [
    CommonModule,
    RssRoutingModule,
    NbCardModule,
    DragDropModule
  ]
})
export class RssModule { }
