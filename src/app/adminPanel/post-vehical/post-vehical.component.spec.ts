import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostVehicalComponent } from './post-vehical.component';

describe('PostVehicalComponent', () => {
  let component: PostVehicalComponent;
  let fixture: ComponentFixture<PostVehicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostVehicalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostVehicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
