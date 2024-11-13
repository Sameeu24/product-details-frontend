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
    <div class="space-y-6">
      <div class="flex items-center">
        <span class="px-3 py-1 text-sm text-white bg-pink-500 rounded-full">Best Seller</span>
      </div>
      
      <h1 class="text-3xl font-bold">{{ product.name }}</h1>
      <p class="text-gray-600">{{ product.description }}</p>

      <div class="flex items-center space-x-4">
        <span class="text-3xl font-bold text-indigo-600">\${{ product.price }}</span>
        <span class="text-lg text-gray-500 line-through">\${{ product.originalPrice }}</span>
      </div>

      <div class="flex items-center space-x-2">
        <div class="star-rating flex">
          <span *ngFor="let star of [1,2,3,4,5]">⭐</span>
        </div>
        <span class="text-gray-600">{{ product.reviews }} reviews</span>
        <span class="text-gray-400">•</span>
        <span class="text-gray-600">{{ product.sold }} sold</span>
      </div>

      <div class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700">Choose size</label>
          <select
            [(ngModel)]="selectedSize"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option *ngFor="let size of product.sizes" [value]="size">{{ size }} ML</option>
          </select>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700">Quantity</label>
          <div class="flex items-center space-x-3 mt-1">
            <button
              (click)="decrementQuantity()"
              class="rounded-md bg-gray-100 p-2 hover:bg-gray-200"
            >
              -
            </button>
            <span class="text-lg font-medium">{{ quantity }}</span>
            <button
              (click)="incrementQuantity()"
              class="rounded-md bg-gray-100 p-2 hover:bg-gray-200"
            >
              +
            </button>
          </div>
        </div>
      </div>

      <div class="flex space-x-4">
        <button
          (click)="onAddToCart()"
          class="flex-1 bg-white border border-indigo-600 text-indigo-600 px-6 py-3 rounded-md hover:bg-indigo-50"
        >
          Add to bag
        </button>
        <button
          class="flex-1 bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700"
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
  @Output() addToCart = new EventEmitter<{quantity: number; size: string}>();

  quantity = 1;
  selectedSize = '50';

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
      quantity: this.quantity,
      size: this.selectedSize
    });
  }
}