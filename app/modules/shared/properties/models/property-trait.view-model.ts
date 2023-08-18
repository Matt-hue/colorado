import { BathroomTrait } from "src/app/core/models/traits/bathroom-trait";
import { BedTrait } from "src/app/core/models/traits/bed-trait";
import { enumToString } from "src/app/core/utility/helper.functions";

export interface BedTraitRow {
    id: number
    size: string;
    cover: string;
  }
  
  export interface BathroomTraitRow {
    id: number
    size: string;
    sinks: number
  }

export function  mapBedTraitRows(bedTraits: BedTrait[]) : BedTraitRow[] {

    return bedTraits.map(x => {
      return {
        id: x.id,
        size: x.type,
        cover: x.bedCoverType.toString()
      } as BedTraitRow
    });

}

export function  mapBathroomTraitRows(bathroomTraits: BathroomTrait[]) : BathroomTraitRow[] {

    return bathroomTraits.map(x => {

      const trait = {
        id: x.id,
        size: enumToString('BathroomType', x.type),
        sinks: x.sinks
      } as BathroomTraitRow

      return trait
    });

}