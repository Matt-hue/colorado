import { createAction, props } from "@ngrx/store";
import { IProperty } from "src/app/core/models/property";

export const propertiesLoaded = createAction(
    '[Property API] property loaded success',
    props<{ properties: IProperty[] }>()
);

export const propertyCreated = createAction(
    '[Property API] property created success',
    props<{ property: IProperty }>()
);

export const propertyUpdated = createAction(
    '[Property API] property updated success',
    props<{ property: IProperty }>()
);

export const propertyDeleted = createAction(
    '[Property API] property deleted success',
    props<{ propertyId: number }>()
);
