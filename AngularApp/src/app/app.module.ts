import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ContactComponent } from './contact/contact.component';
import { AdminordersComponent } from './adminorders/adminorders.component';
import { AdminFeedbackComponent } from './admin-feedback/admin-feedback.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    OrderComponent,
    FeedbackComponent,
    ContactComponent,
    AdminordersComponent,
    AdminFeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
