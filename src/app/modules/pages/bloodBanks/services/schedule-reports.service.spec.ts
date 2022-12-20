import { TestBed } from '@angular/core/testing';

import { ScheduleReportsService } from './schedule-reports.service';

describe('ScheduleReportsService', () => {
  let service: ScheduleReportsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScheduleReportsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
