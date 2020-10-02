import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRelativeComponent } from './product-relative.component';

describe('ProductRelativeComponent', () => {
  let component: ProductRelativeComponent;
  let fixture: ComponentFixture<ProductRelativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductRelativeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductRelativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
