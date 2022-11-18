import { TestBed } from '@angular/core/testing';

import { Dynamic365Service } from './dynamic365.service';

describe('Dynamic365Service', () => {
  let service: Dynamic365Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Dynamic365Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
