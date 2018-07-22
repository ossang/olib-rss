import { Injectable } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { Observable } from '../../../../node_modules/rxjs';
import { Rss }        from './rss.model';
import { UrlType }    from '../../services/url/url.type';

@Injectable({
  providedIn: 'root'
})
export class RssService {

  constructor(public apiService : ApiService) { }

  getRss(bookmarkId) : Observable<Rss[]>{
    return this.apiService.get(UrlType.RSS+"/"+bookmarkId)  
  }
}
