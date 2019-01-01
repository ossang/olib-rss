import { NgModule }               from '@angular/core';
import { CommonModule }           from '@angular/common';
import { NbCardModule }           from '@nebular/theme';

import { FavoriteRoutingModule }  from './favorite-routing.module';
import { FavoriteComponent }      from './favorite.component';

@NgModule({
  declarations: [FavoriteComponent],
  imports: [
    CommonModule,
    NbCardModule,
    FavoriteRoutingModule
  ]
})
export class FavoriteModule { }
