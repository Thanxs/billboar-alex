import { NgModule } from '@angular/core';
import { ChartComponent } from './chart.component';

import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [ChartComponent],
  imports: [CommonModule, DragDropModule, MatFormFieldModule, MatSelectModule],
  exports: [ChartComponent],
})
export class ChartModule {}
