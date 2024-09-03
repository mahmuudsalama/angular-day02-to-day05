import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent implements OnChanges {

    @Input() product : any;
    previousValue: number = 0;
    ngOnChanges(changes: SimpleChanges): void {
      this.previousValue = changes['product'].previousValue?.['price'];
    }


    applyDiscount(): void {
      if (this.product) {
        const discount = this.product.price * 0.1;
        this.previousValue = this.product.price - discount;
      }
    }

}
