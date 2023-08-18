export interface IRoom {
    id: number;
    type: PropertyDetail;
    alias?: string;
  }

  export enum PropertyDetail {
    kitchen,
    bedroom,
    studio,
    bathroom,
    dining,
  }
