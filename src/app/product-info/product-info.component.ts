import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product } from '../models/product.model';
import { ShippingInfoComponent } from "../shipping-info/shipping-info.component";

@Component({
  selector: 'app-product-info',
  standalone: true,
  imports: [CommonModule, FormsModule, ShippingInfoComponent],
  template: `
    <div class="space-y-8 p-8 bg-gray-50 rounded-2xl shadow-lg max-w-lg mx-auto transition-all hover:shadow-xl">
      <div class="flex items-center">
        <span class="px-4 py-1 text-sm font-semibold text-white bg-pink-500 rounded-full uppercase tracking-wider">Best Seller</span>
      </div>
      
      <h1 class="text-4xl font-extrabold text-gray-800">{{ product.name }}</h1>
      <p class="text-gray-500 leading-relaxed">{{ product.description }}</p>

      <div class="flex items-center space-x-4">
        <span class="text-3xl font-bold text-indigo-600">\${{ product.price }}</span>
        <span class="text-lg text-gray-400 line-through">\${{ product.originalPrice }}</span>
      </div>

      <div class="flex items-center space-x-2 text-gray-500">
        <div class="star-rating flex text-yellow-400">
          <span *ngFor="let star of [1,2,3,4,5]" class="mr-0.5">⭐</span>
        </div>
        <span>{{ product.reviews }} reviews</span>
        <span class="text-gray-300">•</span>
        <span>{{ product.sold }} sold</span>
      </div>

      <div class="space-y-6">
        <div>
          <label class="block text-sm font-medium text-gray-600">Quantity</label>
          <div class="flex items-center mt-3 space-x-3">
            <button
              (click)="decrementQuantity()"
              class="rounded-full bg-gray-200 w-10 h-10 text-lg font-bold text-gray-700 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150"
            >
              -
            </button>
            <span class="text-xl font-semibold">{{ quantity }}</span>
            <button
              (click)="incrementQuantity()"
              class="rounded-full bg-gray-200 w-10 h-10 text-lg font-bold text-gray-700 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150"
            >
              +
            </button>
          </div>
        </div>
      </div>

      <div class="flex space-x-4 mt-8">
        <button
          (click)="onAddToCart()"
          class="flex-1 bg-indigo-50 border border-indigo-600 text-indigo-600 font-semibold px-6 py-3 rounded-lg hover:bg-indigo-100 hover:border-indigo-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Add to bag
        </button>
        <button
          class="flex-1 bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-indigo-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Checkout
        </button>
      </div>

      <app-shipping-info />
    </div>
  `
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