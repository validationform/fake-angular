import { TestBed } from '@angular/core/testing';

import { EdTechService } from './ed-tech.service';

describe('EdTechService', () => {
  let service: EdTechService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EdTechService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
