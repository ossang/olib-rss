import { NgModule }                 from '@angular/core';
import { RouterModule }             from '@angular/router';
import { Routes }                   from '@angular/router';

import { LayoutComponent }          from './layout.component';

export const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'rss/:id', loadChildren: '../../modules/rss/rss.module#RssModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}