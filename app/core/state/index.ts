import { ActionReducerMap, createSelector, MetaReducer } from "@ngrx/store";
import * as fromProperties from "./properties.reducer";

export interface AppState {
    properties: fromProperties.State
}

export const reducers: ActionReducerMap<AppState> = {
    properties: fromProperties.propertiesReducer
};

export const metaReducers: MetaReducer<AppState>[] = [];
