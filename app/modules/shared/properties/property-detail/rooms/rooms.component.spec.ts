import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsComponent} from './rooms.component';
import { IRoom, PropertyDetail } from 'src/app/core/models/room';
import { MatIconModule } from '@angular/material/icon';
import { AppMatIcon } from 'src/app/core/utility/app-mat-icon';
import { EnumToStringPipe } from 'src/app/core/pipes/enum-to-string.pipe';
import { IRoomStats } from 'src/app/core/models/view-models/room-stats';

describe('RoomsComponent', () => {
  let component: RoomsComponent;
  let fixture: ComponentFixture<RoomsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoomsComponent, EnumToStringPipe],
      imports: [MatIconModule]
    });
    fixture = TestBed.createComponent(RoomsComponent);
    component = fixture.componentInstance;
    component.rooms = [
      {id: 1, type: PropertyDetail.bedroom },
      {id: 2, type: PropertyDetail.kitchen },
      {id: 3, type: PropertyDetail.bathroom },
      {id: 4, type: PropertyDetail.bedroom }
    ] as IRoom[]
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('room stats', () => {
    it('should create stats correctly', () => {

      var map = new Map<PropertyDetail, IRoomStats>()
      map.set(PropertyDetail.bedroom, {roomCount: 2, matIcon: AppMatIcon[AppMatIcon.bed]} as IRoomStats);
      map.set(PropertyDetail.kitchen, {roomCount: 1, matIcon: AppMatIcon[AppMatIcon.countertops]} as IRoomStats);
      map.set(PropertyDetail.bathroom, {roomCount: 1, matIcon: AppMatIcon[AppMatIcon.bathtub]} as IRoomStats);
      expect(component.roomStats).toEqual(map)
    });
  });

});
