import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { FloatLabelType, MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { SelectInputModel } from 'src/app/core/models/view-models/select-input';
import { enumToString, getRoomEnumKeyName } from 'src/app/core/utility/helper.functions';
import { RowDeleteTableComponent } from 'src/app/core/components/row-delete-table/row-delete-table.component';
import { BedCoverType, BedTrait, BedType } from 'src/app/core/models/traits/bed-trait';
import { BathroomType, BathroomTrait } from 'src/app/core/models/traits/bathroom-trait';
import { BathroomTraitRow, BedTraitRow, mapBathroomTraitRows, mapBedTraitRows } from '../../models/property-trait.view-model';


@Component({
  standalone: true,
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
    RowDeleteTableComponent
  ],
  selector: 'app-add-trait',
  templateUrl: './add-trait.component.html',
  styleUrls: ['./add-trait.component.scss']
})
export class AddTraitComponent {

  //@Output() bedTraitsEvent = new EventEmitter<Array<BedTrait>>();
  
  panelOpenState = false;

  //bedding
  bedControl = new FormControl(BedType.full)
  bedCoverControl = new FormControl(BedCoverType.duvet)

  bedFormGroup = this._formBuilder.group({
    bedCtrl: this.bedControl,
    bedCoverCtrl: this.bedCoverControl,
  });

  bedTypeOptions: SelectInputModel<BedType>[] = [
    {value: BedType.full, viewValue: BedType.full},
    {value: BedType.king, viewValue: BedType.king},
    {value: BedType.queen, viewValue: BedType.queen},
    {value: BedType.twin, viewValue: BedType.twin},
  ];
  
  bedTraits: Array<BedTrait> = Array<BedTrait>()
  bedTraitTableRows: Array<BedTraitRow> = Array<BedTraitRow>()

  //bathroom
  bathroomControl = new FormControl(BathroomType.single);
  bathroomSinkControl = new FormControl('1')

  bathroomFormGroup = this._formBuilder.group({
    bathroomCtrl: this.bathroomControl,
    bathroomSinkCtrl: this.bathroomSinkControl
  });

  bathroomTraits: Array<BathroomTrait> = Array<BathroomTrait>()
  bathroomTraitTableRows: Array<BathroomTraitRow> = Array<BathroomTraitRow>()

  bathroomOptions: SelectInputModel<BathroomType>[] = [
    {value: BathroomType.half, viewValue: enumToString('BathroomType', BathroomType.half,)},
    {value: BathroomType.single, viewValue: enumToString('BathroomType', BathroomType.single,)},
    {value: BathroomType.master, viewValue: enumToString('BathroomType', BathroomType.master,)},
  ];

  constructor(private _formBuilder: FormBuilder) {}


  addBeds() : void {
      const bedType = this.bedFormGroup.controls.bedCtrl.value;
      const bedCoverType = this.bedFormGroup.controls.bedCoverCtrl.value;
      if(bedType === null || bedCoverType === null)
        return


      const id = this.bedTraits.length + 1
      const bedTrait = new BedTrait(id, bedType, bedCoverType)
        
      this.bedTraits.push(bedTrait)

      this.bedTraitTableRows = mapBedTraitRows(this.bedTraits)
  }

  deleteBedTrait(id: number){
    const index = this.bedTraits.findIndex(x => x.id === id)
    // if(index === 0)
    //   throw('index cannot be zero')

    this.bedTraits.splice(index, 1)
    this.bedTraitTableRows = mapBedTraitRows(this.bedTraits)
  }

  addBathroomTrait() : void {
    const bathroomType = this.bathroomFormGroup.controls.bathroomCtrl.value;
    if(bathroomType === null)
      return

    const id = this.bedTraits.length + 1
    const bedTrait = new BathroomTrait(id, bathroomType, Number(this.bathroomFormGroup.controls.bathroomSinkCtrl.value))
      
    this.bathroomTraits.push(bedTrait)

    this.bathroomTraitTableRows = mapBathroomTraitRows(this.bathroomTraits)
  }


  deleteBathroomTrait(id: number){
    const index = this.bathroomTraits.findIndex(x => x.id === id)
    // if(index === 0)
    //   throw('index cannot be zero')
    this.bathroomTraits.splice(index, 1)
    this.bathroomTraitTableRows = mapBathroomTraitRows(this.bathroomTraits)
  }
}

