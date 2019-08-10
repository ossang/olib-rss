import { BrowserModule }                        from '@angular/platform-browser';
import { NgModule }                             from '@angular/core';
import { BrowserAnimationsModule }              from '@angular/platform-browser/animations';
import { NbEvaIconsModule }                     from '@nebular/eva-icons';
import { AppRoutingModule }                     from './app-routing.module';
import { AppComponent }                         from './app.component';
import { HttpClientModule }                     from '@angular/common/http';
import { NbPasswordAuthStrategy, NbAuthModule } from '@nebular/auth';
import { 
  NbThemeModule, 
  NbLayoutModule, 
  NbMenuModule, 
  NbSidebarModule, 
  NbDialogModule
}  from '@nebular/theme';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbDialogModule.forRoot(),
    NbMenuModule.forRoot(),
    NbSidebarModule.forRoot(),
    HttpClientModule,
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',
        }),
      ],
      forms: {},
    }), 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
