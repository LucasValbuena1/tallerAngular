import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesComponent } from './series.component';
import { SeriesListComponent } from './SeriesList/SeriesList.component';

@NgModule({
  imports: [
    CommonModule,
    SeriesListComponent
  ],
 exports: [SeriesListComponent],
})
export class SeriesModule {}
