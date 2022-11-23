import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsOfDoctorStatisticsComponent } from './patients-of-doctor-statistics.component';

describe('PatientsOfDoctorStatisticsComponent', () => {
  let component: PatientsOfDoctorStatisticsComponent;
  let fixture: ComponentFixture<PatientsOfDoctorStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientsOfDoctorStatisticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientsOfDoctorStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
