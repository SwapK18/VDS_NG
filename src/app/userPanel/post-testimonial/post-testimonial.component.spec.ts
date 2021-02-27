import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostTestimonialComponent } from './post-testimonial.component';

describe('PostTestimonialComponent', () => {
  let component: PostTestimonialComponent;
  let fixture: ComponentFixture<PostTestimonialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostTestimonialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostTestimonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
