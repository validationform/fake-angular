import { TestBed } from '@angular/core/testing';

import { SoftwareSupportService } from './software-support.service';

describe('SoftwareSupportService', () => {
  let service: SoftwareSupportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoftwareSupportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
