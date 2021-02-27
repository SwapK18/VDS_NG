import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterdUsersComponent } from './registerd-users.component';

describe('RegisterdUsersComponent', () => {
  let component: RegisterdUsersComponent;
  let fixture: ComponentFixture<RegisterdUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterdUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterdUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
