import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  template: `
    <nav class="breadcrumb">
      <ul class="flex space-x-2">
        <li *ngFor="let item of breadcrumbs; let last = last">
          <span *ngIf="!last" class="text-blue-600 cursor-pointer">{{ item }}</span>
          <span *ngIf="last" class="text-gray-600">{{ item }}</span>
          <span *ngIf="!last" class="text-gray-600">/</span>
        </li>
      </ul>
    </nav>
  `,
  styles: [
    `
      .breadcrumb {
        font-size: 1rem;
        padding: 8px 0;
        display: flex;
        justify-content: flex-start;
        align-items: center;
      }
    `
  ]
})
export class BreadcrumbComponent {
  @Input() breadcrumbs: string[] = [];
}
