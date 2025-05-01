import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment.development';
import { Observable } from 'rxjs';
import { Serie } from './series/Series';

@Injectable({
  providedIn: 'root'
})
export class SeriesServiceService {

  private apiUrl: string = environment.baseUrl ;

  constructor(private http: HttpClient) { }

  getSeries(): Observable<Serie[]> {
    return this.http.get<Serie[]>(this.apiUrl);
  }

}
