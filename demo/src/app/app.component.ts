import {Component, OnInit} from '@angular/core';
import {ChartJSInterface} from "../../../src/chart-js-interfaces";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  verticalBarChart: ChartJSInterface = {
    type: 'bar',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        label: 'Dataset 1',
        backgroundColor: '#ff5b00',
        borderColor: '#ff5b00',
        borderWidth: 1,
        data: [
          100,
          1900,
          300,
          423,
          198,
          989,
          1120,
        ]
      }, {
        label: 'Dataset 2',
        backgroundColor: '#0466ff',
        borderColor: '#0466ff',
        borderWidth: 1,
        data: [
          1923,
          4838,
          102,
          1002,
          5694,
          2321,
          938,
        ]
      }]

    },
    options: {
      responsive: true,
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart'
      }
    }
  };

  constructor() {
  }

  ngOnInit() {
  }
}
