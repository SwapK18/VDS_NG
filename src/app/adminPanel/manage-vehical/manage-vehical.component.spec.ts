import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageVehicalComponent } from './manage-vehical.component';

describe('ManageVehicalComponent', () => {
  let component: ManageVehicalComponent;
  let fixture: ComponentFixture<ManageVehicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageVehicalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageVehicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
