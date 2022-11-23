import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTreatmentHistoryComponent } from './view-treatment-history.component';

describe('ViewTreatmentHistoryComponent', () => {
  let component: ViewTreatmentHistoryComponent;
  let fixture: ComponentFixture<ViewTreatmentHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTreatmentHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewTreatmentHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
