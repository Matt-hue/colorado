import { NgModule } from '@angular/core';
import { CustomersComponent } from './customers.component';
import { MaterialsModuleModule } from '../../materials-module.module';
import { MetricsModule } from './metrics/metrics.module';


@NgModule({
  declarations: [
    CustomersComponent
  ],
imports: [
  MetricsModule,
  MaterialsModuleModule,
],
exports: [
]
})
export class CustomersModule { }