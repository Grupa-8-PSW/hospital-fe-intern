import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTendersComponent } from './all-tenders.component';

describe('AllTendersComponent', () => {
  let component: AllTendersComponent;
  let fixture: ComponentFixture<AllTendersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllTendersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllTendersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
