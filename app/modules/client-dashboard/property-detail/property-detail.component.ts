import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { IOrderModel, IPackageModel } from 'src/app/core/models/order';
import { IProperty, PropertyType } from 'src/app/core/models/property';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class PropertyDetailComponent {

  property: IProperty =     {
    id: 1,
    address: '44 Main St, Denver, CO 80202',
    guests: 3,
    type: PropertyType.apartment
  }

  dataSource: IOrderModel[] = [];// = ELEMENT_DATA;
  //columnsToDisplay = ['name', 'weight', 'symbol', 'position'];
  columnsToDisplay = ['id', 'date', 'status', 'value', ];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand', 'action',];
  expandedElement!: IPackageModel | null;//PeriodicElement | null;

  constructor()
  {
    //this.dataSource =  IOrder[] = [];
    for (let i = 1; i <= 3; i++) { 
      this.dataSource.push(this.createOrder(i)); 
    }
  }

  createOrder(id: number): IOrderModel{

    var order: IOrderModel =   {
      id: id,
      status: 'fulfilled',
      value: '$' + (Math.random()*100).toFixed(2),
      date: (new Date()).toLocaleDateString(),
      packages: [
        {
          id: id,
          name: 'Full Sheet Set',
          value: '$' + (Math.random()*100).toFixed(2),
          count: 2
        },
        {
          id: id,
          name: 'Bathroom Towel Set',
          value: '$' + (Math.random()*100).toFixed(2),
          count: 2
        }
      ]
    }

    return order;
  }

}
