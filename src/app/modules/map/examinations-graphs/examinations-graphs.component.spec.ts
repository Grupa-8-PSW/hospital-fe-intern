import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExaminationsGraphsComponent } from './examinations-graphs.component';

describe('ExaminationsGraphsComponent', () => {
  let component: ExaminationsGraphsComponent;
  let fixture: ComponentFixture<ExaminationsGraphsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExaminationsGraphsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExaminationsGraphsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
