import {Component, OnInit} from '@angular/core';
import {ChartJSInterface} from "../../../src/chart-js-interfaces";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public barChartData: ChartJSInterface = {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  };
  public doughnutChartData: ChartJSInterface = {
    type: 'doughnut',
    data: {
      labels: ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'],
      datasets: [{
        backgroundColor: ['red', 'green', 'blue'],
        data: [350, 450, 100]
      }]
    }
  };
  public pieChartData: ChartJSInterface = {
    type: 'pie',
    data: {
      labels: ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'],
      datasets: [{
        backgroundColor: ['red', 'green', 'blue'],
        data: [350, 450, 100]
      }]
    }
  };
  public radarChartData: ChartJSInterface = {
    type: 'radar',
    data: {
      labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
      datasets: [
        {
          backgroundColor: 'rgba(64,255,0,0.2)',
          data: [65, 59, 90, 81, 56, 55, 40],
          label: 'Series A'
        }, {
          backgroundColor: 'rgba(207,52,0,0.19)',
          data: [28, 48, 40, 19, 96, 27, 100],
          label: 'Series B'
        }
      ]
    }
  };
  public polarChartData: ChartJSInterface = {
    type: 'polarArea',
    data: {
      labels: [
        'Download Sales',
        'In-Store Sales',
        'Mail Sales',
        'Telesales',
        'Corporate Sales'
      ],
      datasets: [{
        backgroundColor: [
          '#23f0ff',
          '#5800ff',
          '#ff8e0f',
          '#ff009b',
          '#2eff00'
        ],
        data: [300, 500, 100, 40, 120]
      }]
    }
  };
  public bubbleChartData: ChartJSInterface = {
    type: 'bubble',
    data: {
      datasets: [{
        data: [
          { x: 10, y: 10, r: 10 },
          { x: 15, y: 5, r: 15 },
          { x: 26, y: 12, r: 23 },
          { x: 7, y: 8, r: 8 }
        ],
        label: 'Series A',
        backgroundColor: 'green',
        borderColor: 'green',
        hoverBackgroundColor: 'purple',
        hoverBorderColor: 'red'
      }, {
        data: [
          { x: 20, y: 10, r: 10 },
          { x: 12, y: 52, r: 15 },
          { x: 21, y: 12, r: 23 },
          { x: 10, y: 81, r: 28 }
        ],
        label: 'Series B',
        backgroundColor: 'blue',
        borderColor: 'blue',
        hoverBackgroundColor: 'purple',
        hoverBorderColor: 'red'
      }]
    }
  };
  public scatterChartData: ChartJSInterface = {
    type: 'scatter',
    data: {
      labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
      datasets: [{
        data: [
          { x: 61, y: 15 },
          { x: 32, y: 33 },
          { x: 31, y: -2 },
          { x: 14, y: 4 },
          { x: 52, y: -3 },
        ],
        label: 'Series A',
        pointRadius: 10,
        backgroundColor: 'blue',
        borderColor: 'blue',
      }, {
        data: [
          { x: 11, y: 21 },
          { x: 21, y: 3 },
          { x: 33, y: -12 },
          { x: 14, y: 34 },
          { x: 55, y: -23 },
        ],
        label: 'Series B',
        pointRadius: 10,
        backgroundColor: 'green',
        borderColor: 'green',
      }]
    }
  };

  constructor() {
  }

  ngOnInit() {
  }
}
