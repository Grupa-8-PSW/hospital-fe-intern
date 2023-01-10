import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenovationTypeStatisticsComponent } from './renovation-type-statistics.component';

describe('RenovationTypeStatisticsComponent', () => {
  let component: RenovationTypeStatisticsComponent;
  let fixture: ComponentFixture<RenovationTypeStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenovationTypeStatisticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenovationTypeStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
