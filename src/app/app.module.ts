import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeriesModule } from "./series/series.module";
import { SeriesListComponent } from "./series/SeriesList/SeriesList.component";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SeriesModule,
    HttpClientModule,
    SeriesListComponent
],
  providers: [ provideClientHydration()],
  bootstrap: [AppComponent]
})
export class AppModule { }
