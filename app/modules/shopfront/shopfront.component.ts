import { Component } from '@angular/core';
import { IRouterLink } from 'src/app/core/models/router-link';
declare var sendinblue: any;

@Component({
  selector: 'app-shopfront',
  templateUrl: './shopfront.component.html',
  styleUrls: ['./shopfront.component.scss']
})
export class ShopfrontComponent {

  routes: IRouterLink[] = [
    {
      route: 'about',
      displayName: 'About'
    },
    {
      route: 'contact',
      displayName: 'Contact'
    },
    {
      route: 'faqs',
      displayName: 'FAQs'
    },
    {
      route: 'shop',
      displayName: 'Shop'
    },
    {
      route: 'blog',
      displayName: 'Blog'
    },
  ]; 

  public onIdentify(): void {

    sendinblue.identify('a9b22@mailinator.com', {
      'FIRSTNAME': 'a9',
      'LASTNAME' : 'b22',
      //'id': '10001',
      'plan' : 'diamond',
      'location' : 'San Francisco'
    });

  }

  public onClick(): void {
    sendinblue.track(
      'wowsers',
      {
        "PLAN" : "Diamond",
      },
      {
        "id": "a4123c72-c6f7-4d8e-b8cd-4abb8a807891",
        "data": {
          "products": [
            {
              "product_id": 1234,
              "product_name": "a",
              "amount": 1,
              "price": 220
            },
            {
              "product_id": 5768,
              "product_name": "b",
              "amount": 5,
              "price": 1058
            }
          ]
        }
      },
    );
  }

}
