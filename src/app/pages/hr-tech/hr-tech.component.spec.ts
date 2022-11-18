import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrTechComponent } from './hr-tech.component';

describe('HrTechComponent', () => {
  let component: HrTechComponent;
  let fixture: ComponentFixture<HrTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrTechComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HrTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
