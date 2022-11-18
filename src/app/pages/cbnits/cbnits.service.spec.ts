import { TestBed } from '@angular/core/testing';

import { CbnitsService } from './cbnits.service';

describe('CbnitsService', () => {
  let service: CbnitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CbnitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
