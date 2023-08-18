import { Component } from '@angular/core';
import { IRouterLink } from 'src/app/core/models/router-link';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss']
})
export class AdministrationComponent {

  routes: IRouterLink[] = [
    {
      route: 'a',
      displayName: 'a'
    },
    {
      route: 'b',
      displayName: 'b'
    }
  ]; 

}
