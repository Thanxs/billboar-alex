import { NgModule } from '@angular/core';
import { ChartComponent } from './chart.component';

import { TippyDirective } from 'src/app/directives/tippy.directive';

import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [ChartComponent, TippyDirective],
  imports: [CommonModule, DragDropModule, MatFormFieldModule, MatSelectModule],
  exports: [ChartComponent],
})
export class ChartModule {}
