import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductDetailsComponent } from './product-details.component';
import { CartComponent } from '../cart/cart.component';
import { ProductImagesComponent } from '../product-images/product-images.component';
import { ProductInfoComponent } from '../product-info/product-info.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

describe('ProductDetailsComponent', () => {
  let component: ProductDetailsComponent;
  let fixture: ComponentFixture<ProductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ProductDetailsComponent,
        CartComponent,
        ProductImagesComponent,
        ProductInfoComponent,
        HttpClientTestingModule,
        RouterTestingModule,
        FormsModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with empty cart', () => {
    expect(component.cart.length).toBe(0);
    expect(component.cartItemCount).toBe(0);
  });

  it('should add item to cart', () => {
    component.addToCart({ quantity: 2 });
    expect(component.cart.length).toBe(1);
    expect(component.cart[0].quantity).toBe(2);
    expect(component.cart[0].productName).toBe('Premium CBD Oil');
  });

  it('should remove item from cart', () => {
    component.addToCart({ quantity: 1 });
    expect(component.cart.length).toBe(1);
    
    component.removeCartItem(0);
    expect(component.cart.length).toBe(0);
  });

  it('should update item quantity', () => {
    component.addToCart({ quantity: 1 });
    component.changeItemQuantity({ index: 0, delta: 1 });
    expect(component.cart[0].quantity).toBe(2);
  });

  it('should remove item when quantity becomes 0', () => {
    component.addToCart({ quantity: 1 });
    component.changeItemQuantity({ index: 0, delta: -1 });
    expect(component.cart.length).toBe(0);
  });

  it('should calculate cart item count correctly', () => {
    component.addToCart({ quantity: 2 });
    component.addToCart({ quantity: 3 });
    expect(component.cartItemCount).toBe(5);
  });
});