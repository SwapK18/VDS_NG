import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyUpdatePasswordComponent } from './my-update-password.component';

describe('MyUpdatePasswordComponent', () => {
  let component: MyUpdatePasswordComponent;
  let fixture: ComponentFixture<MyUpdatePasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyUpdatePasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyUpdatePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
