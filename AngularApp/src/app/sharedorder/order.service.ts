import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../interfaces/order';



@Injectable({
  providedIn: 'root'
})
export class OrderService {
  readonly baseURL = 'http://localhost:3000/orders';


  constructor(private http: HttpClient) { }

  getAllOrders(): Observable<Order[]> {
    return this.http.get(`${this.baseURL}`) as unknown as Observable<Order[]>;
  }

  postOrderSettingsForm(orderSettings: Order): Observable<Order> {

    const httpHeaders = new HttpHeaders({
      'content-type':'application/json',
      'Authorization': 'myheaderson@12'
    });

    return this.http.post<Order>('http://localhost:3000/orders', orderSettings);
    

  }


}












