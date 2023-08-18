import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopfrontComponent } from './shopfront.component';
import { RouterModule } from '@angular/router';
import { MaterialsModuleModule } from '../materials-module.module';
import { ShopComponent } from './shop/shop.component';
import { ShopModule } from './shop/shop.module';
import { PaymentModule } from '../shared/payment/payment.module';
import { CheckoutComponent } from '../shared/payment/checkout/checkout.component';

let routing = RouterModule.forChild([
  { path: 'shopfront', 
    component: ShopfrontComponent,
    children: [
      {
        path: 'checkout',
        component:  CheckoutComponent,
      },
      {
        path: 'shop',
        component:  ShopComponent,
      },
      { path: '', redirectTo: 'shop', pathMatch: 'full' },
    ],  
  },
  { path: '', redirectTo: 'shopfront', pathMatch: 'full' }, 
]);

@NgModule({
  declarations: [
    ShopfrontComponent,
  ],
  imports: [
    routing,
    CommonModule,
    PaymentModule,
    MaterialsModuleModule
  ]
})
export class 
ShopfrontModule { }
