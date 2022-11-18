import { TestBed } from '@angular/core/testing';

import { BoomingIndustryService } from './booming-industry.service';

describe('BoomingIndustryService', () => {
  let service: BoomingIndustryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoomingIndustryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
