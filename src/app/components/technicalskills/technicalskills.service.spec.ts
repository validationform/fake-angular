import { TestBed } from '@angular/core/testing';

import { TechnicalskillsService } from './technicalskills.service';

describe('TechnicalskillsService', () => {
  let service: TechnicalskillsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TechnicalskillsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
