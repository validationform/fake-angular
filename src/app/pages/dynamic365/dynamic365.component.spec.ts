import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dynamic365Component } from './dynamic365.component';

describe('Dynamic365Component', () => {
  let component: Dynamic365Component;
  let fixture: ComponentFixture<Dynamic365Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dynamic365Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dynamic365Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
