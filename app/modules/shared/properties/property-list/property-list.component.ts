import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/core/state';
import { PropertiesActions } from '../actions';
import { Observable } from 'rxjs';
import { IProperty, PropertyType } from 'src/app/core/models/property';
import { selectAllProperties } from 'src/app/core/state/selectors/properties.selector';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent implements OnInit {
  
  properties$: Observable<IProperty[]>;

  constructor(private store: Store<AppState>) {
    this.store.dispatch(PropertiesActions.enter());
    this.properties$ = store.select(selectAllProperties);
  }

  ngOnInit() {
    this.store.dispatch(PropertiesActions.enter());
  }
}
