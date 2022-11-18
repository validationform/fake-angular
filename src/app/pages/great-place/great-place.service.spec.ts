import { TestBed } from '@angular/core/testing';

import { GreatPlaceService } from './great-place.service';

describe('GreatPlaceService', () => {
  let service: GreatPlaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GreatPlaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
