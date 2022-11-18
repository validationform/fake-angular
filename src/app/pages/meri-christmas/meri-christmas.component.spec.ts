import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeriChristmasComponent } from './meri-christmas.component';

describe('MeriChristmasComponent', () => {
  let component: MeriChristmasComponent;
  let fixture: ComponentFixture<MeriChristmasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MeriChristmasComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MeriChristmasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
