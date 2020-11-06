import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
//import 'rxjs/add/operator/map';
//import { Time } from './time.model';
import { Previsao } from './previsao.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import { RequestOptionsArgs } from '@angular/http';
import {Headers} from '@angular/http';

@Injectable()
export class PrevisaoService {

   construtor (private http: HttpClient) {}

   getWeather(location){
    return this.http.get(
        'https://api.apixu.com/v1/current.json?key=YOUR_API_KEY&q=' + location
    );
      }
  }
 
