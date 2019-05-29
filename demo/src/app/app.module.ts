import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { Ng2ChartJsModules } from '../../../src';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Ng2ChartJsModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
