export interface IPropertyDetailGroup {
    
}

export enum PropertyDetailGroupType {
    kitchen = 'kitchen',
    bedding = 'bedding',
    bathroom = 'bathroom',
    spa = 'spa/pool/hottub'
  }




// export const PropertyDetailGroups = [
//     {
//       name: PropertyDetailGroupType.bedding,
//       trait: [
//         { value: BedType.full, viewValue: BedType.full },
//         { value: BedType.king, viewValue: BedType.king },
//         { value: BedType.queen, viewValue: BedType.queen },
//         { value: BedType.twin, viewValue: BedType.twin },
//       ]
//     },
//     {
//       name: PropertyDetailGroupType.spa,
//       trait: [
//         { value: SpaLinen.robe, viewValue: SpaLinen.robe },
//         { value: SpaLinen.towel, viewValue: SpaLinen.towel },
//       ]
//     },
//     {
//       name: PropertyDetailGroupType.kitchen,
//       trait: [
//         { value: SpaLinen.robe, viewValue: SpaLinen.robe },
//         { value: SpaLinen.towel, viewValue: SpaLinen.towel },
//       ]
//     },
//     {
//       name: PropertyDetailGroupType.bathroom,
//       trait: [
//         { value: SpaLinen.robe, viewValue: SpaLinen.robe },
//         { value: SpaLinen.towel, viewValue: SpaLinen.towel },
//       ]
//     },
//   ] as IPropertyDetailGroup[]
