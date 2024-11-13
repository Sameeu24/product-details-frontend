import { Component } from '@angular/core';

@Component({
  selector: 'app-shipping-info',
  standalone: true,
  template: `
    <div class="space-y-2 text-sm text-gray-600">
      <div class="flex items-center space-x-2">
        <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
        <span>Free shipping on orders over \$49USD</span>
      </div>
      <div class="flex items-center space-x-2">
        <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
        <span>Free + easy returns</span>
      </div>
    </div>
  `
})
export class ShippingInfoComponent {}