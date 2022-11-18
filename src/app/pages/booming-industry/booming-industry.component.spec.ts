import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoomingIndustryComponent } from './booming-industry.component';

describe('BoomingIndustryComponent', () => {
  let component: BoomingIndustryComponent;
  let fixture: ComponentFixture<BoomingIndustryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoomingIndustryComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(BoomingIndustryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
