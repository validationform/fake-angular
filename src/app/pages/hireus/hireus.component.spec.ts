import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HireusComponent } from './hireus.component';

describe('HireusComponent', () => {
  let component: HireusComponent;
  let fixture: ComponentFixture<HireusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HireusComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HireusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
