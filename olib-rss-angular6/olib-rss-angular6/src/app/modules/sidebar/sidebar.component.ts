import { Component, OnInit }    from '@angular/core';
import { Router }               from '../../../../node_modules/@angular/router';
import { Bookmark }             from '../bookmark/bookmark.model';
import { BookmarkService }      from '../bookmark/bookmark.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  bookmarkList: Bookmark[]= [];
  
  constructor(
    public bookmarkService : BookmarkService,
    private router:Router) {
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
    this.initializeBookmark();
  }

  go(bookmarkId){
    this.router.navigate(['/rss/'+bookmarkId]);
  }
}
