import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { bb } from 'billboard.js';

@Component({
  selector: 'app-spline-chart',
  templateUrl: './spline-chart.component.html',
  styleUrls: ['./spline-chart.component.scss'],
})
export class SplineChartComponent implements OnInit, AfterViewInit {
  chart;
  @ViewChild('splineChart') private splineChart: ElementRef;

  constructor() {}

  public ngOnInit(): void {}

  public ngAfterViewInit(): void {
    this.chart = bb.generate({
      bindto: this.splineChart.nativeElement,
      data: {
        columns: [['data1', 1, 0, 30, 200, 100, 400, 150, 250]],
        type: 'area-spline',
      },
      area: {
        linearGradient: {
          x: [1, 0],
          y: [0, 1],
          stops: [
            [0, '#ff3838', 0.2],
            [0.2, '#ff3838', 0.5],
            [0.5, '#ffffff', 0.7],
          ],
        },
      },
      line: {
        point: false,
      },
    });

    this.chart.data.colors({
      data1: '#ff3838',
    });

    this.chart.axis.labels({
      x: 'Axis X',
      y: 'Axis Y',
    });

    this.chart.resize({
      width: 640,
      height: 480,
    });

    this.chart.zoom();
    this.chart.zoom.enable(true);
    this.chart.export('image/png', (dataUrl: string): any => {
      const a = document.createElement('a');
      a.href = dataUrl;
      a.download = `${Date.now()}.png`;
      a.innerHTML = 'Download chart';
      a.classList.add('bb__link');
      document.body.append(a);
    });
  }

  focusChart() {
    this.chart.focus('data1');
  }

  defocusChart() {
    this.chart.defocus('data1');
  }
}
