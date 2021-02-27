import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateImgOneComponent } from './update-img-one.component';

describe('UpdateImgOneComponent', () => {
  let component: UpdateImgOneComponent;
  let fixture: ComponentFixture<UpdateImgOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateImgOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateImgOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
