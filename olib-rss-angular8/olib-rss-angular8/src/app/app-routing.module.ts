import { NgModule }               from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';
import {
  NbAuthComponent
} from '@nebular/auth';

const routes: Routes = [
  { path: 'main', loadChildren: () => import('./layouts/main/main.module').then(m => m.MainModule)},
  {
    path: 'auth',
    component: NbAuthComponent,
    children: [
      {
        path: 'login',
        loadChildren : ()=> import('./modules/login/login.module').then(m=>m.LoginModule)
      }
    ],
  },
  { path: '',       redirectTo: 'auth/login', pathMatch: 'full' },
  { path: '**',     redirectTo: 'auth/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
