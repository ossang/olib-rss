import { Component, OnInit, HostBinding }                   from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem }  from '@angular/cdk/drag-drop';
import { ActivatedRoute }                                   from '@angular/router';
import { Rss }                                              from './rss.model';
import { RssService }                                       from './rss.service';

@Component({
  selector: 'olib-rss',
  templateUrl: './rss.component.html',
  styleUrls: ['./rss.component.scss']
})
export class RssComponent implements OnInit {

  @HostBinding('class.is-open')
  isOpen = false;
  
  rssId : any;
  rssList : Rss[] = [];

  favorite : Rss[] = [];

  constructor(
    private route: ActivatedRoute,
    private rssService : RssService) {
  }

  ngOnInit() {
    this.rssService.initializeOpen();
    this.initializeRssList();
    this.rssService.change.subscribe(isOpen => {
      this.isOpen = isOpen;
    });
    this.initializeFavorite();
  }

  initializeRssList(){
    this.route.params.subscribe( params => {
        if(params['id']){
          this.rssId = params['id'];
          this.rssService.getRss(this.rssId).subscribe(res => {
            this.rssList = res;
          });
        }
      });
  }

  initializeFavorite(){
    this.rssService.getFavorite().subscribe(res=>{
      this.favorite = res;
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      this.rssService.addFavorite(new Rss(event.previousContainer.data[event.previousIndex]));
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  noReturnPredicate() {
    return false;
  }
}
