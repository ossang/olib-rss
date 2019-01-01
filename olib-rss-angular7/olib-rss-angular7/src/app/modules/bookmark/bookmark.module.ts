import { NgModule }               from '@angular/core';
import { CommonModule }           from '@angular/common';
import { Ng2SmartTableModule }    from 'ng2-smart-table';

import { BookmarkRoutingModule }  from './bookmark-routing.module';
import { BookmarkComponent }      from './bookmark.component';
import { ThemeModule }            from 'src/app/@theme/theme.module';

@NgModule({
  declarations: [BookmarkComponent],
  imports: [
    CommonModule,
    Ng2SmartTableModule,
    BookmarkRoutingModule,
    ThemeModule
  ]
})
export class BookmarkModule { }
