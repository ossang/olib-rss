import { NgModule }               from '@angular/core';
import { CommonModule }           from '@angular/common';
import { Ng2SmartTableModule }    from 'ng2-smart-table';

import { BookmarkRoutingModule }  from './bookmark-routing.module';
import { BookmarkComponent }      from './bookmark.component';
import { NebularModule }          from '../nebular/nebular.module';

@NgModule({
  declarations: [BookmarkComponent],
  imports: [
    CommonModule,
    Ng2SmartTableModule,
    BookmarkRoutingModule,
    NebularModule
  ]
})
export class BookmarkModule { }
