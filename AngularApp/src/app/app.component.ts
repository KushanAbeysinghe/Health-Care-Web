import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscriber } from 'rxjs-compat';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PharmacyWeb';
  constructor(private router: Router){}
   

  goToPage(pageName: string): void {
    this.router.navigate([`${pageName}`]);
  }
  
}
