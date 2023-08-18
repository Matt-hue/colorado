import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientDashboardComponent } from './client-dashboard.component';
import { RouterModule } from '@angular/router';
import { MaterialsModuleModule } from '../materials-module.module';
import { UserAvatarComponent } from 'src/app/core/components/user-avatar/user-avatar.component';
import { PropertiesComponent } from './properties/properties.component';
import { PropertyDetailComponent } from './property-detail/property-detail.component';

let routing = RouterModule.forChild([
  { path: "client-dashboard",
    component: ClientDashboardComponent,
    children: [
      {
        path: 'properties',
        component: PropertiesComponent,
        children: [
          
        ]
      },
      {path: 'properties/p', component: PropertyDetailComponent},
      { path: '', redirectTo: 'properties', pathMatch: 'full' },
    ],  
  },
]);

@NgModule({
  declarations: [
    ClientDashboardComponent,
    PropertiesComponent,
    PropertyDetailComponent
  ],
  imports: [
    routing,
    CommonModule,
    MaterialsModuleModule,
    UserAvatarComponent
  ]
})
export class ClientDashboardModule { }
