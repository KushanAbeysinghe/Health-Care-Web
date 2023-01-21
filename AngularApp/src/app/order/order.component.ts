import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { NgForm } from '@angular/forms';


import { OrdersendService } from "../sharesendorder/ordersend.service";
declare var M: any;


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
  providers: [OrdersendService]
})
export class OrderComponent implements OnInit {
[x: string]: any;
  constructor(public ordersendService: OrdersendService) { }

  ngOnInit(){
    this.resetForm();

  }

  resetForm(form?: NgForm){
    if(form)
      form.reset();
      this.ordersendService.selectOrdersend ={
        _id:" ",
        name:" ",
        surname:" ",
        address:" ",
        email:" ",
        phone:" ",
        age:" ",
        image:" "
      }

  }

  onSubmit(form: NgForm){
    this.ordersendService.postOrdersend(form.value).subscribe((res) => {
        this.resetForm(form);
    });

  }

  
  }

