import { TestBed } from '@angular/core/testing';

import { GlobalRadianceService } from './global-radiance.service';

describe('GlobalRadianceService', () => {
  let service: GlobalRadianceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalRadianceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
