import { NgModule }               from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';
import { MainComponent }          from './main.component';

const routes: Routes = [
  {path:'',component:MainComponent,
    children:[
      { path:'rss/:id', loadChildren: ()=>import('../../modules/rss/rss.module').then(m=>m.RssModule)},
      { path:'bookmark', loadChildren: ()=>import('../../modules/bookmark/bookmark.module').then(m=>m.BookmarkModule)},
      { path:'favorite', loadChildren: ()=>import('../../modules/favorite/favorite.module').then(m=>m.FavoriteModule)},
      { path:'summary', loadChildren: ()=>import('../../modules/summary/summary.module').then(m=>m.SummaryModule)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
