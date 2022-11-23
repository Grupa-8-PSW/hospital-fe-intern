import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllTreatmentHistoriesComponent } from './view-all-treatment-histories.component';

describe('ViewAllTreatmentHistoriesComponent', () => {
  let component: ViewAllTreatmentHistoriesComponent;
  let fixture: ComponentFixture<ViewAllTreatmentHistoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllTreatmentHistoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllTreatmentHistoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
