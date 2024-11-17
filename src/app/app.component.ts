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
  
}