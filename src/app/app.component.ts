import { Component } from '@angular/core';
import {WeatherService} from './service/weather.service';
import {GeolocationService} from './service/geolocation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _weather: WeatherService, private _geolocation: GeolocationService) { }
  locationName= '';
  summary = '';
  temperature ;
  loaded = true;
  search() {
    this.loaded = true;
    this._geolocation.getLatLong(this.locationName).subscribe((response: any) => {
      if ( response != null ) {
        const lat = response.results[0].geometry.location.lat;
        const lng = response.results[0].geometry.location.lng;
        this._weather.getCurrentWeather(lat, lng).subscribe((data: any) => {
          if ( data != null ) {
                this.temperature = data.result.body.currently.temperature;
                this.summary = data.result.body.currently.summary;
                this.loaded = false;
           }
           }, err => { });



      }
       }, err => { });
}
  }
