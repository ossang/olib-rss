import { Component, OnInit }                from '@angular/core';
import { BookmarkService }                  from '../bookmark/bookmark.service';
import { Bookmark }                         from '../bookmark/bookmark.model'

@Component({
  selector: 'app-feed-menu',
  templateUrl: './feed-menu.component.html',
  styleUrls: ['./feed-menu.component.scss']
})
export class FeedMenuComponent implements OnInit {

  bookmarkList: Bookmark[]= [];

  constructor(
    public bookmarkService : BookmarkService) {
      this.initializeBookmark();
  }

  initializeBookmark(): void {
    this.bookmarkService
        .loadBookmark()
        .subscribe(res => {
          this.bookmarkService.setBookmarkList(res);
          this.bookmarkList = this.bookmarkService.getBookmarkList();
      });
  }

  ngOnInit(): void {
  }


}
