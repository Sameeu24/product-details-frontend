import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface OrderItem {
  productId: number;
  productName: string;
  quantity: number;
  price: number;
}

export interface OrderDTO {
  userId: number;
  status: string; // Example: 'PROCESSING', 'SHIPPED'
  totalAmount: number;
  items: OrderItem[];
}

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {
  private baseUrl="http://localhost:9000/api/v1/orders"

  constructor(private http:HttpClient) { }

  createOrder(order: OrderDTO): Observable<OrderDTO> {
    return this.http.post<OrderDTO>(this.baseUrl, order);
  }
}
