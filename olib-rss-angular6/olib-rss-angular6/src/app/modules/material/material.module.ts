import { NgModule } from '@angular/core';

import { 
  MatToolbarModule, 
  MatButtonModule, 
  MatSidenavModule, 
  MatIconModule, 
  MatListModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule
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
    MatFormFieldModule
  ],
  exports:[
    MatToolbarModule, 
    MatButtonModule, 
    MatSidenavModule, 
    MatIconModule, 
    MatInputModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule
  ]
})
export class MaterialModule { }
