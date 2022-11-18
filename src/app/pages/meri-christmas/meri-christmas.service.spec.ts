import { TestBed } from '@angular/core/testing';

import { MeriChristmasService } from './meri-christmas.service';

describe('MeriChristmasService', () => {
  let service: MeriChristmasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeriChristmasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
