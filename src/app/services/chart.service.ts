import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { innerData, scheduleDates } from '../shared/data/data.schedule';

@Injectable()
export class ChartService {
  public chartsData = [
    {
      title: 'Sessions',
      subtitle: scheduleDates('2020-04-05').length,
      type: 'area-spline',
      columns: [
        ['x', ...scheduleDates('2020-04-05')],
        ['sessions', ...innerData()],
      ],
    },
    {
      title: 'Pageviews',
      subtitle: scheduleDates('2020-04-05').length,
      type: 'pie',
      columns: [
        ['x', ...scheduleDates('2020-04-05')],
        ['pageviews', ...innerData()],
        ['pageviews2', ...innerData()],
        ['pageviews3', ...innerData()],
      ],
    },
    {
      title: 'Ajax Calls',
      subtitle: scheduleDates('2020-08-01').length,
      type: 'bar',
      columns: [
        ['x', ...scheduleDates('2020-08-01')],
        ['ajax', ...innerData()],
      ],
    },
    {
      title: 'Availability',
      subtitle: scheduleDates('2020-02-08').length,
      type: 'gauge',
      columns: [
        ['x', ...scheduleDates('2020-02-08')],
        ['availability', ...innerData()],
        ['availability2', ...innerData()],
      ],
    },
    {
      title: 'Revenue',
      subtitle: scheduleDates('2019-10-10').length,
      type: 'donut',
      columns: [
        ['x', ...scheduleDates('2019-10-10')],
        ['revenue', ...innerData()],
        ['revenue2', ...innerData()],
        ['revenue3', ...innerData()],
        ['revenue4', ...innerData()],
      ],
    },
    {
      title: 'Area',
      subtitle: scheduleDates('2020-05-08').length,
      type: 'area',
      columns: [
        ['x', ...scheduleDates('2020-05-08')],
        ['availability', ...innerData()],
        ['availability2', ...innerData()],
      ],
    },
    {
      title: 'Line',
      subtitle: scheduleDates('2020-03-03').length,
      type: 'line',
      columns: [
        ['x', ...scheduleDates('2020-03-03')],
        ['scatter', ...innerData()],
        ['scatter2', ...innerData()],
      ],
    },
    {
      title: 'Step',
      subtitle: scheduleDates('2020-06-06').length,
      type: 'step',
      columns: [
        ['x', ...scheduleDates('2020-06-06')],
        ['scatter', ...innerData()],
        ['scatter2', ...innerData()],
      ],
    },
  ];

  getChartData() {
    return of(this.chartsData);
  }
}
