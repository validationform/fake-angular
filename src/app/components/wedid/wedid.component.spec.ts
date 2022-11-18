import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WedidComponent } from './wedid.component';

describe('WedidComponent', () => {
  let component: WedidComponent;
  let fixture: ComponentFixture<WedidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WedidComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(WedidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
