import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { CustomersComponent } from './customers/customers.component';
import { MaterialsModuleModule } from '../materials-module.module';
import { CustomersModule } from './customers/customers.module';
import { MetricsModule } from './customers/metrics/metrics.module';
import { UserAvatarComponent } from 'src/app/core/components/user-avatar/user-avatar.component';

let routing = RouterModule.forChild([
  { 
    path: 'dashboard', 
    component: DashboardComponent, 
    children: [
      {
        path: 'customers',
        component: CustomersComponent,
      },
      { path: '', redirectTo: 'customers', pathMatch: 'full' }, 
    ],
  },  
]);


@NgModule({
imports: [
  routing,
  CommonModule,
  MaterialsModuleModule,
  CustomersModule,
  UserAvatarComponent
],
exports: [
  CommonModule,
],
declarations: [
  DashboardComponent
],
})
export class DashboardModule { }
