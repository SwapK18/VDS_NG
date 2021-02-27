import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVehicalComponent } from './update-vehical.component';

describe('UpdateVehicalComponent', () => {
  let component: UpdateVehicalComponent;
  let fixture: ComponentFixture<UpdateVehicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateVehicalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateVehicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
