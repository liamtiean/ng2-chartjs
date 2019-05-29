import { NgModule } from '@angular/core';
import { ChartJsComponent } from './chart-js/chart-js.component';
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    ChartJsComponent
  ],
  providers: [],
  imports: [
    CommonModule
  ],
  exports: [
    ChartJsComponent
  ]
})
export class Ng2ChartJsModules {
}
