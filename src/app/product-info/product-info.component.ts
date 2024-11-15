import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product } from '../models/product.model';
import { ShippingInfoComponent } from "../shipping-info/shipping-info.component";

@Component({
  selector: 'app-product-info',
  standalone: true,
  imports: [CommonModule, FormsModule, ShippingInfoComponent],
  templateUrl:'./product-info.component.html'
})
export class ProductInfoComponent {
  @Input() product!: Product;
  @Output() addToCart = new EventEmitter<{ quantity: number }>();

  quantity = 1;

  incrementQuantity() {
    this.quantity++;
  }

  decrementQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  onAddToCart() {
    this.addToCart.emit({
      quantity: this.quantity
    });
  }
}