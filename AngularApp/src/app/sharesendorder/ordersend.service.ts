import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';
import { Ordersend } from "./ordersend.model";

@Injectable()
export class OrdersendService {
  selectOrdersend: Ordersend;
  ordersends: Ordersend[];
  readonly baseURL = 'http://localhost:8000/employees';

  constructor(private http: HttpClient) { }

  postOrdersend(emp: Ordersend){
    return this.http.post(this.baseURL,emp);

  }
}
