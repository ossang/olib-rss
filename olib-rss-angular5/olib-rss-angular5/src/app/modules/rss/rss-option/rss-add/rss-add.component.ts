import { Component, OnInit }  from '@angular/core';
import { Router }             from '@angular/router';

import { Bookmark }           from '../../bookmark/bookmark.model';
import { BookmarkService }    from '../../bookmark/bookmark.service';

@Component({
  selector: 'app-rss-add',
  templateUrl: './rss-add.component.html',
  styleUrls: ['./rss-add.component.scss']
})
export class RssAddComponent implements OnInit {

  isErrorUrl = false;
  errorMessage = '';

  bookmark : Bookmark ={
    name : '',
    url : '',
    id : 0
  };

  constructor(
    public bookmarkService : BookmarkService,
    private router: Router) {
    }

  ngOnInit() {
  }

  addRss(bookmark){
    this.bookmarkService.saveBookmark(bookmark)
        .subscribe(res=>this.addResult(res));
  }

  addResult(res){
    if(res){
      this.success(res);
    }else{
      this.error();
    }
  }

  success(res){
    this.bookmarkService.loadBookmark()
      .subscribe(res=>this.bookmarkService.setBookmarkList(res));
      
    this.errorMessage = '';
    this.isErrorUrl = false;
    this.router.navigate(['/rss',res]);
  }

  error(){
    this.errorMessage = 'Check URL !';
    this.isErrorUrl = true;
  }
}
