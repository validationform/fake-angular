import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpactPandemicComponent } from './impact-pandemic.component';

describe('ImpactPandemicComponent', () => {
  let component: ImpactPandemicComponent;
  let fixture: ComponentFixture<ImpactPandemicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImpactPandemicComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ImpactPandemicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
