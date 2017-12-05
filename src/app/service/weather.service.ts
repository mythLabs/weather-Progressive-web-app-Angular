import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { WeatherApiUrl } from './../constants/constants';

@Injectable()
export class WeatherService {

  constructor(private _httpClient: HttpClient) { }


  getCurrentWeather(latitude: string, longitude: string) {
    return this._httpClient.post(WeatherApiUrl, {latitude, longitude});
  }

}
