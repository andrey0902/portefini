import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PortefiniToolbarComponent } from './portefini-toolbar/portefini-toolbar.component';
import { PortefiniScreenOneComponent } from './portefini-screen-one/portefini-screen-one.component';
import { PortefiniHeaderComponent } from './portefini-header/portefini-header.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderModule } from './shared/header/header.module';
import 'hammerjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    PortefiniToolbarComponent,
    PortefiniScreenOneComponent,
    PortefiniHeaderComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
