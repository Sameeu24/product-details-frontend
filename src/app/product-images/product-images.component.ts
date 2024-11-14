import { Component, Input, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-images',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="space-y-4">
      <!-- Main Image with Zoom Effect -->
      <div
        class="relative bg-white rounded-lg overflow-hidden"
        (mousemove)="onMouseMove($event)"
        (mouseleave)="onMouseLeave()"
      >
        <img
          [src]="mainImage"
          class="w-full h-full object-center object-cover"
          [ngClass]="{ 'scale-150': isZoomed }"
          [ngStyle]="zoomPosition"
          alt="Product image"
        />
      </div>
      
      <!-- Thumbnails -->
      <div class="grid grid-cols-4 gap-4">
        <img
          *ngFor="let img of thumbnails"
          [src]="img"
          class="rounded-lg cursor-pointer hover:opacity-75"
          (click)="setMainImage(img)"
          alt="Product thumbnail"
        />
      </div>
    </div>
  `,
  styles: [
    `
      /* Zoomed image styling */
      .relative img {
        transition: transform 0.3s ease, left 0.1s, top 0.1s;
      }
      .scale-150 {
        transform: scale(1.5); /* Adjust this value for desired zoom level */
      }
    `
  ]
})
export class ProductImagesComponent {
  @Input() mainImage!: string;
  @Input() thumbnails: string[] = [];
  isZoomed = false;
  zoomPosition = {};

  setMainImage(image: string) {
    this.mainImage = image;
  }

  onMouseMove(event: MouseEvent) {
    this.isZoomed = true;

    // Calculate position for zoom effect
    const { offsetX, offsetY, currentTarget } = event;
    const { offsetWidth, offsetHeight } = currentTarget as HTMLElement;

    const xPercent = (offsetX / offsetWidth) * 100;
    const yPercent = (offsetY / offsetHeight) * 100;

    // Update zoomPosition to keep the image centered around the cursor
    this.zoomPosition = {
      transformOrigin: `${xPercent}% ${yPercent}%`
    };
  }

  onMouseLeave() {
    this.isZoomed = false;
    this.zoomPosition = {};
  }
}
