import { Component, OnInit }  from '@angular/core';
import { NbMenuItem }         from '@nebular/theme';
import { BookmarkService }    from 'src/app/modules/bookmark/bookmark.service';

@Component({
  selector: 'olib-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  // menu = MENU_ITEMS;
  menu : NbMenuItem[] = new Array;
  
  constructor(
    private bookmarkService : BookmarkService
  ) { }

  ngOnInit() {
    this.initializeMenu();
  }

  initializeMenu(){
    this.initializeFeedMenu(); 
  }

  initializeFeedMenu(){
    let submenu = new NbMenuItem;
    submenu.title = "Feed";
    submenu.icon ="nb-home";

    this.bookmarkService.loadBookmark().subscribe((bookmark)=>{
      let subChildren = new Array;
      
      bookmark.forEach(book=>{
        subChildren.push({title:book.name,link:'/main/rss/'+book.id});
      });

      submenu.children = subChildren;
      this.menu.push(submenu);
      this.initializeToolMenu();
    });
  }

  initializeToolMenu(){
    let submenu = new NbMenuItem;
    submenu.title = "Tool";
    submenu.icon = "nb-gear";
    submenu.children = [{
      title:'Bookmark Tool',
      link:'/main/bookmark'
    }];
    this.menu.push(submenu);
  }
}
