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

  msg: string;
 

  orderData: Array<Order> = []

  constructor(public orderService: OrderService) {
    this.orderService.getAllOrders().subscribe(
      (response) => {
        console.log(response)
        this.orderData = response;
        
      }
    )
  }
  //   clickEvent() {
  //     this.msg = "Button is Clicked";
  //     return this.msg;
  //     console.log("msg");
  //   }
  // }
  acceptbutton() {
      // form.reset();
      this.msg = "Button is Clicked";
          // return this.msg
          console.log("msg");
   
  }


}



  // accept(){
  //   console.log("hey")

  // }






