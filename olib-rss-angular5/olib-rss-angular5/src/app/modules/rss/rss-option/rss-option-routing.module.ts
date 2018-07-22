import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RssAddComponent }      from './rss-add/rss-add.component';
import { RssRemoveComponent }   from './rss-remove/rss-remove.component';

const routes: Routes = [
  { path: 'add', component: RssAddComponent },
  { path: 'remove', component: RssRemoveComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RssOptionRoutingModule { }
