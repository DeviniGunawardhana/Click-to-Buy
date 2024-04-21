import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemListByEmployeeComponent } from './item-list-by-employee.component';

describe('ItemListByEmployeeComponent', () => {
  let component: ItemListByEmployeeComponent;
  let fixture: ComponentFixture<ItemListByEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemListByEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemListByEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
