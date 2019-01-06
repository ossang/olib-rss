import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';
import { FormsModule }          from '@angular/forms';

import { SummaryRoutingModule } from './summary-routing.module';
import { SummaryComponent }     from './summary.component';
import { ThemeModule }          from 'src/app/@theme/theme.module';
import { FilterPipe }           from 'src/app/pipes/filter.pipe';

@NgModule({
  declarations: [SummaryComponent,FilterPipe],
  imports: [
    CommonModule,
    FormsModule,
    SummaryRoutingModule,
    ScrollDispatchModule,
    ThemeModule
  ]
})
export class SummaryModule { }
