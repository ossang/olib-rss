import { BrowserModule }                          from '@angular/platform-browser';
import { NgModule }                               from '@angular/core';
import { FormsModule,ReactiveFormsModule }        from '@angular/forms';
import { HttpClientModule }                       from '@angular/common/http';
import { BrowserAnimationsModule }                from '@angular/platform-browser/animations';

import { BsDropdownModule }                       from 'ngx-bootstrap/dropdown';
import { TabsModule }                             from 'ngx-bootstrap/tabs';

import { AppRoutingModule }                       from './app-routing.module';
import { AppComponent }                           from './app.component';
import { LoginComponent}                          from './components/login/login.component';
import { SignupComponent }                        from './components/signup/signup.component';
import { ChangePasswordComponent }                from './components/change-password/change-password.component';
import { ApiService }                             from './services/api/api.service';
import { LoginGuard }                             from './guards/index';
import { LoginService }                           from './services/login/login.service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  declarations: [
    LoginComponent,
    AppComponent,
    SignupComponent,
    ChangePasswordComponent
  ],
  providers: [
    ApiService,
    LoginService,
    LoginGuard
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
