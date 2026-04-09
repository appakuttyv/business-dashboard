import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from '../../shared/components/breadcrumb/breadcrumb.component';
import { CardComponent } from '../../shared/components/card/card.component';

@Component({
  selector: 'app-invoices',
  standalone: true,
  imports: [CommonModule, BreadcrumbComponent, CardComponent],
  template: `
    <app-breadcrumb pageTitle="Invoices"></app-breadcrumb>

    <div class="invoices-wrapper">
       <!-- 1. Stats Row -->
       <div class="stats-grid">
          <app-card *ngFor="let s of stats">
             <div class="stat-invoice">
                <p class="label">{{ s.label }}</p>
                <h3 class="val">{{ s.value }}</h3>
                <span class="badge" [style.background]="s.color + '20'" [style.color]="s.color">{{ s.sub }}</span>
             </div>
          </app-card>
       </div>

       <!-- 2. Main Invoice History -->
       <app-card title="Invoice History" class="mt-8">
          <table class="invoice-table">
             <thead>
                <tr>
                   <th>Invoice ID</th>
                   <th>Client</th>
                   <th>Date</th>
                   <th>Amount</th>
                   <th>Status</th>
                   <th class="text-right">Action</th>
                </tr>
             </thead>
             <tbody>
                <tr *ngFor="let inv of invoices">
                   <td><span class="id">#{{ inv.id }}</span></td>
                   <td>
                      <div class="client">
                         <img [src]="inv.avatar" alt="avatar">
                         <span>{{ inv.client }}</span>
                      </div>
                   </td>
                   <td>{{ inv.date }}</td>
                   <td><strong>{{ inv.amount }}</strong></td>
                   <td>
                      <span class="status-badge" [class]="inv.status.toLowerCase()">{{ inv.status }}</span>
                   </td>
                   <td class="text-right">
                      <div class="actions">
                         <button title="View"><i class="fa-regular fa-eye"></i></button>
                         <button title="Download"><i class="fa-solid fa-download"></i></button>
                      </div>
                   </td>
                </tr>
             </tbody>
          </table>
       </app-card>
    </div>
  `,
  styles: [`
    .invoices-wrapper { display: flex; flex-direction: column; gap: var(--sp-6); }
    
    .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: var(--sp-6); }
    .stat-invoice { display: flex; flex-direction: column; gap: 8px; }
    .stat-invoice .label { font-size: 0.875rem; color: var(--text-muted); }
    .stat-invoice .val { font-size: 1.5rem; font-weight: 700; }
    .stat-invoice .badge { align-self: flex-start; padding: 2px 8px; border-radius: 4px; font-size: 0.75rem; font-weight: 700; }

    .invoice-table { width: 100%; border-collapse: collapse; }
    .invoice-table th { text-align: left; padding: 12px 16px; border-bottom: 1px solid var(--border); font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; }
    .invoice-table td { padding: 16px; border-bottom: 1px solid var(--border); font-size: 0.875rem; }
    
    .id { font-weight: 700; color: var(--primary); }
    .client { display: flex; align-items: center; gap: 10px; font-weight: 600; }
    .client img { width: 32px; height: 32px; border-radius: 6px; }

    .status-badge { padding: 4px 12px; border-radius: 99px; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; }
    .status-badge.paid { background: #E1F9F0; color: #10B981; }
    .status-badge.pending { background: #FEF9C3; color: #EAB308; }
    .status-badge.unpaid { background: #FEE2E2; color: #EF4444; }

    .actions { display: flex; gap: 8px; justify-content: flex-end; }
    .actions button { width: 32px; height: 32px; border: 1px solid var(--border); background: transparent; border-radius: 6px; color: var(--text-muted); cursor: pointer; transition: var(--transition); }
    .actions button:hover { background: var(--primary); color: white; border-color: var(--primary); }

    .mt-8 { margin-top: var(--sp-8); }
    .text-right { text-align: right; }
  `]
})
export class InvoicesComponent {
  stats = [
    { label: 'Total Invoices', value: '450', sub: '+12.5%', color: '#3C50E0' },
    { label: 'Paid Invoices', value: '$34,120', sub: '85%', color: '#10B981' },
    { label: 'Pending Payment', value: '$12,450', sub: '12%', color: '#F59E0B' },
    { label: 'Overdue', value: '$2,100', sub: '3%', color: '#EF4444' },
  ];

  invoices = [
    { id: '45102', client: 'Appakutty V', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Appakutty', date: 'Oct 09, 2026', amount: '$450.00', status: 'Paid' },
    { id: '45101', client: 'Sara Martin', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sara', date: 'Oct 08, 2026', amount: '$1,200.00', status: 'Pending' },
    { id: '45100', client: 'John Doe', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John', date: 'Oct 07, 2026', amount: '$250.00', status: 'Unpaid' },
    { id: '45099', client: 'Vortex Corp', avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=Vortex', date: 'Oct 06, 2026', amount: '$4,120.00', status: 'Paid' },
  ];
}
