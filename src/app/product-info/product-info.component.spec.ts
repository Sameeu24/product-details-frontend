import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductInfoComponent } from './product-info.component';
import { Product } from '../models/product.model'; // Adjust path as necessary

describe('ProductInfoComponent', () => {
  let component: ProductInfoComponent;
  let fixture: ComponentFixture<ProductInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
     imports: [ProductInfoComponent],  
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductInfoComponent);
    component = fixture.componentInstance;

    // Mock product data
    component.product = {
      name: 'Test Product',
      description: 'This is a test product.',
      price: 50,
      originalPrice: 60,
      mainImage: '/assets/test-image.jpg',
      thumbnails: ['/assets/test-thumbnail1.jpg', '/assets/test-thumbnail2.jpg'],
      reviews: 100,
      sold: 200,
      rating: 4.5,
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
