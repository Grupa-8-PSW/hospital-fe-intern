import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrgentRequestStatisticsComponent } from './urgent-request-statistics.component';

describe('UrgentRequestStatisticsComponent', () => {
  let component: UrgentRequestStatisticsComponent;
  let fixture: ComponentFixture<UrgentRequestStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrgentRequestStatisticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UrgentRequestStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
