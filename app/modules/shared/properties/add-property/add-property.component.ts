import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormsModule, NgForm, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ActionsSubject, Store } from '@ngrx/store';
import { IProperty, PropertyType } from 'src/app/core/models/property';
import { PropertiesActions, PropertyApiActions } from '../actions';
import { CommonModule } from '@angular/common';
import { Subject, retry, switchMap, takeUntil } from 'rxjs';
import { ofType } from '@ngrx/effects';
import { MatSelectModule } from '@angular/material/select';
import { IRoom, PropertyDetail } from 'src/app/core/models/room';
import { getPropertyEnumKeyName, getRoomEnumKeyName, getRoomStats } from 'src/app/core/utility/helper.functions';
import { CounterInputComponent } from 'src/app/core/components/counter-input/counter-input.component';
import { MatIconModule } from '@angular/material/icon';
import { IRoomStats as IRoomStat } from 'src/app/core/models/view-models/room-stats';
import { EnumToStringPipe } from 'src/app/core/pipes/enum-to-string.pipe';
import { MatBadgeModule } from '@angular/material/badge';
import { SelectInputModel } from 'src/app/core/models/view-models/select-input';
import { selectPropertyById } from 'src/app/core/state/selectors/properties.selector';
import { AppState } from 'src/app/core/state';
import { AddTraitComponent } from './add-trait/add-trait.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  standalone: true,
  imports: [
    EnumToStringPipe,
    CounterInputComponent,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatBadgeModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatStepperModule,
    FormsModule,
    MatButtonModule,
    RouterModule,
    AddTraitComponent,
    //NoopAnimationsModule,
    //BrowserAnimationsModule
  ],
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss']
})
export class AddPropertyComponent implements OnInit, OnDestroy {

  @ViewChild(AddTraitComponent) addTraitComponent!: AddTraitComponent;

  selectedIndex : number | undefined;
  destroy$ = new Subject<boolean>();
  
  addressRoomCountControl = new FormControl(1)

  addressFormGroup = this._formBuilder.group({
    addressCtrl: ['', {
      validators: Validators.required,
    }],
    calendarCtrl: ['', Validators.nullValidator],
    propertyTypeCtrl: [PropertyType.house, {
      validators: Validators.required
    }],
    guestsCountCtrl: this.addressRoomCountControl
    //aliasCtrl: ['', Validators.nullValidator],
  });

  roomsFormGroup = this._formBuilder.group({
    //roomTypeCtrl: [1, Validators.nullValidator],
    //roomCountCtrl: [1, Validators.nullValidator],
  });

  isLinear = false;

  propertyTypeOptions: SelectInputModel<PropertyType>[] = [
    //{value: RoomType.attic, viewValue: getRoomEnumKeyName(RoomType.attic)},
    {value: PropertyType.apartment, viewValue: getPropertyEnumKeyName(PropertyType.apartment)},
    {value: PropertyType.bungalow, viewValue: getPropertyEnumKeyName(PropertyType.bungalow)},
    {value: PropertyType.house, viewValue: getPropertyEnumKeyName(PropertyType.house)},
    {value: PropertyType.studio, viewValue: getPropertyEnumKeyName(PropertyType.studio)},

  ];
  roomTypeOptions: SelectInputModel<PropertyDetail>[] = [
    //{value: RoomType.attic, viewValue: getRoomEnumKeyName(RoomType.attic)},
    {value: PropertyDetail.bedroom, viewValue: getRoomEnumKeyName(PropertyDetail.bedroom)},
    {value: PropertyDetail.kitchen, viewValue: getRoomEnumKeyName(PropertyDetail.kitchen)},
    {value: PropertyDetail.studio, viewValue: getRoomEnumKeyName(PropertyDetail.studio)},
    {value: PropertyDetail.bathroom, viewValue: getRoomEnumKeyName(PropertyDetail.bathroom)},

  ];

  property?: IProperty
  //rooms: IRoom[] = Array<IRoom>();
  roomStats!: Map<PropertyDetail, IRoomStat>;

  constructor(
    private store: Store<AppState>, 
    private _formBuilder: FormBuilder, 
    private router: Router,
    private route: ActivatedRoute,
    private actionsListener$: ActionsSubject
    ) {}
  
    ngOnInit() {
      this.selectedIndex = Number(this.route.snapshot.queryParamMap.get('selectedIndex'));
      
      this.route.params.pipe(  
        switchMap(params => {
          const id = +params['id']
          return this.store.select(selectPropertyById(id))
        })  
      ).subscribe(property => {
        if(property === undefined)
          return
        const addressCtrl = new FormControl(property?.address);
        const propertyTypeCtrl = new FormControl(property?.type);
        const calendarCtrl = new FormControl(property?.calendar ?? '');  

        this.addressFormGroup.setControl('addressCtrl', addressCtrl)
        this.addressFormGroup.setControl('propertyTypeCtrl', propertyTypeCtrl)
        this.addressFormGroup.setControl('calendarCtrl', calendarCtrl)

        //this.rooms = property.rooms ?? []
      });
    }
  
    ngOnDestroy() {
      this.destroy$.complete();
    }

    saveProperty(): void {

      if (!this.addressFormGroup.valid) {
        //return
      }

      if(this.property !== undefined)
      {
        // this.store.dispatch(PropertiesActions.updateProperty( { property: this.property}));
        // this.router.navigate(['../','property-detail', value.property.id], { relativeTo: this.route });
      }
      else{
        const property = {
          address: this.addressFormGroup.value.addressCtrl,
          type: this.addressFormGroup.value.propertyTypeCtrl,
          guests: this.addressFormGroup.value.guestsCountCtrl,
          //rooms: this.rooms
          bedroomTraits: this.addTraitComponent.bedTraits,
          bathroomTraits: this.addTraitComponent.bathroomTraits
        } as IProperty

        this.store.dispatch(PropertiesActions.createProperty( { property: property}));
        this.actionsListener$
        .pipe(ofType(PropertyApiActions.propertyCreated))
        .pipe(takeUntil(this.destroy$))
        .subscribe(
          (value: { property: IProperty }) => {
  
          this.router.navigate(['../','property-detail', value.property.id], { relativeTo: this.route });
  
        });
      }

    }

    // addRooms(): void {
    //   // var roomType = this.roomsFormGroup.controls.roomTypeCtrl.value
    //   // if(roomType === null)
    //   //   return

    //   // const room = {
    //   //   type: this.roomsFormGroup.controls.roomTypeCtrl.value
    //   // } as IRoom
        
    //   //   this.rooms.push(room)
    // }


    // removeRoom(roomType: PropertyDetail): void {
    //   if(this.rooms?.length !== 0)
    //   {
    //     let room = this.rooms.find(x => x.type === roomType)
    //     if(room !== undefined)
    //       {
    //         let index = this.rooms.indexOf(room);
    //         if (index > -1) {  
    //           this.rooms.splice(index, 1);  
    //         } 
    //       }
    //   }

    // }

    // getRoomStats(): Map<PropertyDetail, IRoomStat> {
    //   return getRoomStats(this.rooms)
    // }

    // roomCountValidator(control: FormControl) {  
    //   const value = control.value;
    //   //var result = typeof value === 'number' ? null : { invalidNumber: true };
    //   if(typeof value === 'number' && Number(value) !== 0)
    //   {
    //     return null
    //   }
    //   else
    //   {
    //     return { invalidNumber: true }
    //   }
    // }

    // private roomCountValidator(): ValidatorFn {
    //   return (control: AbstractControl): {[key: string]: any} => {
    //     if(control.value === 0){
    //       return {'emailIsForbidden': true};
    //     } else {
    //       return {'emailIsForbidden': false};
    //     }
    //   }
    // }

}

