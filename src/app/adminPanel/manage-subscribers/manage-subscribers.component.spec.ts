import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSubscribersComponent } from './manage-subscribers.component';

describe('ManageSubscribersComponent', () => {
  let component: ManageSubscribersComponent;
  let fixture: ComponentFixture<ManageSubscribersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageSubscribersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageSubscribersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
