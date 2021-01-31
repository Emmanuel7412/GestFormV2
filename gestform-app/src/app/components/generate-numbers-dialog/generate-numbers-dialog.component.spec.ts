import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateNumbersDialogComponent } from './generate-numbers-dialog.component';

describe('GenerateNumbersDialogComponent', () => {
  let component: GenerateNumbersDialogComponent;
  let fixture: ComponentFixture<GenerateNumbersDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateNumbersDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateNumbersDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
