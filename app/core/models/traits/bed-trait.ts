export class BedTrait {

    constructor(id: number, traitType: BedType, bedCoverType: BedCoverType){
        this.id = id
        this.type = traitType
        this.bedCoverType = bedCoverType
    }

    id!: number
    type!: BedType
    bedCoverType!: BedCoverType
}

export enum BedType {
    king = 'king',
    queen = 'queen',
    full = 'full',
    twin = 'twin',
}

export enum BedCoverType {
    duvet = 'duvet',
    quilt = 'quilt',
    none = 'none'
}