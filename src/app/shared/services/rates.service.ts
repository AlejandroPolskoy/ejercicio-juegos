import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RatesService {
  url = "https://api.vatcomply.com/rates";

  constructor(private http: HttpClient) { }

  getRates( base:string | null = 'EUR' ) {
    return this.http.get( this.url+"?base="+base );
  }
}
