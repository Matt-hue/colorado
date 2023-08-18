import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {

  imageUrl0 : string = 'C:/Practice/colorado/colorado/src/assets/STRLinens.png'
  @Input() imageUrl! : string
  @Input() productTitle!: string
  @Input() productSubtitle!: string

}
