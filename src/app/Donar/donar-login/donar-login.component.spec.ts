import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonarLoginComponent } from './donar-login.component';

describe('DonarLoginComponent', () => {
  let component: DonarLoginComponent;
  let fixture: ComponentFixture<DonarLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonarLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonarLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
