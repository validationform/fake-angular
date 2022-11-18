import { TestBed } from '@angular/core/testing';

import { CyberSecurityService } from './cyber-security.service';

describe('CyberSecurityService', () => {
  let service: CyberSecurityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CyberSecurityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
