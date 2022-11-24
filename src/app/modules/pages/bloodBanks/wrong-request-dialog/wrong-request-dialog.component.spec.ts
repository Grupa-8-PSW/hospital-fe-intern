import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrongRequestDialogComponent } from './wrong-request-dialog.component';

describe('WrongRequestDialogComponent', () => {
  let component: WrongRequestDialogComponent;
  let fixture: ComponentFixture<WrongRequestDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrongRequestDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WrongRequestDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
