import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBrandsComponent } from './update-brands.component';

describe('UpdateBrandsComponent', () => {
  let component: UpdateBrandsComponent;
  let fixture: ComponentFixture<UpdateBrandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateBrandsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
