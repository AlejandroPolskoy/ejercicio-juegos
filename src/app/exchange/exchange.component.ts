import { Component, OnInit } from '@angular/core';
import { RatesService } from '../shared/services/rates.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss']
})

export class ExchangeComponent implements OnInit {

  exchanges:any = [];
  amount = 1;
  base:any = 'EUR';

  constructor(private rates: RatesService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.getRates( this.base );
    });
  }

  getRates( base:string | null = 'EUR') {
    this.rates.getRates( base ).subscribe((data:any)=>{
      this.exchanges = [];
      for (const key in data.rates) {
        let obj = { 'cur' : key, value : data.rates[key] }
          this.exchanges.push( obj );
      }
    });
  }

}
