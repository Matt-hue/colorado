import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetricsComponent } from './metrics.component';
import { KpiCardComponent } from 'src/app/core/components/kpi-card/kpi-card.component';
import { MaterialsModuleModule } from 'src/app/modules/materials-module.module';



@NgModule({
  declarations: [
    MetricsComponent
  ],
  imports: [
    CommonModule,
    KpiCardComponent,
    MaterialsModuleModule
  ],
  exports: [
    MetricsComponent
  ]
})
export class MetricsModule { }
