import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateImgFiveComponent } from './update-img-five.component';

describe('UpdateImgFiveComponent', () => {
  let component: UpdateImgFiveComponent;
  let fixture: ComponentFixture<UpdateImgFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateImgFiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateImgFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
