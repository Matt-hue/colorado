import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { ShopComponent } from './shop.component';
import { RouterModule } from '@angular/router';
import { ProductCardComponent } from 'src/app/core/components/product-card/product-card.component';
import { MatListModule } from '@angular/material/list';

let routing = RouterModule.forChild([
  { path: 'shop', 
    component: ShopComponent,
    // children: [
    //   {
    //     path: 'shop',
    //     component:  ShopComponent,
    //   },
    //   { path: '', redirectTo: 'shop', pathMatch: 'full' },
    // ],  
  },
  { path: '', redirectTo: 'shop', pathMatch: 'full' }, 
]);


@NgModule({
  declarations: [
    ProductsComponent,
    ShopComponent,
  ],
  imports: [
    routing,
    CommonModule,
    ProductCardComponent,
    MatListModule
  ]
})
export class ShopModule { }
