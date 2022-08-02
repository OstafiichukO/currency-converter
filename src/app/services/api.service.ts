import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http"
import { Observable } from "rxjs";
import { ICurrency } from "../app-interfaces";

@Injectable({
  providedIn: 'root'
})
export default class ApiService {
  constructor(private http: HttpClient) { }
  
  getCurrency(url: string): Observable<ICurrency[]>{
    return this.http.get<ICurrency[]>(url);
  }
}