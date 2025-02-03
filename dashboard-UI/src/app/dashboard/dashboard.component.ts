import { Component } from '@angular/core';
import {HighchartsChartModule} from 'highcharts-angular';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-dashboard',
  imports: [HighchartsChartModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.sass'
})
export class DashboardComponent {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions1: Highcharts.Options = {
    title: {
      text: 'Chart 1',
    },
    series: [{
      data: [1, 2, 3],
      type: 'bar'
    }]
  };
  chartOptions2: Highcharts.Options = {
    title: {
      text: 'Chart 2',
    },
    series: [{
      data: [1, 2, 3],
      type: 'pie'
    }]
  };
  chartOptions3: Highcharts.Options = {
    title: {
      text: 'Chart 3',
    },
    series: [{
      data: [1, 2, 3],
      type: 'pie'
    }]
  };
  chartOptions4: Highcharts.Options = {
    title: {
      text: 'Chart 4',
    },
    series: [{
      data: [1, 2, 3],
      type: 'line'
    }]
  };
  chartOptions5: Highcharts.Options = {
    title: {
      text: 'Chart 5',
    },
    series: [{
      data: [1, 2, 3],
      type: 'bar'
    }]
  };
}
