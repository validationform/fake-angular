import { TestBed } from '@angular/core/testing';

import { HomeConnectedService } from './home-connected.service';

describe('HomeConnectedService', () => {
  let service: HomeConnectedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeConnectedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
