export class BathroomTrait {

    constructor(id: number, traitType: BathroomType, sinks: number){
        this.id = id
        this.type = traitType
        this.sinks = sinks
    }

    id!: number
    type!: BathroomType
    sinks: number
}

// export enum BathroomTraitType {
//     robe,
//     towel
// }

export enum BathroomType {
    master,
    single,
    half
}