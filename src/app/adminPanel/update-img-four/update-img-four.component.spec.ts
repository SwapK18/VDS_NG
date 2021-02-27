import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateImgFourComponent } from './update-img-four.component';

describe('UpdateImgFourComponent', () => {
  let component: UpdateImgFourComponent;
  let fixture: ComponentFixture<UpdateImgFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateImgFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateImgFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
