import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResuntProductComponent } from './resunt-product.component';

describe('ResuntProductComponent', () => {
  let component: ResuntProductComponent;
  let fixture: ComponentFixture<ResuntProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResuntProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResuntProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
