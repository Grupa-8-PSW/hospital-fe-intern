import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnblockingUsersComponent } from './unblocking-users.component';

describe('UnblockingUsersComponent', () => {
  let component: UnblockingUsersComponent;
  let fixture: ComponentFixture<UnblockingUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnblockingUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnblockingUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
