import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CartComponent } from './cart.component';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;

    // Set initial inputs
    component.cartItems = [
      { id: 1, productName: 'Product 1', size: 100, quantity: 1, price: 10 },
      { id: 2, productName: 'Product 2', size: 200, quantity: 2, price: 20 },
    ];
    component.cartItemCount = component.cartItems.length;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle cart visibility when cart icon is clicked', () => {
    const cartButton = fixture.debugElement.query(By.css('.cart-icon'));
    cartButton.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.cartVisible).toBeTrue();

    cartButton.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.cartVisible).toBeFalse();
  });

  it('should display cart items', () => {
    component.cartVisible = true;
    fixture.detectChanges();
    
    const cartItems = fixture.debugElement.queryAll(By.css('.cart-list ul li'));
    expect(cartItems.length).toBe(component.cartItems.length);
  });

  it('should emit quantityChanged event when increaseQuantity is called', () => {
    spyOn(component.quantityChanged, 'emit');
    component.increaseQuantity(0);
    expect(component.quantityChanged.emit).toHaveBeenCalledWith({ index: 0, delta: 1 });
  });

  it('should emit quantityChanged event when decreaseQuantity is called', () => {
    spyOn(component.quantityChanged, 'emit');
    component.decreaseQuantity(1);
    expect(component.quantityChanged.emit).toHaveBeenCalledWith({ index: 1, delta: -1 });
  });

  it('should emit itemRemoved event when removeItem is called', () => {
    spyOn(component.itemRemoved, 'emit');
    component.removeItem(0);
    expect(component.itemRemoved.emit).toHaveBeenCalledWith(0);
  });

  it('should emit productClicked event when viewProductDetails is called', () => {
    spyOn(component.productClicked, 'emit');
    component.viewProductDetails(1);
    expect(component.productClicked.emit).toHaveBeenCalledWith(1);
  });

  it('should call viewProductDetails when a product name is clicked', () => {
    spyOn(component, 'viewProductDetails');
    component.cartVisible = true;
    fixture.detectChanges();

    const productLink = fixture.debugElement.query(By.css('.product-name'));
    productLink.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(component.viewProductDetails).toHaveBeenCalledWith(component.cartItems[0].id);
  });
});
