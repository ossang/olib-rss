import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';
import { FormsModule }          from '@angular/forms';

import { SummaryRoutingModule } from './summary-routing.module';
import { SummaryComponent }     from './summary.component';
import { NebularModule }        from '../nebular/nebular.module';
import { FilterPipe }           from '../pipes/filter.pipe';

@NgModule({
  declarations: [SummaryComponent,FilterPipe],
  imports: [
    CommonModule,
    FormsModule,
    SummaryRoutingModule,
    ScrollDispatchModule,
    NebularModule
  ]
})
export class SummaryModule { }
