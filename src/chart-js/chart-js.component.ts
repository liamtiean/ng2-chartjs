import {AfterViewInit, Component, ElementRef, Input, OnInit} from '@angular/core';
import * as Chart from 'chart.js';
import {ChartJSInterface} from '../chart-js-interfaces';

@Component({
  selector: 'chartjs',
  template: '<div><canvas></canvas></div>',
  styles: [`
    div {
      width: 100%;
    }
  `]
})

export class ChartJsComponent implements OnInit, AfterViewInit {
  @Input() public data: ChartJSInterface;
  @Input() public customStyles: any;
  private chart: Chart;

  constructor(private el: ElementRef) {
  }

  ngOnInit(): void {
  }

  public ngAfterViewInit() {
    this.chart = new Chart(this.el.nativeElement.querySelector('canvas').getContext('2d'), this.data);
  }
}
