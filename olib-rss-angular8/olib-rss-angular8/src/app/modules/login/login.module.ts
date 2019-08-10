import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { FormsModule }          from '@angular/forms';
import { 
  NbInputModule, 
  NbButtonModule 
} from '@nebular/theme';

import { LoginRoutingModule }   from './login-routing.module';
import { LoginComponent }       from './login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    NbInputModule,
    NbButtonModule
  ]
})
export class LoginModule { }
