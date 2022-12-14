import { TestBed } from '@angular/core/testing';

import { MonthlySubscriptionService } from './monthly-subscription.service';

describe('MonthlySubscriptionService', () => {
  let service: MonthlySubscriptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonthlySubscriptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
