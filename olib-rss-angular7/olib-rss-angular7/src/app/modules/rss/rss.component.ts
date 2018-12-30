import { Component, OnInit }    from '@angular/core';
import { ActivatedRoute }       from '@angular/router';
import { Rss }                  from './rss.model';
import { RssService }           from './rss.service';

@Component({
  selector: 'olib-rss',
  templateUrl: './rss.component.html',
  styleUrls: ['./rss.component.scss']
})
export class RssComponent implements OnInit {

  rssId : any;
  rssList : Rss[] = [];

  constructor(
    private route: ActivatedRoute,
    private rssService : RssService) {
  }

  ngOnInit() {
    this.initializeRssList();
  }

  initializeRssList(){
    this.route.params.subscribe( params => {
        if(params['id']){
          this.rssId = params['id'];
          this.rssService.getRss(this.rssId).subscribe(rss => {
            this.rssList = rss;
          });
        }
      });
  }
}
