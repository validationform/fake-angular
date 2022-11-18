import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbnitsGrowingComponent } from './cbnits-growing.component';

describe('CbnitsGrowingComponent', () => {
  let component: CbnitsGrowingComponent;
  let fixture: ComponentFixture<CbnitsGrowingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CbnitsGrowingComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CbnitsGrowingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
