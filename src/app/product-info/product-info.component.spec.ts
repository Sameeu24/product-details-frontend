import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductInfoComponent } from './product-info.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

describe('ProductInfoComponent', () => {
  let component: ProductInfoComponent;
  let fixture: ComponentFixture<ProductInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ProductInfoComponent,
        HttpClientTestingModule,
        RouterTestingModule,
        FormsModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductInfoComponent);
    component = fixture.componentInstance;
    
    // Add test product
    component.product = {
      name: 'Test Product',
      description: 'Test Description',
      price: 10,
      originalPrice: 20,
      mainImage: 'test.jpg',
      thumbnails: ['thumb1.jpg'],
      reviews: 10,
      sold: 20,
      rating: 4
    };
    
    fixture.detectChanges();
  });

  // Basic creation test
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Test quantity starts at 1
  it('should start with quantity of 1', () => {
    expect(component.quantity).toBe(1);
  });

  // Test increment button
  it('should increase quantity when plus button is clicked', () => {
    component.incrementQuantity();
    expect(component.quantity).toBe(2);
  });

  // Test decrement button
  it('should decrease quantity when minus button is clicked', () => {
    component.quantity = 2;
    component.decrementQuantity();
    expect(component.quantity).toBe(1);
  });
});