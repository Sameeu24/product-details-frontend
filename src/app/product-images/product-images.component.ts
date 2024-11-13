import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-images',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="space-y-4">
      <div class="aspect-w-1 aspect-h-1 bg-white rounded-lg overflow-hidden">
        <img
          [src]="mainImage"
          class="w-full h-full object-center object-cover"
          alt="Product image"
        />
      </div>
      <div class="grid grid-cols-4 gap-4">
        <img
          *ngFor="let img of thumbnails"
          [src]="img"
          class="rounded-lg cursor-pointer hover:opacity-75"
          alt="Product thumbnail"
        />
      </div>
    </div>
  `
})
export class ProductImagesComponent {
  @Input() mainImage!: string;
  @Input() thumbnails: string[] = [];
}