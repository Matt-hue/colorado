import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTraitComponent } from './add-trait.component';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BedTraitRow, BedTraitTableComponent } from './bed-trait-table/bed-trait-table.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BedCoverType, BedTrait, IBedTrait, IPropertyTrait, TraitType } from 'src/app/core/models/property-trait';

describe('AddTraitComponent', () => {
  let component: AddTraitComponent;
  let fixture: ComponentFixture<AddTraitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        //AddTraitComponent
      ],
      imports: [
        CommonModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatBadgeModule,
        MatSelectModule,
        ReactiveFormsModule,
        MatStepperModule,
        FormsModule,
        MatButtonModule,
        MatExpansionModule,
        MatRadioModule,
        MatCheckboxModule,
        BedTraitTableComponent,
        BrowserAnimationsModule,
        NoopAnimationsModule
      ]
    });
    fixture = TestBed.createComponent(AddTraitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('createTableData', () => {
    //arrange
    var bedTrait1 = new BedTrait(1, TraitType.full, BedCoverType.duvet);
    var bedTrait2 = new BedTrait(1, TraitType.king, BedCoverType.none);


    component.bedTraitGroup.traits = [
      bedTrait1,
      bedTrait2,
      { id: 0, type: TraitType.dish_towel} as IPropertyTrait
    ] as IPropertyTrait[]

    //act
    component.updateBedTraitRows();

    //assert
    var expected = [
      { size: 'eaaaa', cover: 'ae' },
      //{ size: 'e', cover: 'ae' }
    ] as BedTraitRow[]
    expect(component.bedTableDataSource.length).toBe(2)
    expect(component.bedTableDataSource).toBe(expected)
  });
});
