import { TestBed } from '@angular/core/testing';

import { TenderGraphsService } from './tender-graphs.service';

describe('TenderGraphsService', () => {
  let service: TenderGraphsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TenderGraphsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
