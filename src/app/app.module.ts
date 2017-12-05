import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {WeatherService} from './service/weather.service';
import {GeolocationService} from './service/geolocation.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule, HttpClientModule, ReactiveFormsModule
  ],
  providers: [WeatherService, GeolocationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
