import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from '../../shared/components/breadcrumb/breadcrumb.component';
import { CardComponent } from '../../shared/components/card/card.component';

interface StatCard {
  title: string;
  value: string;
  trend: string;
  icon: string;
  color: string;
  increased: boolean;
}

@Component({
  selector: 'app-ecommerce-dashboard',
  standalone: true,
  imports: [CommonModule, BreadcrumbComponent, CardComponent],
  template: `
    <app-breadcrumb pageTitle="eCommerce"></app-breadcrumb>

    <div class="dashboard-wrapper">
      <!-- 1. Stats Grid -->
      <div class="stats-grid">
        <app-card *ngFor="let stat of stats" [customClass]="'stat-item-card'">
          <div class="stat-inner">
            <div class="stat-icon" [style.background-color]="stat.color + '10'" [style.color]="stat.color">
              <i class="fa-solid" [ngClass]="stat.icon"></i>
            </div>
            <div class="stat-info">
              <h4 class="stat-value">{{ stat.value }}</h4>
              <p class="stat-title">{{ stat.title }}</p>
            </div>
            <div class="stat-trend" [class.up]="stat.increased" [class.down]="!stat.increased">
              <span>{{ stat.trend }}</span>
              <i class="fa-solid" [ngClass]="stat.increased ? 'fa-arrow-up' : 'fa-arrow-down'"></i>
            </div>
          </div>
        </app-card>
      </div>

      <!-- 2. Charts Section -->
      <div class="charts-row">
        <app-card title="Revenue Analysis" class="primary-chart">
          <div class="chart-mock">
            <div class="chart-header">
              <div class="legend">
                <span class="dot p"></span> Total Revenue
                <span class="dot s"></span> Total Sales
              </div>
            </div>
            <div class="chart-visual">
               <div *ngFor="let h of [30, 50, 40, 70, 60, 90, 80, 100, 95, 75, 85, 90]" class="bar-pair">
                  <div class="bar p" [style.height.%]="h"></div>
                  <div class="bar s" [style.height.%]="h * 0.7"></div>
               </div>
            </div>
          </div>
        </app-card>

        <app-card title="Profit Status" class="secondary-chart">
           <div class="pie-mock">
              <div class="circle">
                 <div class="inner"></div>
              </div>
              <div class="pie-legend">
                 <p><span class="dot p"></span> Desktop <span>65%</span></p>
                 <p><span class="dot s"></span> Mobile <span>34%</span></p>
                 <p><span class="dot t"></span> Unknown <span>1%</span></p>
              </div>
           </div>
        </app-card>
      </div>

      <!-- 3. Tables Section -->
      <div class="lower-row">
        <app-card title="Top Channels" class="channels-table">
          <table class="tail-table">
            <thead>
              <tr>
                <th>Source</th>
                <th>Visitors</th>
                <th>Revenues</th>
                <th>Sales</th>
                <th>Conversion</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let row of channels">
                <td>
                  <div class="source">
                    <i class="fa-brands" [ngClass]="row.icon" [style.color]="row.color"></i>
                    {{ row.source }}
                  </div>
                </td>
                <td>{{ row.visitors }}</td>
                <td class="text-success">{{ row.revenues }}</td>
                <td>{{ row.sales }}</td>
                <td class="text-primary">{{ row.conversion }}</td>
              </tr>
            </tbody>
          </table>
        </app-card>
      </div>
    </div>
  `,
  styles: [`
    .dashboard-wrapper { display: flex; flex-direction: column; gap: var(--sp-8); }
    
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: var(--sp-6);
    }
    .stat-inner { display: flex; flex-direction: column; gap: 10px; }
    .stat-icon { width: 44px; height: 44px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.25rem; }
    .stat-value { font-size: 1.5rem; font-weight: 700; }
    .stat-title { font-size: 0.875rem; color: var(--text-muted); }
    .stat-trend { font-size: 0.75rem; font-weight: 600; display: flex; align-items: center; gap: 4px; }
    .stat-trend.up { color: var(--success); }
    .stat-trend.down { color: var(--danger); }

    .charts-row { display: grid; grid-template-columns: 2fr 1fr; gap: var(--sp-6); }
    @media (max-width: 1024px) { .charts-row { grid-template-columns: 1fr; } }
    
    .chart-mock { height: 320px; display: flex; flex-direction: column; }
    .chart-header { margin-bottom: 20px; }
    .legend { font-size: 0.875rem; display: flex; gap: 16px; color: var(--text-muted); }
    .dot { width: 10px; height: 10px; border-radius: 50%; display: inline-block; margin-right: 4px; }
    .dot.p { background: var(--primary); }
    .dot.s { background: #80CAEE; }
    .dot.t { background: #10B981; }
    .chart-visual { flex: 1; display: flex; align-items: flex-end; justify-content: space-between; border-bottom: 1px solid var(--border); padding: 0 10px; }
    .bar-pair { flex: 1; height: 100%; display: flex; align-items: flex-end; gap: 4px; justify-content: center; max-width: 40px; }
    .bar { width: 6px; border-radius: 4px 4px 0 0; }
    .bar.p { background: var(--primary); }
    .bar.s { background: #80CAEE; }

    .pie-mock { display: flex; flex-direction: column; align-items: center; gap: 20px; height: 320px; justify-content: center; }
    .circle { width: 160px; height: 160px; border-radius: 50%; border: 15px solid var(--primary); position: relative; display: flex; align-items: center; justify-content: center; }
    .circle::after { content: ''; position: absolute; width:100%; height:100%; border: 15px solid #80CAEE; border-radius: 50%; clip-path: polygon(50% 50%, 100% 0, 100% 100%, 0 100%); }
    .inner { width: 100px; height: 100px; border-radius: 50%; background: var(--bg-card); }
    .pie-legend { width: 100%; display: flex; flex-direction: column; gap: 8px; }
    .pie-legend p { display: flex; justify-content: space-between; align-items: center; font-size: 0.875rem; color: var(--text-muted); }
    .pie-legend span { font-weight: 600; color: var(--text-main); }

    .tail-table { width: 100%; border-collapse: collapse; }
    .tail-table th { background: #F7F9FC; padding: 12px; font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; text-align: left; }
    .dark .tail-table th { background: #313D4A; }
    .tail-table td { padding: 16px 12px; border-bottom: 1px solid var(--border); font-size: 0.875rem; }
    .source { display: flex; align-items: center; gap: 12px; font-weight: 500; }
    .source i { font-size: 1.25rem; }
    .text-success { color: var(--success); font-weight: 600; }
    .text-primary { color: var(--primary); font-weight: 600; }
  `]
})
export class DashboardComponent {
  stats: StatCard[] = [
    { title: 'Total Views', value: '$3.456K', trend: '0.43%', icon: 'fa-eye', color: '#3C50E0', increased: true },
    { title: 'Total Profit', value: '$45.2K', trend: '4.35%', icon: 'fa-cart-shopping', color: '#10B981', increased: true },
    { title: 'Total Product', value: '2,450', trend: '2.59%', icon: 'fa-bag-shopping', color: '#3C50E0', increased: true },
    { title: 'Total Users', value: '3,456', trend: '0.95%', icon: 'fa-user-group', color: '#8b5cf6', increased: false },
  ];

  channels = [
    { source: 'Google', icon: 'fa-google', color: '#DB4437', visitors: '3.5K', revenues: '$5,768', sales: '590', conversion: '4.8%' },
    { source: 'Facebook', icon: 'fa-facebook', color: '#1877F2', visitors: '2.2K', revenues: '$4,635', sales: '467', conversion: '4.3%' },
    { source: 'Github', icon: 'fa-github', color: '#181717', visitors: '1.8K', revenues: '$3,890', sales: '420', conversion: '3.7%' },
    { source: 'Twitter', icon: 'fa-twitter', color: '#1DA1F2', visitors: '1.5K', revenues: '$3,120', sales: '389', conversion: '3.3%' },
  ];
}
