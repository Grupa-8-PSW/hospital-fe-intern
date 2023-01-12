import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenderGraphsComponent } from './tender-graphs.component';

describe('TenderGraphsComponent', () => {
  let component: TenderGraphsComponent;
  let fixture: ComponentFixture<TenderGraphsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenderGraphsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TenderGraphsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
