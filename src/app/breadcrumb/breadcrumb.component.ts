import { Component } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [],
  template: `
    <nav class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto px-4 py-3">
        <div class="flex justify-between items-center">
          <div class="flex space-x-4 text-gray-500">
            <a href="#" class="hover:text-gray-700">Home</a>
            <span>/</span>
            <a href="#" class="hover:text-gray-700">Shop</a>
            <span>/</span>
            <a href="#" class="hover:text-gray-700">Products</a>
            <span>/</span>
            <span class="text-gray-700">Detail</span>
          </div>
        </div>
      </div>
    </nav>
  `,
  styleUrl: './breadcrumb.component.css'
})
export class BreadcrumbComponent {

}
