import { NgModule }                           from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { NbAuthComponent }                    from '@nebular/auth';
import { LoginGuard }                         from './modules/login/login.guard';

const routes: Routes = [
  { path: 'main', canActivate:[LoginGuard], loadChildren: './layouts/main/main.module#MainModule'},
  {
    path: 'auth',
    component: NbAuthComponent,
    children: [
      { path: 'login', loadChildren :'./modules/login/login.module#LoginModule'}
    ],
  },
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  { path: '**', redirectTo: 'auth/login' }
];


const config: ExtraOptions = {
  useHash: true,
};
@NgModule({
  imports: [RouterModule.forRoot(routes,config)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
