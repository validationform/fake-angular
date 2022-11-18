import { TestBed } from '@angular/core/testing';

import { HrTechService } from './hr-tech.service';

describe('HrTechService', () => {
  let service: HrTechService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HrTechService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
