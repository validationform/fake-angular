import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartupKolkataComponent } from './startup-kolkata.component';

describe('StartupKolkataComponent', () => {
  let component: StartupKolkataComponent;
  let fixture: ComponentFixture<StartupKolkataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartupKolkataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartupKolkataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
