import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable }                       from 'rxjs';
import { ApiService }                       from 'src/app/services/api/api.service';
import { Rss }                              from './rss.model';
import { UrlType }                          from 'src/app/services/url/url.type';

@Injectable({
  providedIn: 'root'
})
export class RssService {

  isOpen = false;

  @Output() 
  change: EventEmitter<boolean> = new EventEmitter();

  constructor(public apiService : ApiService) { }

  getRss(bookmarkId) : Observable<Rss[]>{
    return this.apiService.get("/api/rss/"+bookmarkId);  
  }

  toggleFavorite(){
    this.isOpen = !this.isOpen;
    this.change.emit(this.isOpen);
  }
  
  addFavorite(rss : Rss){
    this.apiService.post(UrlType.FAVORITE,rss).subscribe();
  }

  removeFavorite(i) :Observable<any>{
    return this.apiService.delete(UrlType.FAVORITE+"/"+i);
  }

  getFavorite() : Observable<Rss[]>{
    return this.apiService.get(UrlType.FAVORITE);
  }

  initializeOpen(){
    this.isOpen = false;
  }

  getSummary() : Observable<Rss[]>{
    return this.apiService.get(UrlType.SUMMARY);
  }
}
