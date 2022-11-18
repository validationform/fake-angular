import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatwedidComponent } from './whatwedid.component';

describe('WhatwedidComponent', () => {
  let component: WhatwedidComponent;
  let fixture: ComponentFixture<WhatwedidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WhatwedidComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(WhatwedidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
