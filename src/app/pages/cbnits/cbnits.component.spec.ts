import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbnitsComponent } from './cbnits.component';

describe('CbnitsComponent', () => {
  let component: CbnitsComponent;
  let fixture: ComponentFixture<CbnitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CbnitsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CbnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
