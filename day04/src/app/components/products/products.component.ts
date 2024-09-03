import { Component } from '@angular/core';
import { IProduct } from '../../models/iproducts';
import { productsList } from '../../models/productsList';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products: IProduct[];
  constructor() {
    this.products = productsList;
  }

}
