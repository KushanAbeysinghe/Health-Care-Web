import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { switchMap } from 'rxjs/operators'

import { Order } from './order.model';



@Injectable({
  providedIn: 'root'
})
export class OrderService {
  selectedOrder: Order;
  orders!: Order[];
  readonly baseURL = 'http://localhost:3000/orders';
  

  constructor(private http: HttpClient) { }

  getAllOrders(): Observable<Order[]> {
    return this.http.get(`${this.baseURL}`) as unknown as Observable<Order[]>;
  }

  postallOrder(order: Order) {
    return this.http.post(this.baseURL, order);
  }
  

}












