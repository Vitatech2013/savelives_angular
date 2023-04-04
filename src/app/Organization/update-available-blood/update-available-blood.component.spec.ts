import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAvailableBloodComponent } from './update-available-blood.component';

describe('UpdateAvailableBloodComponent', () => {
  let component: UpdateAvailableBloodComponent;
  let fixture: ComponentFixture<UpdateAvailableBloodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAvailableBloodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAvailableBloodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
