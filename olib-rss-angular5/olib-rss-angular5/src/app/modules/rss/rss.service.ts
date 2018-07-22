import { Injectable }         from '@angular/core';
import { Rss }                from './rss.model';
import { Observable }         from 'rxjs/Observable';
import { ApiService }         from '../../services/api/api.service';
import { UrlType }            from '../../services/url/url.type';

@Injectable()
export class RssService {

  constructor(public apiService : ApiService) { }

  getRss(bookmarkId) : Observable<Rss[]>{
    return this.apiService.get(UrlType.RSS+"/"+bookmarkId)  
  }
}
