// export const PropertyTraitGroups = [
//     {
//       id: 1,
//       type: TraitGroupType.bedding,
//       traits: [
//         { value: BedType.full, viewValue: BedType.full },
//         { value: BedType.twin, viewValue: BedType.twin },
//       ]
//     },
//   ] as IPropertyTraitGroup[]


export interface IPropertyTraitGroup {
    id: number
    groupType: TraitGroupType
    traits: IPropertyTrait[]
}
export interface IPropertyTrait {
    id: number
    type: TraitType
}


export enum TraitGroupType {
    kitchen = 'kitchen',
    bedding = 'bedding',
    bathroom = 'bathroom',
    spa = 'spa/pool/hottub'
}

export enum TraitType {
    king = 'king',
    queen = 'queen',
    full = 'full',
    twin = 'twin',
    dish_towel = 'dish towel'
}

export enum KitchenLinen {
dish_towel = 'dish towel'
}

export enum SpaLinen {
towel = 'towel',
robe = 'robe'
}