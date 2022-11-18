import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdTechComponent } from './ed-tech.component';

describe('EdTechComponent', () => {
  let component: EdTechComponent;
  let fixture: ComponentFixture<EdTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdTechComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
