import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyTraitsComponent } from './property-traits.component';

describe('PropertyTraitsComponent', () => {
  let component: PropertyTraitsComponent;
  let fixture: ComponentFixture<PropertyTraitsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropertyTraitsComponent]
    });
    fixture = TestBed.createComponent(PropertyTraitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
