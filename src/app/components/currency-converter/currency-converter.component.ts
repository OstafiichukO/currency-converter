import ApiService from "src/app/services/api.service";
import { ICurrency } from "src/app/app-interfaces";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css']
})

export default class CurrencyConverterComponent implements OnInit {
  private url = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';
  
  exchangeTo: ICurrency = {
    'r030': 980,
    'txt': "Гривня",
    'rate': 1,
    'cc': "UAH",
    'exchangedate': new Date().toDateString(),
  }

  exchangeFrom: ICurrency = {
    'r030': 840,
    'txt': "Долар США",
    'rate': NaN,
    'cc': "USD",
    'exchangedate': new Date().toDateString(),
  }
  // "r030":840,"txt":"Долар США","rate":36.5686,"cc":"USD","exchangedate":"03.08.2022"
  
  constructor(private readonly restApiService: ApiService) { }

  ngOnInit(): void {
    this.calcTo(840, 980, true);
  }

  calcTo(currencyCodeFrom: number, currencyCodeTo: number, direction: boolean) {
    this.restApiService.getCurrency(this.url).subscribe(currency => {
      let currencyValueFrom = this.getCurrencyValue(currencyCodeTo, currency);
      let currencyValueTo = this.getCurrencyValue(currencyCodeFrom, currency);
      direction ?
        this.exchangeFrom.rate = Math.round(this.exchangeTo.rate / currencyValueTo * currencyValueFrom * 100) / 100
        : this.exchangeTo.rate = Math.round(this.exchangeFrom.rate / currencyValueTo * currencyValueFrom * 100)/100
    })
  }

  getCurrencyValue(currencyCode: number, currency: ICurrency[]): number {
    if (currency.filter((item: ICurrency) => item.r030 == currencyCode).length > 0) {
      return currency.filter((item: ICurrency) => item.r030 == currencyCode)[0].rate;
    } else return 1
  }
}