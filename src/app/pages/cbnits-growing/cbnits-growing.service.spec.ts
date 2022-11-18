import { TestBed } from '@angular/core/testing';

import { CbnitsGrowingService } from './cbnits-growing.service';

describe('CbnitsGrowingService', () => {
  let service: CbnitsGrowingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CbnitsGrowingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
