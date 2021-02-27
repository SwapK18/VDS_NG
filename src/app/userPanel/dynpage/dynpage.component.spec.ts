import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynpageComponent } from './dynpage.component';

describe('DynpageComponent', () => {
  let component: DynpageComponent;
  let fixture: ComponentFixture<DynpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
