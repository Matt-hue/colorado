import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout/checkout.component';
import { SuccessComponent } from './success/success.component';
import { CancelComponent } from './cancel/cancel.component';



@NgModule({
  declarations: [
    CheckoutComponent,
    SuccessComponent,
    CancelComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PaymentModule { }
