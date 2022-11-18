import { TestBed } from '@angular/core/testing';

import { CbnitsBronzeService } from './cbnits-bronze.service';

describe('CbnitsBronzeService', () => {
  let service: CbnitsBronzeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CbnitsBronzeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
