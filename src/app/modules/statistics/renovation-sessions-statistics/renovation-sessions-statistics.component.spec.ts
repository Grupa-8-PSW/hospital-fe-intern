import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenovationSessionsStatisticsComponent } from './renovation-sessions-statistics.component';

describe('RenovationSessionsStatisticsComponent', () => {
  let component: RenovationSessionsStatisticsComponent;
  let fixture: ComponentFixture<RenovationSessionsStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenovationSessionsStatisticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenovationSessionsStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
