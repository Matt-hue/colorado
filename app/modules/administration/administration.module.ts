import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { AdministrationComponent } from './administration.component';
import { LayoutModule } from 'src/app/core/components/layout/layout.module';
import { DashboardComponent } from './dashboard/dashboard.component';

let routing = RouterModule.forChild([
  { path: "admin",
    component: AdministrationComponent,
    children: [
      {
        path: 'a',
        component: DashboardComponent,
      },
      {
        path: 'b',
        component: DashboardComponent,
      },
      // {path: 'properties/p', component: PropertyDetailComponent},
      // { path: '', redirectTo: 'properties', pathMatch: 'full' },
    ],  
  },
]);


@NgModule({
  declarations: [
    AdministrationComponent,
    DashboardComponent
  ],
  imports: [
    routing,
    LayoutModule,
    CommonModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
  ]
})
export class AdministrationModule { }
