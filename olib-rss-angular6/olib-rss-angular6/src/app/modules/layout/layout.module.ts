import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { LayoutComponent }      from './layout.component';
import { MaterialModule }       from '../material/material.module';
import { LayoutRoutingModule }  from './layout-routingModule';
import { SidebarModule }        from '../sidebar/sidebar.module';
import { FileModule }           from '../file/file.module';
import { LayoutDialogComponent } from './layout-dialog/layout-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    SidebarModule,
    FileModule,
    LayoutRoutingModule
  ],
  entryComponents:[
    LayoutComponent,LayoutDialogComponent
  ],
  declarations: [LayoutComponent, LayoutDialogComponent]
})
export class LayoutModule { }
