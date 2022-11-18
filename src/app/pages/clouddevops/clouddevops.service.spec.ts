import { TestBed } from '@angular/core/testing';

import { ClouddevopsService } from './clouddevops.service';

describe('ClouddevopsService', () => {
  let service: ClouddevopsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClouddevopsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
