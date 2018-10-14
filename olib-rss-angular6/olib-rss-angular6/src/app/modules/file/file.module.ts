import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileComponent } from './file.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FileComponent],
  exports:[
    FileComponent
  ]
})
export class FileModule { }
