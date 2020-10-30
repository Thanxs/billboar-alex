import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';

import { MatSelectChange } from '@angular/material/select';

import { Constants } from 'src/app/shared/constants';

import { bb } from 'billboard.js';
import * as moment from 'moment';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit, AfterViewInit {
  public scheduleDates: Array<string> = [];
  public chart;
  private columns;
  public chartColors = [
    { title: 'Red', value: '#ff3838' },
    { title: 'Green', value: '#00ec14' },
    { title: 'Blue', value: '#6c9fff' },
  ];

  private selectedColor: string;

  @Input() public data;
  @ViewChild('chartRef') private chartRef: ElementRef;
  @ViewChild('chartLink') private chartLink: ElementRef;

  constructor() {}

  public ngOnInit(): void {
    this.selectedColor = this.chartColors[Constants.ZERO].value;
    this.columns = [...this.data.columns];
    this.scheduleDates = this.columns[Constants.ZERO].slice(Constants.ONE);
  }

  public ngAfterViewInit(): void {
    this.createChart();
  }

  private createChart() {
    const { type, columns } = this.data;

    this.chart = bb.generate({
      bindto: this.chartRef.nativeElement,
      data: {
        x: 'x',
        columns: this.columns,
        type,
      },
      background: {
        color: '#ffffff',
      },
      area: {
        linearGradient: {
          x: [1, 0],
          y: [0, 1],
          stops: [
            [0, this.selectedColor, 1],
            [0.1, this.selectedColor, 0.9],
            [0.2, this.selectedColor, 0.8],
            [0.3, this.selectedColor, 0.7],
            [0.4, this.selectedColor, 0.6],
            [0.5, this.selectedColor, 0.5],
            [0.6, this.selectedColor, 0.4],
            [0.7, this.selectedColor, 0.3],
            [0.8, '#ffffff', 0.2],
            [0.9, '#ffffff', 0.1],
          ],
        },
      },
      axis: {
        x: {
          type: 'timeseries',
          localtime: false,
          tick: {
            format: (date) => moment(date).format('MMM, DD, h:mm a'),
            values: [],
          },
        },
        y: {
          inner: true,
          tick: {
            format: (data) =>
              `${(data / Constants.THOUSAND).toFixed(Constants.ONE)}K`,
            values: [
              Math.max(...this.columns[Constants.ONE].slice(Constants.ONE)),
            ],
          },
        },
      },

      point: {
        show: false,
      },
    });

    const key = columns[Constants.ONE][Constants.ZERO];

    const changedColor = {};
    changedColor[key] = this.selectedColor;

    this.chart.data.colors(changedColor);

    this.chart.legend.hide();

    this.chart.resize({
      width: Constants.CHART_WIDTH,
      height: Constants.CHART_HEIGHT,
    });

    this.chart.focus();

    this.chart.export('image/png', (dataUrl: string): any => {
      this.chartLink.nativeElement.href = dataUrl;
      this.chartLink.nativeElement.download = `${moment().format(
        'YYYY-MM-DD hh:mm:ss'
      )}.png`;
    });
  }

  public changeChartColor(event: MatSelectChange) {
    this.selectedColor = event.value;
    this.createChart();
  }
}
