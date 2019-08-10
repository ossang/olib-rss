import { Injectable }         from '@angular/core';
import { Observable }         from 'rxjs';
import { Bookmark }           from './bookmark.model';
import { ApiService }         from '../../services/api/api.service';
import { BookmarkUrl }        from './bookmark.enum';

@Injectable({
    providedIn: 'root'
})
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
    return this.apiService.get(BookmarkUrl.URL);
  }

  saveBookmark(bookmark : Bookmark) : Observable<number>{
    return this.apiService.post(BookmarkUrl.URL,bookmark);
  }

  deleteBookmark(id:number) : Observable<Boolean>{
    return this.apiService.delete(BookmarkUrl.URL+"/"+id);
  }

  updateBookmark(bookmark : Bookmark) : Observable<number>{
    return this.apiService.put(BookmarkUrl.URL,bookmark);
  }
}
