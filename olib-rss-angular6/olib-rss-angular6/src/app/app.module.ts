import { BrowserModule }              from '@angular/platform-browser';
import { NgModule }                   from '@angular/core';
import { BrowserAnimationsModule}     from '@angular/platform-browser/animations';
import { LayoutModule }               from '@angular/cdk/layout';
import { HttpClientModule }           from '@angular/common/http';
import { FormsModule }                from '@angular/forms';
import { FlexLayoutModule }           from '@angular/flex-layout';

import { AppComponent }               from './app.component';
import { MaterialModule }             from './modules/material/material.module';
import { AppRoutingModule }           from './app-routing.module';
import { LoginComponent }             from './modules/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule,
    LayoutModule,
    MaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
