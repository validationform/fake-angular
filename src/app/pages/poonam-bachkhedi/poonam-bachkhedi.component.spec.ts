import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoonamBachkhediComponent } from './poonam-bachkhedi.component';

describe('PoonamBachkhediComponent', () => {
  let component: PoonamBachkhediComponent;
  let fixture: ComponentFixture<PoonamBachkhediComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PoonamBachkhediComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PoonamBachkhediComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
