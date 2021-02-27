import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTestimonialComponent } from './my-testimonial.component';

describe('MyTestimonialComponent', () => {
  let component: MyTestimonialComponent;
  let fixture: ComponentFixture<MyTestimonialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTestimonialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTestimonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
