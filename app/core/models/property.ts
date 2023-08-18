import { IPropertyTrait } from "./property-trait";
import { IRoom } from "./room";
import { BathroomTrait } from "./traits/bathroom-trait";
import { BedTrait as BedroomTrait } from "./traits/bed-trait";
import { KitchenTrait } from "./traits/kitchen-trait";

export interface IProperty {
    id: number;
    address: string;
    guests: number;
    type: PropertyType;
    calendar?: string
    alias?: string;
    rooms?: IRoom[]
    traits?: IPropertyTrait[]
    bedroomTraits?: BedroomTrait[]
    kitchenTraits?: KitchenTrait[]
    bathroomTraits?: BathroomTrait[]
  }

export enum PropertyType {
  bungalow,
  apartment,
  studio,
  house
}
  