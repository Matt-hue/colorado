export interface IOrderModel {
    id: number,
    status: string,
    value: string,
    date: string,
    packages: IPackageModel[]
}

export interface IPackageModel {
    id: number,
    name: string,
    value: string,
    count: number
}