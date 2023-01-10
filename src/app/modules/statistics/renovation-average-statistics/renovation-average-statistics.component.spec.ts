import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenovationAverageStatisticsComponent } from './renovation-average-statistics.component';

describe('RenovationAverageStatisticsComponent', () => {
  let component: RenovationAverageStatisticsComponent;
  let fixture: ComponentFixture<RenovationAverageStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenovationAverageStatisticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenovationAverageStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
