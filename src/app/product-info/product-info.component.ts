import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product } from '../models/product.model';
import { ShippingInfoComponent } from "../shipping-info/shipping-info.component";
import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { OrderServiceService } from '../services/order-service.service';

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
  showOrderModal = false; // Controls modal visibility
  userId!: number; // Holds the entered user ID

  constructor(private http: HttpClient, private router: Router,private orderService:OrderServiceService) {}

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
  onPlaceOrder() {
    if (this.userId) {
      const order = {
        userId: this.userId,
        status: 'PROCESSING', // Default order status
        totalAmount: this.product.price * this.quantity,
        items: [
          {
            productId: 1, // Replace with real product ID if available
            productName: this.product.name,
            quantity: this.quantity,
            price: this.product.price,
          },
        ],
      };

      // Send POST request
      this.orderService.createOrder(order).subscribe({
        next: (response) => {
          console.log('Order placed successfully:', response);
          this.closeOrderModal();
          this.router.navigate(['/order-confirmation'], {
            state: { orderDetails: response },
          });
        },
        error: (error) => console.error('Error placing order:', error),
      });
    }
  }

  openOrderModal() {
    this.showOrderModal = true;
  }

  closeOrderModal() {
    this.showOrderModal = false;
  }

  
}