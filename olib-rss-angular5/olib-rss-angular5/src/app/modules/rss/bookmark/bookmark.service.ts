import { Injectable }         from '@angular/core';
import { Observable }         from 'rxjs/Observable';

import { Bookmark }           from './bookmark.model';
import { ApiService }         from '../../../services/api/api.service';
import { UrlType }            from '../../../services/url/url.type';

@Injectable()
export class BookmarkService {

  private bookmarkList: Bookmark[]= [];

  constructor(public apiService : ApiService) { }

  getBookmarkList(){
    return this.bookmarkList;
  }
  setBookmarkList(bookmarkList : Bookmark[]){
    this.bookmarkList = bookmarkList;
  }
  
  loadBookmark() : Observable<Bookmark[]>{
    return this.apiService.get(UrlType.BOOKMARK);
  }

  saveBookmark(bookmark : Bookmark) : Observable<number>{
    return this.apiService.post(UrlType.BOOKMARK,bookmark);
  }

  deleteBookmark(id:number) : Observable<Boolean>{
    return this.apiService.delete(UrlType.BOOKMARK+"/"+id);
  }

  updateBookmark(bookmark : Bookmark) : Observable<number>{
    return this.apiService.put(UrlType.BOOKMARK,bookmark);
  }
}
