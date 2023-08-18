import { createSelector } from "@ngrx/store";
import { AppState } from "..";

export const selectPropertiesState = (state: AppState) => state.properties;
export const selectActivePropertyId = (state: AppState) => state.properties.activePropertyId;

export const selectAllProperties = createSelector(
  selectPropertiesState,
  (state) => state.properties
)

export const selectActiveProperty = createSelector(
  selectPropertiesState,
  selectActivePropertyId,
  (state, activePropertyId) => state.properties.find(x => x.id === activePropertyId)
)

export const selectPropertyById = (propertyId: number) => createSelector(
  selectPropertiesState,
  (state) => state.properties.find(x => x.id === propertyId)
)