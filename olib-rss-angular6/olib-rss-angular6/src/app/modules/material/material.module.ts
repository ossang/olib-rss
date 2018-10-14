import { NgModule } from '@angular/core';

import { 
  MatToolbarModule, 
  MatButtonModule, 
  MatSidenavModule, 
  MatIconModule, 
  MatListModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule
} from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule, 
    MatButtonModule, 
    MatSidenavModule, 
    MatIconModule, 
    MatListModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    MatDialogModule
  ],
  exports:[
    MatToolbarModule, 
    MatButtonModule, 
    MatSidenavModule, 
    MatIconModule, 
    MatInputModule,
    MatListModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule
  ]
})
export class MaterialModule { }
