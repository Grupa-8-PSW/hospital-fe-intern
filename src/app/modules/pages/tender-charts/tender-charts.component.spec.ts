import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenderChartsComponent } from './tender-charts.component';

describe('TenderChartsComponent', () => {
  let component: TenderChartsComponent;
  let fixture: ComponentFixture<TenderChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenderChartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TenderChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
