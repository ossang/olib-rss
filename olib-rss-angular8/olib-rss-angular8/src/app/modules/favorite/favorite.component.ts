import { Component, OnInit }  from '@angular/core';
import { RssService }         from '../rss/rss.service';
import { Rss }                from '../rss/rss.model';

@Component({
  selector: 'olib-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {

  rssList : Rss[] = [];

  constructor(
    private rssService : RssService
  ) { }

  ngOnInit() {
    this.initializeFavorite();
  }
  
  initializeFavorite(){
    this.rssService.getFavorite().subscribe(res=>{
      this.rssList = res;
    });
  }
  remove(i){
    this.rssService.removeFavorite(i).subscribe(res=>{
      this.rssService.getFavorite().subscribe(res=>{
        this.rssList = res;
      });
    });
  }
}
