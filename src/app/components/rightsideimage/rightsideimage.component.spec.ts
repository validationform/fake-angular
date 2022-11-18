import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightsideimageComponent } from './rightsideimage.component';

describe('RightsideimageComponent', () => {
  let component: RightsideimageComponent;
  let fixture: ComponentFixture<RightsideimageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightsideimageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightsideimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
