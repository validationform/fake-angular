import { TestBed } from '@angular/core/testing';

import { GolangService } from './golang.service';

describe('GolangService', () => {
  let service: GolangService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GolangService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
