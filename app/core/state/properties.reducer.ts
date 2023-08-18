import { Action, createReducer, on } from "@ngrx/store";
import { IProperty } from "../models/property";
import { PropertiesActions, PropertyApiActions } from "src/app/modules/shared/properties/actions";

const createProperty = (properties: IProperty[], property: IProperty) => [...properties, property];
const updateProperty = (properties: IProperty[], changes: IProperty) =>
  properties.map(property => {
    return property.id === changes.id ? Object.assign({}, property, changes) : property;
  });
const deleteProperty = (properties: IProperty[], propertyId: number) =>
  properties.filter(property => propertyId !== property.id);

export interface State {
    properties: IProperty[];
    activePropertyId: number | null;
}

export const initialState: State = {
    properties: [],
    activePropertyId: null
}

export const propertiesReducer = createReducer(
    initialState,
    on(PropertiesActions.selectProperty, (state, action) => {
        return {
            ...state,
            activePropertyId: action.propertyId
        }
    }),
    on(PropertyApiActions.propertiesLoaded, (state, action) => {
        return {
            ...state,
            properties: action.properties
        }
    }),
    on(PropertyApiActions.propertyCreated, (state, action) => {
        return {
          properties: createProperty(state.properties, action.property),
          activePropertyId: null//action.property.id
        };
      }),
    on(PropertyApiActions.propertyUpdated, (state, action) => {
        return {
        properties: updateProperty(state.properties, action.property),
        activePropertyId: null
        };
      }),
);

export function reducer(state: undefined | State, action: Action) {
    return propertiesReducer(state, action);
}