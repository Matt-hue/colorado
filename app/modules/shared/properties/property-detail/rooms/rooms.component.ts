import { Component, Input, OnInit } from '@angular/core';
import { IRoom, PropertyDetail } from 'src/app/core/models/room';
import { IRoomStats } from 'src/app/core/models/view-models/room-stats';
import { MapRoomToIcon } from 'src/app/core/utility/app-mat-icon';
import { getRoomStats } from 'src/app/core/utility/helper.functions';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

@Input() rooms! : IRoom[] | undefined
roomStats!: Map<PropertyDetail, IRoomStats>

constructor() {
}
  ngOnInit(): void {
    if(this.rooms !== undefined)
    {
      this.roomStats = getRoomStats(this.rooms)
    }
  }

}

