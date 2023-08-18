import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandlordComponent } from './landlord.component';
import { LayoutModule } from 'src/app/core/components/layout/layout.module';
import { RouterModule } from '@angular/router';
import { HomeownerDashboardComponent } from './homeowner-dashboard/homeowner-dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PropertiesModule } from '../shared/properties/properties.module';
import { AddPropertyComponent } from '../shared/properties/add-property/add-property.component';
import { PropertyDetailComponent } from '../shared/properties/property-detail/property-detail.component';
import { PropertyListComponent } from '../shared/properties/property-list/property-list.component';

let routing = RouterModule.forChild([
  { path: "homeowner",
    component: LandlordComponent,
    children: [
      {
        path: 'dashboard',
        component: HomeownerDashboardComponent,
      },
      {
        path: 'add-property',
        component:  AddPropertyComponent,
      },
      {
        path: 'edit-property/:id',
        component:  AddPropertyComponent,
      },
      {
        path: 'properties',
        component:  PropertyListComponent,
      },
      {
        path: 'property-detail/:id',
        component:  PropertyDetailComponent,
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],  
  },
]);

@NgModule({
  declarations: [
    LandlordComponent,
    HomeownerDashboardComponent,
  ],
  imports: [
    routing,
    CommonModule,
    LayoutModule,
    PropertiesModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatStepperModule,
    FormsModule,
    MatFormFieldModule,
  ]
})
export class LandlordModule { }
