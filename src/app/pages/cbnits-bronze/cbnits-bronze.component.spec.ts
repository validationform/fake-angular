import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbnitsBronzeComponent } from './cbnits-bronze.component';

describe('CbnitsBronzeComponent', () => {
  let component: CbnitsBronzeComponent;
  let fixture: ComponentFixture<CbnitsBronzeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CbnitsBronzeComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CbnitsBronzeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
