import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopfrontComponent } from './shopfront.component';

describe('ShopfrontComponent', () => {
  let component: ShopfrontComponent;
  let fixture: ComponentFixture<ShopfrontComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopfrontComponent]
    });
    fixture = TestBed.createComponent(ShopfrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
