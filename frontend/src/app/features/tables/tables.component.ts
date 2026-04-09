import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from '../../shared/components/breadcrumb/breadcrumb.component';
import { CardComponent } from '../../shared/components/card/card.component';

@Component({
  selector: 'app-tables',
  standalone: true,
  imports: [CommonModule, BreadcrumbComponent, CardComponent],
  template: `
    <app-breadcrumb pageTitle="Tables"></app-breadcrumb>

    <div class="tables-wrapper">
      <!-- Table One: Top Products -->
      <app-card title="Top Products" class="mb-8">
        <div class="table-scroll">
          <table class="tail-table">
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Sold</th>
                <th>Profit</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let p of products">
                <td>
                  <div class="product-info">
                    <img [src]="'https://api.dicebear.com/7.x/identicon/svg?seed=' + p.name" alt="p">
                    <span>{{ p.name }}</span>
                  </div>
                </td>
                <td>{{ p.category }}</td>
                <td>{{ p.price }}</td>
                <td>{{ p.sold }}</td>
                <td class="text-primary">{{ p.profit }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </app-card>

      <!-- Table Two: Package Payments -->
      <app-card title="Package Payments">
        <div class="table-scroll">
          <table class="tail-table alternate">
            <thead>
              <tr>
                <th>Package</th>
                <th>Invoice Date</th>
                <th>Status</th>
                <th class="text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let pkg of packages">
                <td>
                  <p class="pkg-name">{{ pkg.name }}</p>
                  <p class="pkg-price">{{ pkg.price }}/mo</p>
                </td>
                <td class="text-muted">{{ pkg.date }}</td>
                <td>
                  <span class="badge" [ngClass]="pkg.statusClass">{{ pkg.status }}</span>
                </td>
                <td class="text-right">
                  <div class="actions">
                    <button class="action-btn"><i class="fa-regular fa-eye"></i></button>
                    <button class="action-btn delete"><i class="fa-regular fa-trash-can"></i></button>
                    <button class="action-btn"><i class="fa-solid fa-download"></i></button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </app-card>
    </div>
  `,
  styles: [`
    .tables-wrapper { display: flex; flex-direction: column; gap: var(--sp-8); }
    .table-scroll { overflow-x: auto; }
    
    .tail-table { width: 100%; border-collapse: collapse; min-width: 600px; }
    .tail-table th { background: #F7F9FC; padding: 12px 16px; font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; text-align: left; }
    .dark .tail-table th { background: #313D4A; }
    .tail-table td { padding: 16px; border-bottom: 1px solid var(--border); font-size: 0.875rem; }
    
    .tail-table.alternate tr:nth-child(even) td { background: var(--bg-main); opacity: 0.8; }

    .product-info { display: flex; align-items: center; gap: 12px; font-weight: 500; }
    .product-info img { width: 40px; height: 40px; border-radius: 8px; background: var(--bg-main); }
    
    .pkg-name { font-weight: 600; color: var(--text-main); }
    .pkg-price { font-size: 0.75rem; color: var(--text-muted); }
    
    .badge { padding: 4px 10px; border-radius: 99px; font-size: 0.75rem; font-weight: 600; }
    .bg-success { background: #E1F9F0; color: #10B981; }
    .bg-warning { background: #FEF9C3; color: #EAB308; }
    .bg-danger { background: #FEE2E2; color: #EF4444; }

    .actions { display: flex; justify-content: flex-end; gap: 12px; }
    .action-btn { background: transparent; border: none; color: var(--text-muted); cursor: pointer; font-size: 1rem; transition: var(--transition); }
    .action-btn:hover { color: var(--primary); }
    .action-btn.delete:hover { color: var(--danger); }
    .text-primary { color: var(--primary); font-weight: 600; }
  `]
})
export class TablesComponent {
  products = [
    { name: 'Apple Watch Series 7', category: 'Electronics', price: '$269', sold: '22', profit: '$45' },
    { name: 'Macbook Pro M1', category: 'Electronics', price: '$546', sold: '34', profit: '$125' },
    { name: 'Dell XPS 15', category: 'Electronics', price: '$443', sold: '64', profit: '$247' },
    { name: 'HP Envy 360', category: 'Electronics', price: '$499', sold: '72', profit: '$103' },
  ];

  packages = [
    { name: 'Free Package', price: '$0.00', date: 'Jan 13, 2023', status: 'Paid', statusClass: 'bg-success' },
    { name: 'Standard Package', price: '$59.00', date: 'Jan 13, 2023', status: 'Paid', statusClass: 'bg-success' },
    { name: 'Business Package', price: '$99.00', date: 'Jan 13, 2023', status: 'Unpaid', statusClass: 'bg-danger' },
    { name: 'Enterprise Package', price: '$299.00', date: 'Jan 13, 2023', status: 'Pending', statusClass: 'bg-warning' },
  ];
}
