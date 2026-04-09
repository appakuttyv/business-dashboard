import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';
import { CardComponent } from '../../../shared/components/card/card.component';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [CommonModule, BreadcrumbComponent, CardComponent],
  template: `
    <app-breadcrumb pageTitle="Buttons"></app-breadcrumb>

    <div class="buttons-grid">
      <!-- Normal Buttons -->
      <app-card title="Normal Buttons">
        <div class="btn-group">
          <button class="btn btn-primary">Primary Button</button>
          <button class="btn btn-secondary">Secondary Button</button>
          <button class="btn btn-dark">Dark Button</button>
          <button class="btn btn-outline">Outline Button</button>
        </div>
      </app-card>

      <!-- Rounded Buttons -->
      <app-card title="Rounded Buttons">
        <div class="btn-group">
          <button class="btn btn-primary btn-rounded">Primary</button>
          <button class="btn btn-secondary btn-rounded">Secondary</button>
          <button class="btn btn-dark btn-rounded">Dark</button>
          <button class="btn btn-outline btn-rounded">Outline</button>
        </div>
      </app-card>

      <!-- With Icon Buttons -->
      <app-card title="Buttons with Icon">
        <div class="btn-group">
           <button class="btn btn-primary"><i class="fa-solid fa-download"></i> Download</button>
           <button class="btn btn-outline"><i class="fa-solid fa-plus"></i> Add Item</button>
           <button class="btn btn-dark"><i class="fa-solid fa-trash"></i> Delete</button>
        </div>
      </app-card>

      <!-- Simple Buttons -->
      <app-card title="Button Sizes">
         <div class="btn-group items-center">
            <button class="btn btn-primary btn-sm">Small</button>
            <button class="btn btn-primary">Default</button>
            <button class="btn btn-primary btn-lg">Large Button</button>
         </div>
      </app-card>
    </div>
  `,
  styles: [`
    .buttons-grid { display: grid; grid-template-columns: 1fr 1fr; gap: var(--sp-8); }
    @media (max-width: 1024px) { .buttons-grid { grid-template-columns: 1fr; } }

    .btn-group { display: flex; flex-wrap: wrap; gap: 16px; align-items: flex-start; }
    .items-center { align-items: center; }

    .btn { padding: 10px 24px; border-radius: 6px; font-weight: 600; font-size: 0.875rem; cursor: pointer; border: 1px solid transparent; transition: var(--transition); display: flex; align-items: center; gap: 8px; }
    .btn-rounded { border-radius: 99px; }
    
    .btn-primary { background: var(--primary); color: white; }
    .btn-primary:hover { background: var(--primary-hover); }
    
    .btn-secondary { background: #10B981; color: white; }
    .btn-secondary:hover { background: #059669; }

    .btn-dark { background: #1C2434; color: white; }
    .btn-dark:hover { background: #2D3A4F; }

    .btn-outline { background: transparent; border-color: var(--primary); color: var(--primary); }
    .btn-outline:hover { background: var(--primary); color: white; }

    .btn-sm { padding: 6px 14px; font-size: 0.75rem; }
    .btn-lg { padding: 14px 32px; font-size: 1rem; }
  `]
})
export class ButtonsComponent {}
