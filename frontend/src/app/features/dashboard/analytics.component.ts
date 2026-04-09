import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from '../../shared/components/breadcrumb/breadcrumb.component';
import { CardComponent } from '../../shared/components/card/card.component';

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [CommonModule, BreadcrumbComponent, CardComponent],
  template: `
    <app-breadcrumb pageTitle="Analytics"></app-breadcrumb>

    <div class="analytics-grid">
      <!-- 1. Key Metrics -->
      <div class="stats-grid">
        <app-card *ngFor="let stat of stats">
          <div class="stat-content">
             <div class="info">
                <p class="title">{{ stat.title }}</p>
                <h3 class="value">{{ stat.value }}</h3>
             </div>
             <div class="icon" [style.color]="stat.color">
                <i class="fa-solid {{ stat.icon }}"></i>
             </div>
          </div>
          <div class="footer">
             <span [class.up]="stat.up" [class.down]="!stat.up">
                {{ stat.percentage }} <i class="fa-solid" [ngClass]="stat.up ? 'fa-arrow-up' : 'fa-arrow-down'"></i>
             </span>
             <span class="muted"> Since last month</span>
          </div>
        </app-card>
      </div>

      <!-- 2. Charts Row -->
      <div class="charts-row">
         <app-card title="Visitors Analytics" class="col-8">
            <div class="chart-mock-bar">
               <div *ngFor="let h of [40, 60, 45, 90, 80, 50, 70, 85, 95, 65, 55, 75]" 
                    class="bar" 
                    [style.height.%]="h"></div>
            </div>
         </app-card>
         
         <app-card title="Visitors by Device" class="col-4">
            <div class="doughnut-container">
               <div class="doughnut-mock">
                  <div class="inner"><span>65%</span></div>
               </div>
               <div class="legend">
                  <p><span class="dot desktop"></span> Desktop (65%)</p>
                  <p><span class="dot tablet"></span> Tablet (25%)</p>
                  <p><span class="dot mobile"></span> Mobile (10%)</p>
               </div>
            </div>
         </app-card>
      </div>

      <!-- 3. Bottom Row -->
      <div class="bottom-row">
         <app-card title="Top Content" class="col-12">
            <table class="data-table">
               <thead>
                  <tr>
                     <th>Page Path</th>
                     <th>Views</th>
                     <th>Uniques</th>
                     <th>Bounce Rate</th>
                  </tr>
               </thead>
               <tbody>
                  <tr *ngFor="let page of content">
                     <td>{{ page.path }}</td>
                     <td>{{ page.views }}</td>
                     <td>{{ page.uniques }}</td>
                     <td><span class="badge">{{ page.bounce }}</span></td>
                  </tr>
               </tbody>
            </table>
         </app-card>
      </div>
    </div>
  `,
  styles: [`
    .analytics-grid { display: flex; flex-direction: column; gap: var(--sp-8); }
    
    .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: var(--sp-6); }
    .stat-content { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px; }
    .stat-content .title { font-size: 0.875rem; color: var(--text-muted); font-weight: 500; }
    .stat-content .value { font-size: 1.5rem; font-weight: 700; margin-top: 4px; }
    .stat-content .icon { font-size: 1.5rem; opacity: 0.8; }
    .footer { font-size: 0.75rem; display: flex; align-items: center; gap: 4px; }
    .footer .up { color: var(--success); font-weight: 600; }
    .footer .down { color: var(--danger); font-weight: 600; }
    .footer .muted { color: var(--text-muted); }

    .charts-row { display: grid; grid-template-columns: 2fr 1fr; gap: var(--sp-6); }
    @media (max-width: 1024px) { .charts-row { grid-template-columns: 1fr; } }
    
    .chart-mock-bar { height: 300px; display: flex; align-items: flex-end; justify-content: space-between; padding-top: 20px; gap: 10px; }
    .bar { flex: 1; background: var(--primary); border-radius: 4px 4px 0 0; min-width: 20px; transition: var(--transition); }
    .bar:hover { opacity: 0.8; height: 100% !important; }

    .doughnut-container { display: flex; flex-direction: column; align-items: center; gap: 30px; padding: 20px 0; }
    .doughnut-mock { width: 150px; height: 150px; border-radius: 50%; border: 15px solid var(--primary); display: flex; align-items: center; justify-content: center; position: relative; }
    .doughnut-mock .inner { width: 90px; height: 90px; border-radius: 50%; background: var(--bg-card); display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 1.25rem; }
    
    .legend { width: 100%; display: flex; flex-direction: column; gap: 8px; }
    .legend p { font-size: 0.875rem; color: var(--text-muted); display: flex; align-items: center; gap: 8px; }
    .dot { width: 10px; height: 10px; border-radius: 50%; }
    .dot.desktop { background: var(--primary); }
    .dot.tablet { background: #80CAEE; }
    .dot.mobile { background: #F59E0B; }

    .data-table { width: 100%; border-collapse: collapse; }
    .data-table th { text-align: left; padding: 12px; border-bottom: 1px solid var(--border); font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; }
    .data-table td { padding: 16px 12px; border-bottom: 1px solid var(--border); font-size: 0.875rem; }
    .badge { background: var(--primary-light); color: var(--primary); padding: 2px 8px; border-radius: 4px; font-weight: 600; font-size: 0.75rem; }
  `]
})
export class AnalyticsComponent {
  stats = [
    { title: 'Unique Visitors', value: '12.4K', percentage: '18%', up: true, icon: 'fa-users', color: '#3C50E0' },
    { title: 'Total Page Views', value: '55.6K', percentage: '25%', up: true, icon: 'fa-eye', color: '#10B981' },
    { title: 'Bounce Rate', value: '42.1%', percentage: '7%', up: false, icon: 'fa-chart-line', color: '#F59E0B' },
    { title: 'Avg. Session', value: '2m 14s', percentage: '12%', up: true, icon: 'fa-clock', color: '#8b5cf6' },
  ];

  content = [
    { path: '/dashboard/ecommerce', views: '12,450', uniques: '8,200', bounce: '32.4%' },
    { path: '/forms/elements', views: '8,120', uniques: '5,300', bounce: '45.1%' },
    { path: '/tables', views: '5,400', uniques: '3,100', bounce: '28.9%' },
    { path: '/profile', views: '2,100', uniques: '1,500', bounce: '52.4%' },
  ];
}
