import { TestBed } from '@angular/core/testing';

import { ExaminationsServiceService } from './examinations-service.service';

describe('ExaminationsServiceService', () => {
  let service: ExaminationsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExaminationsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
