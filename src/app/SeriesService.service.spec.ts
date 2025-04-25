/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SeriesServiceService } from './SeriesService.service';

describe('Service: SeriesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SeriesServiceService]
    });
  });

  it('should ...', inject([SeriesServiceService], (service: SeriesServiceService) => {
    expect(service).toBeTruthy();
  }));
});
