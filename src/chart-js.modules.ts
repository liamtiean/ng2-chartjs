import {NgModule} from '@angular/core';
import {ChartJsComponent} from "./chart-js/chart-js.component";

@NgModule({
  declarations: [
    ChartJsComponent
  ],
  providers: [],
  exports: [
    ChartJsComponent,
  ]
})
export class Ng2ChartJsModules {
}
