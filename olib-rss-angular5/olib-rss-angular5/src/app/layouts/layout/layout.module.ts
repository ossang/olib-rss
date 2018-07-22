import { NgModule }                   from '@angular/core';
import { CommonModule }               from '@angular/common';
import { BsDropdownModule }           from 'ngx-bootstrap/dropdown';

import { LayoutComponent }            from './layout.component';
import { 
  HeaderComponent,
  SidebarComponent }                  from '../index';
import { SIDEBAR_TOGGLE_DIRECTIVES }  from '../../directives/sidebar.directive';
import { NAV_DROPDOWN_DIRECTIVES }    from '../../directives/nav-dropdown.directive';
import { FeedMenuComponent }          from '../../modules/rss/feed-menu/feed-menu.component';
import { RssMenuComponent }           from '../../modules/rss/rss-menu/rss-menu.component';
import { BookmarkService }            from '../../modules/rss/bookmark/bookmark.service';
import { RssService }                 from '../../modules/rss/rss.service';
import { LayoutRoutingModule }        from './layout-routing.module';


@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    BsDropdownModule.forRoot(),
  ],
  declarations: [
    LayoutComponent,
    HeaderComponent,
    SIDEBAR_TOGGLE_DIRECTIVES,
    NAV_DROPDOWN_DIRECTIVES,
    SidebarComponent,
    FeedMenuComponent,
    RssMenuComponent 
  ],
  providers : [ 
    BookmarkService,
    RssService
  ]
})
export class LayoutModule { }
