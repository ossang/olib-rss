import { NgModule }               from '@angular/core';
import { CommonModule }           from '@angular/common';
import { FormsModule }            from '@angular/forms';

import { RssOptionComponent }     from './rss-option.component';
import { RssOptionRoutingModule } from './rss-option-routing.module';
import { RssAddComponent }        from './rss-add/rss-add.component';
import { RssRemoveComponent }     from './rss-remove/rss-remove.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RssOptionRoutingModule
  ],
  declarations: [
    RssOptionComponent,
    RssAddComponent,
    RssRemoveComponent
  ]
})
export class RssOptionModule { }
