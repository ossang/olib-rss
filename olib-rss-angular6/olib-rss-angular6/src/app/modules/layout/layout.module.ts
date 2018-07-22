import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { LayoutComponent }      from './layout.component';
import { MaterialModule }       from '../material/material.module';
import { LayoutRoutingModule }  from './layout-routingModule';
import { SidebarModule }        from '../sidebar/sidebar.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    SidebarModule,
    LayoutRoutingModule
  ],
  declarations: [LayoutComponent]
})
export class LayoutModule { }
