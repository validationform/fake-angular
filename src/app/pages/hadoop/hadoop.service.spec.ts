import { TestBed } from '@angular/core/testing';

import { HadoopService } from './hadoop.service';

describe('HadoopService', () => {
  let service: HadoopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HadoopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
