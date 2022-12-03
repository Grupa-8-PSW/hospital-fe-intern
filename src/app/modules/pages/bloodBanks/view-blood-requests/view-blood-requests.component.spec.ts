import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBloodRequestsComponent } from './view-blood-requests.component';

describe('ViewBloodRequestsComponent', () => {
  let component: ViewBloodRequestsComponent;
  let fixture: ComponentFixture<ViewBloodRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBloodRequestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewBloodRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
