import { TestBed } from '@angular/core/testing';

import { CbnitsLeadershipService } from './cbnits-leadership.service';

describe('CbnitsLeadershipService', () => {
  let service: CbnitsLeadershipService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CbnitsLeadershipService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
