import { TestBed } from '@angular/core/testing';

import { ImpactPandemicService } from './impact-pandemic.service';

describe('ImpactPandemicService', () => {
  let service: ImpactPandemicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImpactPandemicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
