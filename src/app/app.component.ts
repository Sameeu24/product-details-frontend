import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from './models/product.model';
import { CartItem } from './models/cart-item.model';
import { ProductInfoComponent } from './product-info/product-info.component';
import { CartComponent } from './cart/cart.component';
import { ShippingInfoComponent } from './shipping-info/shipping-info.component';
import { ProductImagesComponent } from './product-images/product-images.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ProductInfoComponent,
    CartComponent,
    ShippingInfoComponent,
    ProductImagesComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  product: Product = {
    name: 'Premium CBD Oil',
    description: 'High-quality CBD oil for natural wellness and balance.',
    price: 32,
    originalPrice: 42,
    mainImage: '/main-image.png',
    thumbnails: [
      '/thumbnail1.png',
      '/thumbnail2.png',
      '/thumbnail3.png',
      '/thumbnail4.png'
    ],
    reviews: 368,
    sold: 823,
    rating: 4.5,
    
  };

  cart: CartItem[] = [];

  // Getter to calculate cart item count
  get cartItemCount(): number {
    return this.cart.reduce((count, item) => count + item.quantity, 0);
  }

  addToCart(event: { quantity: number;  }) {
    const item: CartItem = {
      id: 1,
      productName: this.product.name,
      quantity: event.quantity,
      price: this.product.price
    };
    
    this.cart.push(item);
    alert('Product added to cart!');
  }

  // Method to handle item removal
  removeCartItem(index: number) {
    this.cart.splice(index, 1);
  }

  // Method to handle quantity changes
  changeItemQuantity({ index, delta }: { index: number; delta: number }) {
    const item = this.cart[index];
    if (item) {
      item.quantity += delta;
      if (item.quantity <= 0) {
        this.cart.splice(index, 1); // Remove item if quantity is 0 or less
      }
    }
  }

  // Navigate to product details page on click
  navigateToProductDetails(productId: number) {
    // Placeholder for navigation
    console.log(`Navigating to product with ID: ${productId}`);
  }
}