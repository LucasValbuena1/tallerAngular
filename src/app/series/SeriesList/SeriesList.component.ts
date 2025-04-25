import { Component, OnInit } from '@angular/core';
import { Serie } from '../Series';
import { SeriesServiceService } from '../../SeriesService.service';

@Component({
  selector: 'app-SeriesList',
  templateUrl: './SeriesList.component.html',
  styleUrls: ['./SeriesList.component.css']
})
export class SeriesListComponent implements OnInit {

  series:Array<Serie> = [];
  constructor(private SeriesServiceService: SeriesServiceService) { }

  getSeries(): void {
    this.SeriesServiceService.getSeries().subscribe((series) => {
      this.series = series;
    });
  }

  ngOnInit() {
    this.getSeries();
  }

  

}
