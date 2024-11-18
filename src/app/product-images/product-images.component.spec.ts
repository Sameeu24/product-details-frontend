import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductImagesComponent } from './product-images.component';

describe('ProductImagesComponent', () => {
  let component: ProductImagesComponent;
  let fixture: ComponentFixture<ProductImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductImagesComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductImagesComponent);
    component = fixture.componentInstance;
    
    component.mainImage = 'test-main.jpg';
    component.thumbnails = ['thumb1.jpg', 'thumb2.jpg'];
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change main image when thumbnail is clicked', () => {
    component.setMainImage('thumb1.jpg');
    expect(component.mainImage).toBe('thumb1.jpg');
  });

  it('should handle mouse leave', () => {
    component.onMouseLeave();
    expect(component.isZoomed).toBeFalse();
    expect(component.zoomPosition).toEqual({});
  });

  it('should handle mouse move', () => {
    const mockEvent = new MouseEvent('mousemove', {
      clientX: 100,
      clientY: 100
    });
    
    Object.defineProperties(mockEvent, {
      offsetX: { get: () => 100 },
      offsetY: { get: () => 100 },
      currentTarget: { 
        get: () => ({ 
          offsetWidth: 200, 
          offsetHeight: 200 
        })
      }
    });

    component.onMouseMove(mockEvent);
    expect(component.isZoomed).toBeTrue();
    expect(component.zoomPosition).toBeDefined();
  });
});