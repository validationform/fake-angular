import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigDataCbnitsComponent } from './big-data-cbnits.component';

describe('BigDataCbnitsComponent', () => {
  let component: BigDataCbnitsComponent;
  let fixture: ComponentFixture<BigDataCbnitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigDataCbnitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BigDataCbnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
