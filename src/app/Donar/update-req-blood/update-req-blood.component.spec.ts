import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateReqBloodComponent } from './update-req-blood.component';

describe('UpdateReqBloodComponent', () => {
  let component: UpdateReqBloodComponent;
  let fixture: ComponentFixture<UpdateReqBloodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateReqBloodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateReqBloodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
