import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCVComponent } from './my-cv.component';

describe('MyCVComponent', () => {
  let component: MyCVComponent;
  let fixture: ComponentFixture<MyCVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCVComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
