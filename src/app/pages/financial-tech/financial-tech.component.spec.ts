import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialTechComponent } from './financial-tech.component';

describe('FinancialTechComponent', () => {
  let component: FinancialTechComponent;
  let fixture: ComponentFixture<FinancialTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancialTechComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinancialTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
