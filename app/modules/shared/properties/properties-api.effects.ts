import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { concatMap, map, mergeMap } from "rxjs/operators";
import { PropertyService } from "src/app/core/services/property.service";
import { PropertiesActions, PropertyApiActions } from "./actions";
//import { BooksPageActions, BooksApiActions } from "./actions";

@Injectable()
export class PropertyApiEffects {  
    constructor(
        private actions$: Actions,
        private propertyService: PropertyService
        )  {}


    getAllProperties$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(PropertiesActions.enter),
            mergeMap(action => {
                return this.propertyService.all().pipe(
                    map(properties => PropertyApiActions.propertiesLoaded( { properties } ))
                )
            })
        )
    })

    createBook$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PropertiesActions.createProperty),
      concatMap(action =>
        this.propertyService
          .create(action.property)
          .pipe(map(property => PropertyApiActions.propertyCreated({ property })))
      )
    )
  )
}