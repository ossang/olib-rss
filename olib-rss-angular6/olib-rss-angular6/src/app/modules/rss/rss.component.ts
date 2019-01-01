import { Component, OnInit }  from '@angular/core';
import { ActivatedRoute }     from '../../../../node_modules/@angular/router';
import { Rss }                from './rss.model';
import { RssService }         from './rss.service';

@Component({
  selector: 'app-rss',
  templateUrl: './rss.component.html',
  styleUrls: ['./rss.component.css']
})
export class RssComponent implements OnInit {

  rssId : number; 

  rssList : Rss[] = [];

  constructor(
    private route: ActivatedRoute,
    private rssService : RssService) {

    this.route.params.subscribe( 
      params => {
        if(params['id']){
          this.rssId = params['id'];
          this.rssService.getRss(this.rssId).subscribe(
            rss => {this.rssList = rss;}
          );
        }
      });

  }

  ngOnInit() {
  }

}
