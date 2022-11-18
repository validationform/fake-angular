import { TestBed } from '@angular/core/testing';

import { CbnitsCultureService } from './cbnits-culture.service';

describe('CbnitsCultureService', () => {
  let service: CbnitsCultureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CbnitsCultureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
