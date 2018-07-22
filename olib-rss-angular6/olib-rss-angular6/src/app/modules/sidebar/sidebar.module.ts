import { NgModule }         from '@angular/core';
import { CommonModule }     from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { MaterialModule }   from '../material/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [SidebarComponent],
  exports:[SidebarComponent]
})
export class SidebarModule { }
