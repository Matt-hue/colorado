import { PropertyType } from "../models/property";
import { IRoom, PropertyDetail } from "../models/room";
import { BathroomType } from "../models/traits/bathroom-trait";
import { IRoomStats } from "../models/view-models/room-stats";
import { MapRoomToIcon } from "./app-mat-icon";

export function getPropertyEnumKeyName(enumValue: number) : string{
    var enumKeyName = PropertyType[enumValue];
    return enumKeyName;
}

export function getRoomEnumKeyName(enumValue: number) : string{
    var enumKeyName = PropertyDetail[enumValue];
    return enumKeyName;
}

export function getRoomStats(rooms : IRoom[]) : Map<PropertyDetail, IRoomStats> {
    const groupedMap = new Map<PropertyDetail, IRoomStats>()
    for (const r of rooms) {

      if (!groupedMap.has(r.type)) {
          let roomStat = {
            roomCount: 1,
            matIcon: MapRoomToIcon(r.type)
          } as IRoomStats
          groupedMap.set(r.type, roomStat);
      }
      else{
        var stat = groupedMap.get(r.type)
        if(stat !== undefined)
        {
          stat.roomCount += 1;
        }
      }
    }
    return groupedMap
  }

export  function enumToString(enumType: string, enumValue: number) {
    var enumName: string = '';
  
    switch (enumType) {
      case 'PropertyType':
        enumName = PropertyType[enumValue];
        break;
      case 'RoomType':
        enumName = PropertyDetail[enumValue];
        break;
      case 'BathroomType':
        enumName = BathroomType[enumValue];
        break;
      default:
        throw ('enum type does not exist');
    }
  
    if (enumName === '' || enumName === undefined)
      throw ('unable to convert enum key to string');
  
    return enumName;
  }
