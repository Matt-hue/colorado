import { Component, Input, OnInit } from '@angular/core';
import { IProperty } from 'src/app/core/models/property';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import { ActionTableComponent } from 'src/app/core/components/action-table/action-table.component';
import { BedTraitRow, mapBedTraitRows } from '../../models/property-trait.view-model';

@Component({
  standalone: true,
  selector: 'app-property-traits',
  templateUrl: './property-traits.component.html',
  styleUrls: ['./property-traits.component.scss'],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    ActionTableComponent
  ],
  animations: [
  ],
})
export class PropertyTraitsComponent implements OnInit{

  @Input() property!: IProperty
  bedroomTraits: Array<BedTraitRow> =  Array<BedTraitRow>()
  propertyHasTraits!: boolean

  ngOnInit(): void {
    if(this.property.bedroomTraits !== undefined)
      this.bedroomTraits = mapBedTraitRows(this.property.bedroomTraits)

    this.propertyHasTraits = this.property?.bathroomTraits?.length !== 0 || this.property?.bedroomTraits?.length !== 0 || this.property?.kitchenTraits?.length !==0
  }

}
