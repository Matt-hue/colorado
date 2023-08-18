import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule
  ],
  selector: 'app-counter-input',
  templateUrl: './counter-input.component.html',
  styleUrls: ['./counter-input.component.scss']
})
export class CounterInputComponent {

  counterValue = 0;  
  
  @Output() counterChange = new EventEmitter<number>();  
  
  incrementCounter() {  
    if (this.counterValue < 10) {  
      this.counterValue++;  
      this.counterChange.emit(this.counterValue);  
    }  
  }  
  
  decrementCounter() {  
    if (this.counterValue > 0) {  
      this.counterValue--;  
      this.counterChange.emit(this.counterValue);  
    }  
  }  
}   
