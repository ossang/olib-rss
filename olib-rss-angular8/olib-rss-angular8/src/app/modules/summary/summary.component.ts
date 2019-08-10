import { Component, OnInit, TemplateRef } from '@angular/core';
import { NbDialogService }                from '@nebular/theme';
import { BehaviorSubject }                from 'rxjs';
import { RssService }                     from '../rss/rss.service';
import { Rss }                            from '../rss/rss.model';

@Component({
  selector: 'olib-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  rssList : Rss[];
  rssObservable :any;
  searchString : any;

  constructor(
    private rssService : RssService,
    private dialogService: NbDialogService
  ) { }

  ngOnInit() {
    this.rssService.getSummary().subscribe(res=>{
      this.rssList = res;
      this.rssObservable =  new BehaviorSubject(this.rssList);
    });
  }

  openDetail(dialog: TemplateRef<any>,rss:Rss){
    this.dialogService.open(
      dialog,
      {
        context:rss
      }
    )
  }
  
  addFavorite(rss:Rss){
    this.rssService.addFavorite(rss);
    alert("favorite added!");
  }

  sortBy(prop: 'title' | 'pubDate') {
    this.rssObservable.next(this.rssList.map(s => ({ ...s })).sort((a, b) => {
      const aProp = a[prop], bProp = b[prop];
      if (aProp < bProp) {
        return -1;
      } else if (aProp > bProp) {
        return 1;
      }
      return 0;
    }));
  }
}
