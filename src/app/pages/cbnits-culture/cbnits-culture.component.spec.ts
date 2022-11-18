import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbnitsCultureComponent } from './cbnits-culture.component';

describe('CbnitsCultureComponent', () => {
  let component: CbnitsCultureComponent;
  let fixture: ComponentFixture<CbnitsCultureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CbnitsCultureComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CbnitsCultureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
