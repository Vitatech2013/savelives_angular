import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonarRegistrationComponent } from './donar-registration.component';

describe('DonarRegistrationComponent', () => {
  let component: DonarRegistrationComponent;
  let fixture: ComponentFixture<DonarRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonarRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonarRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
