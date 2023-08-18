import { PropertyDetail } from "../models/room";

export enum AppMatIcon{
    bed,
    single_bed,
    bathtub,
    countertops,
    table_lamp,
    bathroom,
    light,
    fireplace,
    flatware
}

export function MapRoomToIcon(room: PropertyDetail) : string{

    let icon = '';

    switch (room) {
        case PropertyDetail.bedroom:
            icon = AppMatIcon[AppMatIcon.bed]
            break;
        case PropertyDetail.kitchen:
            icon = AppMatIcon[AppMatIcon.countertops]
            break;
        case PropertyDetail.bathroom:
            icon = AppMatIcon[AppMatIcon.bathtub]
            break;
        case PropertyDetail.studio:
            icon = AppMatIcon[AppMatIcon.light]
            break;
        default:
            throw('Unable to map room to mat-icon')
            break;
    }

    return icon;
}