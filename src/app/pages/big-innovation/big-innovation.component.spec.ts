import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigInnovationComponent } from './big-innovation.component';

describe('BigInnovationComponent', () => {
  let component: BigInnovationComponent;
  let fixture: ComponentFixture<BigInnovationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BigInnovationComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(BigInnovationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
