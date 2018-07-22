import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { BookmarkService }   from '../../bookmark/bookmark.service';
import { Bookmark }          from '../../bookmark/bookmark.model'

@Component({
  selector: 'app-rss-remove',
  templateUrl: './rss-remove.component.html',
  styleUrls: ['./rss-remove.component.scss']
})
export class RssRemoveComponent implements OnInit {

  isEdit = false;

  bookmarkList: Bookmark[]= [];

  constructor(
    public bookmarkService : BookmarkService,
    private router: Router) { 

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

  ngOnInit() {
  }

  removeRss(id:number){
    if(confirm("remove ?")){
      this.bookmarkService.deleteBookmark(id)
        .subscribe(res=>
              { if(res){
                  this.initializeBookmark();
                }
              });
    }
  }

  editRss(){
    if(this.isEdit){
      this.isEdit = false;
    }else{
      this.isEdit = true;
    }
  }

  editApplyRss(bookmark:Bookmark){
      this.bookmarkService.updateBookmark(bookmark)
            .subscribe(res=> this.applayResult(res));
  }

  applayResult(res){
    if(res){
      this.applaySuccess(res);
    }else{
      this.applayError();
    }
  }

  applaySuccess(id){
    alert("Success!");
    this.initializeBookmark();
    this.router.navigate(['/rss',id]);
  }

  applayError(){
    alert("URL Error!");
  }

}
