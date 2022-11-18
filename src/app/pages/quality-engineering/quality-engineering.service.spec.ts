import { TestBed } from '@angular/core/testing';

import { QualityEngineeringService } from './quality-engineering.service';

describe('QualityEngineeringService', () => {
  let service: QualityEngineeringService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QualityEngineeringService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
