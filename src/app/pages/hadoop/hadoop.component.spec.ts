import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HadoopComponent } from './hadoop.component';

describe('HadoopComponent', () => {
  let component: HadoopComponent;
  let fixture: ComponentFixture<HadoopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HadoopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HadoopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
