import { Component } from '@angular/core';
//import * as from '../../../../../assets/town.png'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  products: ProductCardViewModel[] = [
    new ProductCardViewModel('../../../../../assets/QueenSet.jpeg', 'Kitchen Towel', '$1.00'),
    new ProductCardViewModel('../../../../../assets/QueenSet.jpeg', 'Kitchen Towel', '$1.00'),
    new ProductCardViewModel('../../../../../assets/QueenSet.jpeg', 'Kitchen Towel', '$1.00'),
    new ProductCardViewModel('../../../../../assets/QueenSet.jpeg', 'Kitchen Towel', '$1.00'),
    new ProductCardViewModel('../../../../../assets/QueenSet.jpeg', 'Kitchen Towel', '$1.00'),
    new ProductCardViewModel('../../../../../assets/QueenSet.jpeg', 'Kitchen Towel', '$1.00'),
    new ProductCardViewModel('../../../../../assets/QueenSet.jpeg', 'Kitchen Towel', '$1.00'),
    new ProductCardViewModel('../../../../../assets/QueenSet.jpeg', 'Kitchen Towel', '$1.00'),
    new ProductCardViewModel('../../../../../assets/QueenSet.jpeg', 'Kitchen Towel', '$1.00'),
  ]

  productFilters: string[] = ['Services', 'House Sets', 'Amenity Towels', 'Bedroom Sets', 'Bathroom Sets']

}

export class ProductCardViewModel {

  imgUrl!: string
  productTitle!: string
  productSubtitle!: string

  constructor(imgUrl: string, productTitle: string, productSubtitle: string){
    this.imgUrl = imgUrl
    this.productTitle = productTitle
    this.productSubtitle = productSubtitle
  }
  
}
