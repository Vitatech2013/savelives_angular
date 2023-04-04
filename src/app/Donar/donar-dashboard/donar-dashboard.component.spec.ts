import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonarDashboardComponent } from './donar-dashboard.component';

describe('DonarDashboardComponent', () => {
  let component: DonarDashboardComponent;
  let fixture: ComponentFixture<DonarDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonarDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonarDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
