import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { OrderServiceService, OrderDTO } from './order-service.service';

describe('OrderServiceService', () => {
  let service: OrderServiceService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  const mockOrder: OrderDTO = {
    userId: 1,
    status: 'PROCESSING',
    totalAmount: 100.5,
    items: [
      { productId: 101, productName: 'Product A', quantity: 2, price: 25.0 },
      { productId: 102, productName: 'Product B', quantity: 1, price: 50.5 },
    ],
  };

  beforeEach(() => {
    // Create a spy object for HttpClient
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);

    TestBed.configureTestingModule({
      providers: [
        OrderServiceService,
        { provide: HttpClient, useValue: httpClientSpy }, // Inject the spy
      ],
    });

    service = TestBed.inject(OrderServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send a POST request to create an order', (done: DoneFn) => {
    // Mock the HttpClient's post method
    httpClientSpy.post.and.returnValue(of(mockOrder));

    service.createOrder(mockOrder).subscribe((order) => {
      expect(order).toEqual(mockOrder);
      done();
    });

    // Ensure the HttpClient post method was called with correct parameters
    expect(httpClientSpy.post).toHaveBeenCalledWith(
      'http://localhost:9000/api/v1/orders',
      mockOrder
    );
  });
});
