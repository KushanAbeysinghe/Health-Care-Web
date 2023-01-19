import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Order } from '../sharedorder/order.model';
import { OrderService } from '../sharedorder/order.service';

declare var M: any;


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
  providers: [OrderService]
})
export class OrderComponent {
  constructor(public orderService: OrderService) { }
   
}