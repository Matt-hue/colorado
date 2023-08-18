import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule
  ],
  selector: 'app-row-delete-table',
  templateUrl: './row-delete-table.component.html',
  styleUrls: ['./row-delete-table.component.scss']
})
export class RowDeleteTableComponent {

@Input() dataSource!: any;
@Input() displayedColumns!: Array<string>// = ['size', 'cover'];
@Output() selectedRow = new EventEmitter<number>();

@Input() displayedColumnsWithDelete!: Array<string>// = [...this.displayedColumns, 'delete']

constructor() {
  //this.displayedColumns = [...this.displayedColumns, 'delete'];
}

deleteRow(id: number) {
  this.selectedRow.emit(id)
}

}
