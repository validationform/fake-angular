import { TestBed } from '@angular/core/testing';

import { FinancialTechService } from './financial-tech.service';

describe('FinancialTechService', () => {
  let service: FinancialTechService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinancialTechService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
