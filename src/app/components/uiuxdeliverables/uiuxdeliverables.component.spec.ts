import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiuxdeliverablesComponent } from './uiuxdeliverables.component';

describe('UiuxdeliverablesComponent', () => {
  let component: UiuxdeliverablesComponent;
  let fixture: ComponentFixture<UiuxdeliverablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiuxdeliverablesComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(UiuxdeliverablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
