import { TestBed } from '@angular/core/testing';
import { StartupKolkataService } from './startup-kolkata.service';

describe('StartupKolkataService', () => {
  let service: StartupKolkataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StartupKolkataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
