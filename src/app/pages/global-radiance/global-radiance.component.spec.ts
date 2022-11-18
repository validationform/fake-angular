import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalRadianceComponent } from './global-radiance.component';

describe('GlobalRadianceComponent', () => {
  let component: GlobalRadianceComponent;
  let fixture: ComponentFixture<GlobalRadianceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GlobalRadianceComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(GlobalRadianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
