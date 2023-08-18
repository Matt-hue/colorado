import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, switchMap } from 'rxjs';
import { IOrderModel, IPackageModel } from 'src/app/core/models/order';
import { IProperty } from 'src/app/core/models/property';
import { AppState } from 'src/app/core/state';
import { selectActiveProperty, selectAllProperties, selectPropertyById } from 'src/app/core/state/selectors/properties.selector';
import { AppMatIcon } from 'src/app/core/utility/app-mat-icon';
import { PropertiesActions } from '../actions';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.scss'],
})
export class PropertyDetailComponent implements OnInit {

  //property$!: Observable<IProperty | undefined>
  property!: IProperty
  propertyId!: number;

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private route: ActivatedRoute) { }  
  
  ngOnInit() {
    this.route.params.pipe(  
        switchMap(params => {
          const id = +params['id']
          this.propertyId = id
          return this.store.select(selectPropertyById(this.propertyId))
        })  
      ).subscribe(property => {
        if(property === undefined)
          throw('property detail view: property not found')
        this.property = property;  
      });
      //todo: redirect to property list if property not found.
      
      // this.property$ = this.route.params.pipe(  
      //   switchMap(params => {
      //     const id = +params['id']
      //     this.propertyId = id
      //     return this.store.select(selectPropertyById(this.propertyId))
      //   })  
      // )
    }

  editProperty()
  {
    //this.router.navigate(['../../','edit-property', this.propertyId], { relativeTo: this.route, queryParams: { selectedIndex: 3 } });

    //this.store.dispatch(PropertiesActions.updateProperty.createProperty( { property: property}));
  }
}


