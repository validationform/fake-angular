import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreatPlaceComponent } from './great-place.component';

describe('GreatPlaceComponent', () => {
  let component: GreatPlaceComponent;
  let fixture: ComponentFixture<GreatPlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GreatPlaceComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(GreatPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
