import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerListByEmployeeComponent } from './customer-list-by-employee.component';

describe('CustomerListByEmployeeComponent', () => {
  let component: CustomerListByEmployeeComponent;
  let fixture: ComponentFixture<CustomerListByEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerListByEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerListByEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
