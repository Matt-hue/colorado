import { Component } from '@angular/core';
import { IRouterLink } from 'src/app/core/models/router-link';

@Component({
  selector: 'app-landlord',
  templateUrl: './landlord.component.html',
  styleUrls: ['./landlord.component.scss']
})
export class LandlordComponent {

  routes: IRouterLink[] = [
    {
      route: 'dashboard',
      displayName: 'Dashboard'
    },
    {
      route: 'properties',
      displayName: 'Properties'
    },
    {
      route: 'add-property',
      displayName: 'Add Property'
    },
  ]; 

}
