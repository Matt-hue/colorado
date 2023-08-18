import { createAction, props } from "@ngrx/store";
import { IProperty } from "src/app/core/models/property";

export const enter = createAction('[Properties] Enter'); //Event for when property page component is loaded

export const selectProperty = createAction(
    '[Properties] select property',
    props<{ propertyId: number}>()
);

export const clearSelectedProperty = createAction(
    '[Properties] clear selected property'
);

export const createProperty = createAction(
    '[Properties] create a property', 
    props<{ property: IProperty }>()
    );

export const updateProperty = createAction(
    '[Properties] update a property',
    //props<{ propertyId: string, changes: PropertyRequiredProps }>()
    );

export const deleteProperty = createAction(
    '[Properties] delete a property',
    props<{ propertyId: number }>()
    );