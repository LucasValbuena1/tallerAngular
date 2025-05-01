import { Component, Input, OnInit } from '@angular/core';
import { Serie } from '../Series';
import { SeriesServiceService } from '../../SeriesService.service';
import { CommonModule, NgFor } from '@angular/common';
import { DetallarSerieComponent } from "../DetallarSerie/DetallarSerie.component";

@Component({
  selector: 'app-SeriesList',
  standalone: true,  
  templateUrl: './SeriesList.component.html',
  styleUrls: ['./SeriesList.component.css'],
  imports: [NgFor,CommonModule, DetallarSerieComponent]
})
export class SeriesListComponent implements OnInit {

  series:Array<Serie> = [];
  @Input() select: any
serieSeleccionada: any;
  constructor(private SeriesServiceService: SeriesServiceService) { }

  getSeries(): void {
    this.SeriesServiceService.getSeries().subscribe((series) => {
      this.series = series;
    });
  }

  ngOnInit() {
    this.getSeries();
  }

  selectSerie(serie: Serie): void {
    this.serieSeleccionada = serie;
  }

  get averageSeasons(): number {
    if (!this.series || this.series.length === 0) {
      return 0;
    }
    const total = this.series.reduce((sum, s) => sum + s.seasons, 0);
    return Math.round(total / this.series.length);
  }

  

}
