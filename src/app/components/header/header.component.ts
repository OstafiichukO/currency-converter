import { Component, OnInit } from "@angular/core";
import { ICurrency } from "src/app/app-interfaces";
import ApiService from "src/app/services/api.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export default class HeaderComponent implements OnInit {
  private url = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json';
  euro: ICurrency | undefined;
  dollar: ICurrency | undefined;

  constructor(private readonly restApiService: ApiService) { }

  ngOnInit(): void {
    this.restApiService.getCurrency(this.url).subscribe(currency => {
      this.euro = currency.filter((item: ICurrency) => item.r030 === 978)[0];
      this.dollar = currency.filter((item: ICurrency) => item.r030 === 840)[0];
    })
  }
}