import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  template: `
    <div>
      <!-- Font Awesome Cart Icon with Item Count -->
      <button (click)="toggleCart()" class="cart-icon">
        <i class="fas fa-shopping-cart"></i> ({{ cartItemCount }})
      </button>

      <!-- Cart Items List -->
      <div *ngIf="cartVisible" class="cart-list">
        <h3>Your Cart</h3>
        <ul>
          <li *ngFor="let item of cartItems">
            <strong>{{ item.productName }}</strong> - {{ item.size }} ML 
            <br> {{ item.quantity }} x {{ item.price }}
          </li>
        </ul>
      </div>
    </div>
  `,
  standalone: true,
  imports: [CommonModule], // Add CommonModule here
  styles: [
    `
      .cart-list {
        background-color: white;
        border: 1px solid #ddd;
        padding: 16px;
        position: absolute;
        right: 20px;
        top: 60px;
        width: 300px;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
      }
      .cart-icon {
        font-size: 24px;
        background: none;
        border: none;
        cursor: pointer;
      }
    `,
  ],
})
export class CartComponent {
  @Input() cartItems: any[] = [];
  @Input() cartItemCount: number = 0;

  cartVisible = false;

  toggleCart() {
    this.cartVisible = !this.cartVisible;
  }
}
