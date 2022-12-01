import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodRequestEditDialogComponent } from './blood-request-edit-dialog.component';

describe('BloodRequestEditDialogComponent', () => {
  let component: BloodRequestEditDialogComponent;
  let fixture: ComponentFixture<BloodRequestEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloodRequestEditDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BloodRequestEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
