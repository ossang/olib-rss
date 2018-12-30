import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { Observable } from 'rxjs';
import { Rss } from './rss.model';

@Injectable({
  providedIn: 'root'
})
export class RssService {

  constructor(public apiService : ApiService) { }

  getRss(bookmarkId) : Observable<Rss[]>{
    return this.apiService.get("/api/rss/"+bookmarkId);  
  }
}
