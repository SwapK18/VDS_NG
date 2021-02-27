import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateImgThreeComponent } from './update-img-three.component';

describe('UpdateImgThreeComponent', () => {
  let component: UpdateImgThreeComponent;
  let fixture: ComponentFixture<UpdateImgThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateImgThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateImgThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
