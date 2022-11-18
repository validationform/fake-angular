import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbnitsLeadershipComponent } from './cbnits-leadership.component';

describe('CbnitsLeadershipComponent', () => {
  let component: CbnitsLeadershipComponent;
  let fixture: ComponentFixture<CbnitsLeadershipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CbnitsLeadershipComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CbnitsLeadershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
