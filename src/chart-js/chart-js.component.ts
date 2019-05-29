import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as Chart from 'chart.js';
import { ChartJSInterface } from '../chart-js-interfaces';

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
  @Output() public onClickChart: EventEmitter<any>;
  @Output() public onClickItem: EventEmitter<any>;
  private chart: Chart;

  constructor(private el: ElementRef) {
    this.onClickChart = new EventEmitter();
    this.onClickItem = new EventEmitter();
  }

  public ngOnInit(): void {
    if (!this.data.options) {
      this.data.options = {};
    }
    if (!this.data.options.events) {
      this.data.options.events = ['click'];
    }
    if (this.data.options.events.indexOf('click') === -1) {
      this.data.options.events.push('click');
    }
    if (!this.data.options.onClick) {
      this.data.options.onClick = this.onClick.bind(this);
    }
  }

  public ngAfterViewInit() {
    this.chart = new Chart(this.el.nativeElement.querySelector('canvas').getContext('2d'), this.data);
  }

  public onClick(event: any, active: any) {
    if (active.length === 0) {
      this.onClickChart.emit(this.parseEventMouseClick(event));
    } else {
      this.onClickItem.emit(this.parseActive(active));
    }
  }

  private parseEventMouseClick(event: any): any {
    return {
      column: event.offsetX,
      row: event.offsetY
    };
  }

  private parseActive(active: any): any {
    return active[0];
  }
}
