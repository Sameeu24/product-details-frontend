import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { ProductImagesComponent } from './product-images/product-images.component';
import { By } from '@angular/platform-browser';
import { CartItem } from './models/cart-item.model';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, CartComponent, ProductInfoComponent, ProductImagesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate cart item count correctly', () => {
    component.cart = [
      { id: 1, productName: 'Product 1', quantity: 2, price: 10 },
      { id: 2, productName: 'Product 2', quantity: 3, price: 20 },
    ];
    expect(component.cartItemCount).toBe(5);
  });

  it('should add product to cart', () => {
    const initialCartLength = component.cart.length;

    const addToCartEvent = { quantity: 2 };
    component.addToCart(addToCartEvent);

    expect(component.cart.length).toBe(initialCartLength + 1);
    expect(component.cart[initialCartLength].productName).toBe(component.product.name);
    expect(component.cart[initialCartLength].quantity).toBe(addToCartEvent.quantity);
    expect(component.cart[initialCartLength].price).toBe(component.product.price);
  });

  it('should remove item from cart', () => {
    component.cart = [
      { id: 1, productName: 'Product 1', quantity: 1, price: 10 },
      { id: 2, productName: 'Product 2', quantity: 2, price: 20 },
    ];

    component.removeCartItem(0);
    expect(component.cart.length).toBe(1);
    expect(component.cart[0].productName).toBe('Product 2');
  });

  it('should increase item quantity in the cart', () => {
    component.cart = [
      { id: 1, productName: 'Product 1', quantity: 1, price: 10 },
    ];

    component.changeItemQuantity({ index: 0, delta: 1 });
    expect(component.cart[0].quantity).toBe(2);
  });

  it('should decrease item quantity in the cart', () => {
    component.cart = [
      { id: 1, productName: 'Product 1', quantity: 2, price: 10 },
    ];

    component.changeItemQuantity({ index: 0, delta: -1 });
    expect(component.cart[0].quantity).toBe(1);
  });

  it('should remove item from cart when quantity becomes zero or less', () => {
    component.cart = [
      { id: 1, productName: 'Product 1', quantity: 1, price: 10 },
    ];

    component.changeItemQuantity({ index: 0, delta: -1 });
    expect(component.cart.length).toBe(0);
  });

  it('should log a message when navigating to product details', () => {
    spyOn(console, 'log');
    component.navigateToProductDetails(1);
    expect(console.log).toHaveBeenCalledWith('Navigating to product with ID: 1');
  });
});
