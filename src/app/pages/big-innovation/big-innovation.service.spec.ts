import { TestBed } from '@angular/core/testing';

import { BigInnovationService } from './big-innovation.service';

describe('BigInnovationService', () => {
  let service: BigInnovationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BigInnovationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
