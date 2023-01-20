import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OrderService } from '../sharedorder/order.service';
import { Order } from '../sharedorder/order.model';


@Component({
  selector: 'app-adminorders',
  templateUrl: './adminorders.component.html',
  styleUrls: ['./adminorders.component.css'],
  providers: [OrderService]
})
export class AdminordersComponent {

  orderData: Array<Order> = []

  constructor(public orderService: OrderService) {
    this.orderService.getAllOrders().subscribe(
      (response) => {
        console.log(response)
        this.orderData = response;
      }
    )
  }
}


