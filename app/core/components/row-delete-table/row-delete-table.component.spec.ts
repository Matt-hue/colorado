import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowDeleteTableComponent } from './row-delete-table.component';

describe('RowDeleteTableComponent', () => {
  let component: RowDeleteTableComponent;
  let fixture: ComponentFixture<RowDeleteTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RowDeleteTableComponent]
    });
    fixture = TestBed.createComponent(RowDeleteTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
