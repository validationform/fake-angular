import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GolangComponent } from './golang.component';

describe('GolangComponent', () => {
  let component: GolangComponent;
  let fixture: ComponentFixture<GolangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GolangComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GolangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
