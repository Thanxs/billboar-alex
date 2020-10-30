import { Component, OnInit } from '@angular/core';

import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ChartService } from './services/chart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public charts = [];

  constructor(private chartService: ChartService) {
    this.chartService.getChartData().subscribe((response) => {
      this.charts = response;
    });
  }

  public ngOnInit(): void {}

  public drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.charts, event.previousIndex, event.currentIndex);
  }
}
