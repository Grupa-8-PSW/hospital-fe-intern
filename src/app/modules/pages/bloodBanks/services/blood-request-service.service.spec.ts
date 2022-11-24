import { TestBed } from '@angular/core/testing';

import { BloodRequestServiceService } from './blood-request-service.service';

describe('BloodRequestServiceService', () => {
  let service: BloodRequestServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BloodRequestServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
