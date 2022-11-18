import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvantagesdevelopersComponent } from './advantagesdevelopers.component';

describe('AdvantagesdevelopersComponent', () => {
  let component: AdvantagesdevelopersComponent;
  let fixture: ComponentFixture<AdvantagesdevelopersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvantagesdevelopersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvantagesdevelopersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
