import { TestBed } from '@angular/core/testing';

import { PoonamBachkhediService } from './poonam-bachkhedi.service';

describe('PoonamBachkhediService', () => {
  let service: PoonamBachkhediService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoonamBachkhediService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
