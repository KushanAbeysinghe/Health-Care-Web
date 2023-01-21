import { TestBed } from '@angular/core/testing';

import { OrdersendService } from './ordersend.service';

describe('OrdersendService', () => {
  let service: OrdersendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdersendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
