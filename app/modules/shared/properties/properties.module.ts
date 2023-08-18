import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { PropertyApiEffects } from './properties-api.effects';
import { PropertyListComponent } from './property-list/property-list.component';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import { PropertyDetailComponent } from './property-detail/property-detail.component';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSortModule } from '@angular/material/sort';
import { BrowserModule } from '@angular/platform-browser';
import { EnumToStringPipe } from 'src/app/core/pipes/enum-to-string.pipe';
import { RoomsComponent } from './property-detail/rooms/rooms.component';
import { OrderHistoryComponent } from './property-detail/order-history/order-history.component';
import { PropertyTraitsComponent } from './property-detail/property-traits/property-traits.component';
import {MatChipsModule} from '@angular/material/chips';

@NgModule({
  declarations: [
    PropertyListComponent,
    PropertyDetailComponent,
    RoomsComponent,
    OrderHistoryComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatBadgeModule,
    EffectsModule.forFeature([PropertyApiEffects]),
    MatCardModule,
    MatDividerModule,
    BrowserModule,
    //BrowserAnimationsModule,
    //NoopAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatProgressBarModule,
    MatGridListModule,
    MatSortModule,
    EnumToStringPipe,
    PropertyTraitsComponent,
    MatChipsModule
  ]
})
export class PropertiesModule { }
