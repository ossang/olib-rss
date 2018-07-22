import { NgModule }               from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';
import { LoginComponent }         from './modules/login/login.component';
import { LoginGuard }             from './modules/login/login.guard';

const routes : Routes = [
  { path: '',                   canActivate:[LoginGuard], loadChildren : './modules/layout/layout.module#LayoutModule'  },
  { path:'login',               component : LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
