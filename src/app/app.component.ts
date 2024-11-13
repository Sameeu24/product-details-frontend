import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from './models/product.model';
import { CartItem } from './models/cart-item.model';
import { ProductInfoComponent } from './product-info/product-info.component';
import { CartComponent } from './cart/cart.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { ShippingInfoComponent } from './shipping-info/shipping-info.component';
import { ProductImagesComponent } from './product-images/product-images.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ProductInfoComponent,
    CartComponent,
    BreadcrumbComponent,
    DetailsPageComponent,
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
    sizes: ['30', '50', '100']
  };

  cart: CartItem[] = [];

  // Getter to calculate cart item count
  get cartItemCount(): number {
    return this.cart.length;
  }

  addToCart(event: {quantity: number; size: string}) {
    const item: CartItem = {
      id: 1,
      productName: this.product.name,
      quantity: event.quantity,
      size: event.size,
      price: this.product.price
    };
    
    this.cart.push(item);
    alert('Product added to cart!');
  }
}
