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
  selector: 'app-action-table',
  templateUrl: './action-table.component.html',
  styleUrls: ['./action-table.component.scss']
})
export class ActionTableComponent {

  @Input() dataSource!: any;
  @Input() displayedColumns!: Array<string>// = ['size', 'cover'];
  @Input() action: string | undefined
  @Output() selectedRow = new EventEmitter<number>();
  
  @Input() displayedColumnsWithAction!: Array<string>// = [...this.displayedColumns, 'delete']
  
  constructor() {
    //this.displayedColumns = [...this.displayedColumns, 'delete'];
  }
  
  raiseActionRow(id: number) {
    this.selectedRow.emit(id)
  }

}
