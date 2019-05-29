import { AfterViewInit, Component, ElementRef, Input, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { ChartJSInterface } from '../chart-js-interfaces';

@Component({
  selector: 'chartjs',
  template: '<div width="400" height="400"><canvas></canvas></div>',
  styles: [`
    div {
      display: inline-block;
    }
  `]
})

export class ChartJsComponent implements AfterViewInit {
  @Input() public data: ChartJSInterface;
  private chart: Chart;

  constructor(private el: ElementRef) {
  }

  public ngAfterViewInit() {
    this.chart = new Chart(this.el.nativeElement.querySelector('canvas').getContext('2d'), this.data);
  }
}
