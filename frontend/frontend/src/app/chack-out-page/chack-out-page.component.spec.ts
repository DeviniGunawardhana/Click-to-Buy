import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChackOutPageComponent } from './chack-out-page.component';

describe('ChackOutPageComponent', () => {
  let component: ChackOutPageComponent;
  let fixture: ComponentFixture<ChackOutPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChackOutPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChackOutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
