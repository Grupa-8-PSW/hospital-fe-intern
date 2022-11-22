import { TestBed } from '@angular/core/testing';

import { TreatmentHistoryService } from './treatment-history.service';

describe('TreatmentHistoryService', () => {
  let service: TreatmentHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TreatmentHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
