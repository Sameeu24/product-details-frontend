import { Component, Input, Output, EventEmitter } from '@angular/core';
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
          <li *ngFor="let item of cartItems; let i = index">
            <a (click)="viewProductDetails(item.id)" class="product-name">
              {{ item.productName }}
            </a> - {{ item.size }} ML, {{ item.quantity }} x {{ item.price }}  ={{item.quantity*item.price}} <i class="fas fa-rupee-sign"></i>
            <div class="quantity-controls">
              <button (click)="decreaseQuantity(i)">-</button>
              <button (click)="increaseQuantity(i)">+</button>
            </div>
            <button (click)="removeItem(i)" class="delete-button">Delete</button>
          </li>
        </ul>
        <br>
        <div class="total-price"><strong>Total price : </strong> {{getTotalPrice()}}</div>
      </div>
    </div>
  `,
  standalone: true,
  imports: [CommonModule],
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
        z-index: 10;
      }
      .cart-icon {
        font-size: 24px;
        background: none;
        border: none;
        cursor: pointer;
      }
      .quantity-controls button {
        margin: 0 4px;
      }
      .delete-button {
        color: red;
        background: none;
        border: none;
        cursor: pointer;
      }
      .product-name {
        color: blue;
        cursor: pointer;
        text-decoration: underline;
      }
    `,
  ],
})
export class CartComponent {
  @Input() cartItems: any[] = [];
  @Input() cartItemCount: number = 0;
  @Output() itemRemoved = new EventEmitter<number>();
  @Output() quantityChanged = new EventEmitter<{ index: number, delta: number }>();
  @Output() productClicked = new EventEmitter<number>();

  cartVisible = false;

  toggleCart() {
    this.cartVisible = !this.cartVisible;
  }

  increaseQuantity(index: number) {
    this.quantityChanged.emit({ index, delta: 1 });
  }

  decreaseQuantity(index: number) {
    this.quantityChanged.emit({ index, delta: -1 });
  }

  removeItem(index: number) {
    this.itemRemoved.emit(index);
  }

  viewProductDetails(productId: number) {
    this.productClicked.emit(productId);
  }


  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + (item.quantity * item.price), 0);
  }
}
