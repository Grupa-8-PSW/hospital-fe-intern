import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodRequestListComponent } from './blood-request-list.component';

describe('BloodRequestListComponent', () => {
  let component: BloodRequestListComponent;
  let fixture: ComponentFixture<BloodRequestListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloodRequestListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BloodRequestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
