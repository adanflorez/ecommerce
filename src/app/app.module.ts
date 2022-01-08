import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { GlobalService } from './shared/services/global.service';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    GlobalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
