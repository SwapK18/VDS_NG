import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateImgTwoComponent } from './update-img-two.component';

describe('UpdateImgTwoComponent', () => {
  let component: UpdateImgTwoComponent;
  let fixture: ComponentFixture<UpdateImgTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateImgTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateImgTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
