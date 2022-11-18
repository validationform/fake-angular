import { TestBed } from '@angular/core/testing';

import { CloudDevelopmentService } from './cloud-development.service';

describe('CloudDevelopmentService', () => {
  let service: CloudDevelopmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CloudDevelopmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
