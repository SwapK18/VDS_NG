import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageContactQueryComponent } from './manage-contact-query.component';

describe('ManageContactQueryComponent', () => {
  let component: ManageContactQueryComponent;
  let fixture: ComponentFixture<ManageContactQueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageContactQueryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageContactQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
