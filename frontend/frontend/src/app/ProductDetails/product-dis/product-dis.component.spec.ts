import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDisComponent } from './product-dis.component';

describe('ProductDisComponent', () => {
  let component: ProductDisComponent;
  let fixture: ComponentFixture<ProductDisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
