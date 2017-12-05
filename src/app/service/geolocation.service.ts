import { GeolocationApiUrl } from './../constants/constants';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable()
export class GeolocationService {

  constructor(private _httpClient: HttpClient) { }

  getLatLong(address: string) {
    return this._httpClient.get(`${GeolocationApiUrl}${encodeURIComponent(address)}`);
  }

}
