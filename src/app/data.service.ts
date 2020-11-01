import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Plate } from './plate.model';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
  }

  url = 'https://www.apnaplates.com/plates_for_sales/getAutoSuggestionForPlates';

  header = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
  }

  requestOptions = {
    headers: new HttpHeaders(this.header),
    method: 'GET',
    mode: 'no-cors'
  };

  getPlates(){
    return this.http.get(this.url, this.requestOptions);
  }
}
