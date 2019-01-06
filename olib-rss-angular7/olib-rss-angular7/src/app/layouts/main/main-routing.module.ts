import { NgModule }               from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';
import { MainComponent }          from './main.component';

const routes: Routes = [{
  path:'',component:MainComponent,
  children:[
      { path:'rss/:id', loadChildren :'../../modules/rss/rss.module#RssModule'},
      { path:'bookmark', loadChildren :'../../modules/bookmark/bookmark.module#BookmarkModule'},
      { path:'favorite', loadChildren :'../../modules/favorite/favorite.module#FavoriteModule'},
      { path:'summary', loadChildren :'../../modules/summary/summary.module#SummaryModule'}
  ]

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
