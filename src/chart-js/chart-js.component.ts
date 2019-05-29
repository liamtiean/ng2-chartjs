import {AfterViewInit, Component, ElementRef, OnInit} from "@angular/core";
import * as Chart from 'chart.js';

@Component({
  selector: 'chartjs',
  template: '<div width="400" height="400"><canvas></canvas></div>',
  styles: [`
    div {
      display: inline-block;
    }
  `]
})

export class ChartJsComponent implements OnInit, AfterViewInit{
  chart: Chart;
  constructor(private el: ElementRef) {}

  ngOnInit(): void {
  }
  ngAfterViewInit(){
    this.chart = new Chart(this.el.nativeElement.querySelector('canvas').getContext('2d'), {
      // The type of chart we want to create
      type: 'line',

      // The data for our dataset
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: 'My First dataset',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: [0, 10, 5, 2, 20, 30, 45]
        }]
      },

      // Configuration options go here
      options: {}
    });
  }
}
