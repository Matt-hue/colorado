import { Component } from '@angular/core';
import { IProperty, PropertyType } from 'src/app/core/models/property';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss']
})
export class PropertiesComponent {

  properties = [
    {
      address: '1234 Main St, Denver, CO 80202', 
      type: PropertyType.apartment
    },
    {
      address: '5678 Elm St, Boulder, CO 80302',
      type: PropertyType.apartment
    },
    {
      address: '1357 Pine Ave, Golden, CO 80401',
      type: PropertyType.house
    },
    {
      address: '5678 Elm St, Boulder, CO 80302',
      type: PropertyType.apartment
    },
    {
      address: '1357 Pine Ave, Golden, CO 80401',
      type: PropertyType.house
    }
  ] as Array<IProperty>

}