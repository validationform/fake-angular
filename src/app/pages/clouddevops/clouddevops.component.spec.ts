import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClouddevopsComponent } from './clouddevops.component';

describe('ClouddevopsComponent', () => {
  let component: ClouddevopsComponent;
  let fixture: ComponentFixture<ClouddevopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClouddevopsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClouddevopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
