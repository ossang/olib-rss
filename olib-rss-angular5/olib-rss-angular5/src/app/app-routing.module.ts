import { NgModule }               from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';
import { LoginGuard }             from './guards/index';
import { 
  LoginComponent,
  SignupComponent,
  ChangePasswordComponent
} from './components';

const routes : Routes = [
  { path: '',                   canActivate:[LoginGuard], loadChildren : './layouts/layout/layout.module#LayoutModule'  },
  { path:'login',               component : LoginComponent},
  { path:'signup',              component : SignupComponent},
  { path:'change-password',     component : ChangePasswordComponent,canActivate:[LoginGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
