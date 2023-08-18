import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopfrontModule } from './modules/shopfront/shopfront.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { ClientDashboardModule } from './modules/client-dashboard/client-dashboard.module';
import { AdministrationModule } from './modules/administration/administration.module';
import { LandlordModule } from './modules/landlord/landlord.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { metaReducers, reducers } from './core/state';
import { HttpClientModule } from '@angular/common/http';
import { MsalModule } from '@azure/msal-angular';
import { InteractionType, PublicClientApplication } from '@azure/msal-browser';
import { protectedResources } from './auth-config';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpClientModule,
    ShopfrontModule,
    LandlordModule,
    DashboardModule,
    ClientDashboardModule,
    AdministrationModule,
    //BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([]),
    // // Initiate the MSAL library with the MSAL configuration object
    // MsalModule.forRoot(new PublicClientApplication(msalConfig),
    // {
    //   // The routing guard configuration. 
    //   interactionType: InteractionType.Redirect,
    //   authRequest: {
    //     scopes: protectedResources.todoListApi.scopes
    //   }
    // },
    // {
    //   // MSAL interceptor configuration.
    //   // The protected resource mapping maps your web API with the corresponding app scopes. If your code needs to call another web API, add the URI mapping here.
    //   interactionType: InteractionType.Redirect,
    //   protectedResourceMap: new Map([
    //     [protectedResources.todoListApi.endpoint, protectedResources.todoListApi.scopes]
    //   ])
    // }),
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
