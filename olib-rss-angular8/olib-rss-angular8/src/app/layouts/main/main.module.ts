import { NgModule }               from '@angular/core';
import { CommonModule }           from '@angular/common';

import { MainRoutingModule }      from './main-routing.module';
import { MainComponent }          from './main.component';
import { LayoutModule }           from '../layout/layout.module';
import { NebularModule }          from 'src/app/modules/nebular/nebular.module';


@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    LayoutModule,
    NebularModule
  ]
})
export class MainModule { }
