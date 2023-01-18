import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{AboutComponent}from '../app/about/about.component';
import{OrderComponent}from '../app/order/order.component';
import{HomeComponent}from '../app/home/home.component';
import{FeedbackComponent}from '../app/feedback/feedback.component';
import{ContactComponent}from '../app/contact/contact.component';
import {AdminordersComponent} from './adminorders/adminorders.component';
import {AdminFeedbackComponent} from './admin-feedback/admin-feedback.component';

const routes: Routes = [
  {path:'about',component: AboutComponent},
  {path:'order',component: OrderComponent},
  {path:'home',component:HomeComponent},
  {path:'feedback',component:FeedbackComponent},
  {path:'contact',component:ContactComponent},
  {path:'adminorder',component:AdminordersComponent},
  {path:'adminfeedback',component:AdminFeedbackComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
