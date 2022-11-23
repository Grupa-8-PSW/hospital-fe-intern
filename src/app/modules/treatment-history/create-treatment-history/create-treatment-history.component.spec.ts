import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTreatmentHistoryComponent } from './create-treatment-history.component';

describe('CreateTreatmentHistoryComponent', () => {
  let component: CreateTreatmentHistoryComponent;
  let fixture: ComponentFixture<CreateTreatmentHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTreatmentHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTreatmentHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
