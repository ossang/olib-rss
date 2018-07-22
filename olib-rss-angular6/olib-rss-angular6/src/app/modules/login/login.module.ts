import { NgModule }         from '@angular/core';
import { CommonModule }     from '@angular/common';
import { LoginComponent }   from './login.component';
import { MaterialModule }   from '../material/material.module';
import { FormsModule }      from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  declarations: [LoginComponent],
  exports : [
    LoginComponent
  ]
})
export class LoginModule { }
