import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from '../../shared/components/breadcrumb/breadcrumb.component';
import { CardComponent } from '../../shared/components/card/card.component';

@Component({
  selector: 'app-ecommerce',
  standalone: true,
  imports: [CommonModule, BreadcrumbComponent, CardComponent],
  template: `
    <app-breadcrumb pageTitle="eCommerce Dashboard"></app-breadcrumb>

    <div class="dashboard-grid">
      <!-- KPI Row -->
      <div class="kpi-grid">
        <app-card *ngFor="let kpi of kpis">
          <div class="kpi-content">
            <div class="kpi-icon" [style.background-color]="kpi.color + '15'">
              <i class="fa-solid" [class]="kpi.icon" [style.color]="kpi.color"></i>
            </div>
            <div class="kpi-info">
              <p class="kpi-label">{{ kpi.label }}</p>
              <h3 class="kpi-value">{{ kpi.value }}</h3>
              <p class="kpi-trend" [class.up]="kpi.trendUp">
                <i class="fa-solid" [class]="kpi.trendUp ? 'fa-arrow-up' : 'fa-arrow-down'"></i>
                {{ kpi.trend }}
              </p>
            </div>
          </div>
        </app-card>
      </div>

      <!-- Charts Area -->
      <div class="charts-row">
        <app-card title="Revenue Analytics" class="revenue-chart">
          <div class="chart-box">
             <!-- Mock Chart -->
             <div class="mock-bars">
                <div *ngFor="let b of [40, 60, 45, 80, 55, 90, 70]" class="bar" [style.height.%]="b"></div>
             </div>
          </div>
        </app-card>

        <app-card title="Sales by Source" class="source-chart">
          <div class="source-list">
             <div class="source-item" *ngFor="let s of sources">
                <span>{{ s.name }}</span>
                <div class="progress-bar">
                   <div class="fill" [style.width.%]="s.val"></div>
                </div>
                <span>{{ s.val }}%</span>
             </div>
          </div>
        </app-card>
      </div>

      <app-card title="Recent Orders" class="orders-table-card">
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let item of items">
                <td>{{ item.name }}</td>
                <td>{{ item.category }}</td>
                <td>{{ item.price }}</td>
                <td>
                   <span class="status-badge" [class]="item.status.toLowerCase()">{{ item.status }}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </app-card>
    </div>
  `,
  styles: [`
    .dashboard-grid { display: flex; flex-direction: column; gap: var(--sp-6); }
    
    .kpi-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: var(--sp-6);
    }

    .charts-row {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: var(--sp-6);
    }

    @media (max-width: 1200px) {
      .charts-row { grid-template-columns: 1fr; }
    }

    .kpi-content { display: flex; align-items: center; gap: 16px; }
    .kpi-icon { width: 48px; height: 48px; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 1.25rem; }
    .kpi-label { font-size: 0.875rem; color: var(--text-muted); }
    .kpi-value { font-size: 1.5rem; font-weight: 700; margin: 2px 0; }
    .kpi-trend { font-size: 0.75rem; color: var(--danger); font-weight: 600; }
    .kpi-trend.up { color: var(--success); }

    .chart-box { height: 260px; display: flex; align-items: stretch; padding: 20px 0; }
    .mock-bars { flex: 1; display: flex; align-items: flex-end; justify-content: space-around; gap: 10px; }
    .bar { width: 30px; background: var(--primary); border-radius: 4px 4px 0 0; }

    .source-list { display: flex; flex-direction: column; gap: 16px; padding: 10px 0; }
    .source-item { display: flex; align-items: center; gap: 12px; font-size: 0.875rem; }
    .progress-bar { flex: 1; height: 8px; background: var(--bg-main); border-radius: 4px; overflow: hidden; }
    .progress-bar .fill { height: 100%; background: var(--primary); border-radius: 4px; }

    .table-responsive { width: 100%; overflow-x: auto; }
    .table { width: 100%; border-collapse: collapse; min-width: 600px; }
    .table th { text-align: left; padding: 12px 16px; font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; border-bottom: 1px solid var(--border); }
    .table td { padding: 16px; border-bottom: 1px solid var(--border); font-size: 0.875rem; }
    .status-badge { padding: 4px 12px; border-radius: 99px; font-size: 0.75rem; font-weight: 700; }
    .status-badge.paid { background: #E1F9F0; color: #10B981; }
    .status-badge.overdue { background: #FEE2E2; color: #EF4444; }
    .status-badge.unpaid { background: #FEF9C3; color: #EAB308; }
  `]
})
export class DashboardComponent {
  kpis = [
    { label: 'Total Revenue', value: '$45,231', trend: '12.5%', trendUp: true, icon: 'fa-dollar-sign', color: '#3C50E0' },
    { label: 'Total Product', value: '2,450', trend: '3.1%', trendUp: true, icon: 'fa-box', color: '#10B981' },
    { label: 'Total User', value: '12,543', trend: '2.4%', trendUp: false, icon: 'fa-users', color: '#6366F1' },
    { label: 'Total Order', value: '1,240', trend: '8.2%', trendUp: true, icon: 'fa-cart-shopping', color: '#F59E0B' },
  ];

  sources = [
    { name: 'Direct', val: 65 },
    { name: 'Social', val: 24 },
    { name: 'Referral', val: 11 },
  ];

  items = [
    { name: 'Premium UI Kit', category: 'Software', price: '$120', status: 'Paid' },
    { name: 'SaaS Dashboard', category: 'Web App', price: '$450', status: 'Unpaid' },
    { name: 'Admin Template', category: 'Graphic', price: '$85', status: 'Overdue' },
    { name: 'Icons Pack', category: 'Asset', price: '$25', status: 'Paid' },
  ];
}
