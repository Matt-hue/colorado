import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IProperty, PropertyType } from "../models/property";
import { Observable, of } from "rxjs";
import { IRoom, PropertyDetail } from "../models/room";
import { BedCoverType, BedTrait, BedType } from "../models/traits/bed-trait";
//import * as uuid from "uuid/v4";
//import { BookModel, BookRequiredProps } from "../models";

const BASE_URL = "http://localhost:3000/books";
const HEADER = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({
  providedIn: "root"
})
export class PropertyService {
  constructor(private http: HttpClient) {}

  properties = [
    {
      id: 1,
      address: '1234 Main St, Denver, CO 80202', 
      type: PropertyType.apartment,
      guests: 3,
      rooms: [
        {id: 1, type: PropertyDetail.bedroom },
        {id: 2, type: PropertyDetail.kitchen },
      ] as IRoom[]
    },
    {
      id: 2,
      address: '5678 Elm St, Boulder, CO 80302',
      guests: 3,
      type: PropertyType.apartment,
      bedroomTraits: [
        {id: 1, type: BedType.full, bedCoverType: BedCoverType.duvet},
        {id: 1, type: BedType.king, bedCoverType: BedCoverType.none},
        {id: 1, type: BedType.twin, bedCoverType: BedCoverType.quilt}
      ] as BedTrait[]
    },
    // {
    //   id: 3,
    //   address: '1357 Pine Ave, Golden, CO 80401',
    //   type: PropertyType.house
    // },
    // {
    //   id: 4,
    //   address: '5678 Elm St, Boulder, CO 80302',
    //   type: PropertyType.apartment
    // },
    // {
    //   id: 5,
    //   address: '1357 Pine Ave, Golden, CO 80401',
    //   type: PropertyType.house
    // }
  ] as Array<IProperty>;

  all() : Observable<IProperty[]> {
    return of(this.properties)
    //return this.http.get<IProperty[]>(BASE_URL);
  }

  load(id: number) : Observable<IProperty | undefined> {

    return of(this.properties.filter(x => x.id === id)[0])
    //return this.http.get<IProperty>(`${BASE_URL}/${id}`);
  }

  create(property: IProperty) : Observable<IProperty> {

    var p = {
      id: 2,
      address: 'oea',
    } as IProperty

    var property = {
      ...property,
      id: this.properties.length + 1,
    }

    this.properties.push(property);

    return of(property)
    // return this.http.post<IProperty>(
    //   `${BASE_URL}`,
    //   JSON.stringify(property),
    //   HEADER
    // );
  }

//   update(id: string, updates: BookRequiredProps) {
//     return this.http.patch<IProperty>(
//       `${BASE_URL}/${id}`,
//       JSON.stringify(updates),
//       HEADER
//     );
//   }

  delete(id: string) {
    return this.http.delete(`${BASE_URL}/${id}`);
  }
}
