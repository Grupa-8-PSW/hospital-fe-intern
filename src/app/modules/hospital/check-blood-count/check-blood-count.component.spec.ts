import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckBloodCountComponent } from './check-blood-count.component';

describe('CheckBloodCountComponent', () => {
  let component: CheckBloodCountComponent;
  let fixture: ComponentFixture<CheckBloodCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckBloodCountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckBloodCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
