import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from '../../shared/components/breadcrumb/breadcrumb.component';
import { CardComponent } from '../../shared/components/card/card.component';

@Component({
  selector: 'app-marketing',
  standalone: true,
  imports: [CommonModule, BreadcrumbComponent, CardComponent],
  template: `
    <app-breadcrumb pageTitle="Marketing"></app-breadcrumb>

    <div class="marketing-grid">
      <!-- 1. Stats -->
      <div class="stats-grid">
         <app-card *ngFor="let stat of stats">
            <div class="stat-body">
               <div class="icon-wrap" [style.background]="stat.color + '20'" [style.color]="stat.color">
                  <i class="fa-solid {{ stat.icon }}"></i>
               </div>
               <div class="data">
                  <h3 class="value">{{ stat.value }}</h3>
                  <p class="label">{{ stat.label }}</p>
               </div>
            </div>
         </app-card>
      </div>

      <!-- 2. Campaigns -->
      <div class="main-row">
         <app-card title="Active Campaigns" class="col-12">
            <div class="campaign-list">
               <div *ngFor="let camp of campaigns" class="campaign-item">
                  <div class="camp-info">
                     <p class="name">{{ camp.name }}</p>
                     <p class="status"><span class="dot" [style.background]="camp.status === 'Active' ? 'var(--success)' : 'var(--warning)'"></span> {{ camp.status }}</p>
                  </div>
                  <div class="camp-metric">
                     <p class="val">{{ camp.clicks }}</p>
                     <p class="lab">Clicks</p>
                  </div>
                  <div class="camp-metric">
                     <p class="val">{{ camp.conv }}%</p>
                     <p class="lab">Conv.</p>
                  </div>
                  <div class="progress-wrap">
                     <div class="progress-bar">
                        <div class="progress-fill" [style.width.%]="camp.reach" [style.background]="camp.status === 'Active' ? 'var(--primary)' : 'var(--warning)'"></div>
                     </div>
                     <p class="lab">Reach: {{ camp.reach }}%</p>
                  </div>
               </div>
            </div>
         </app-card>
      </div>

      <!-- 3. Demographic Section -->
      <div class="row-two">
         <app-card title="Source Breakdown" class="col-6">
            <div class="sources">
               <div *ngFor="let s of sources" class="source-item">
                  <div class="src-meta">
                     <i class="fa-brands {{ s.icon }}" [style.color]="s.color"></i>
                     <span>{{ s.name }}</span>
                  </div>
                  <div class="src-val">
                     <span class="pct">{{ s.pct }}%</span>
                     <div class="small-bar"><div class="fill" [style.width.%]="s.pct" [style.background]="s.color"></div></div>
                  </div>
               </div>
            </div>
         </app-card>
         
         <app-card title="Audience Location" class="col-6">
            <div class="map-mock">
               <div class="map-point" style="top:30%; left:20%;"></div>
               <div class="map-point" style="top:50%; left:70%;"></div>
               <div class="map-point" style="top:70%; left:40%;"></div>
               <p class="map-label">Global Traffic Mockup</p>
            </div>
         </app-card>
      </div>
    </div>
  `,
  styles: [`
    .marketing-grid { display: flex; flex-direction: column; gap: var(--sp-8); }
    
    .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: var(--sp-6); }
    .stat-body { display: flex; align-items: center; gap: 16px; }
    .icon-wrap { width: 48px; height: 48px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 1.25rem; }
    .stat-body .value { font-size: 1.25rem; font-weight: 700; }
    .stat-body .label { font-size: 0.875rem; color: var(--text-muted); }

    .campaign-list { display: flex; flex-direction: column; gap: 20px; }
    .campaign-item { display: grid; grid-template-columns: 2fr 1fr 1fr 2fr; gap: 20px; align-items: center; padding-bottom: 20px; border-bottom: 1px solid var(--border); }
    .campaign-item:last-child { border-bottom: none; }
    .camp-info .name { font-weight: 600; font-size: 0.875rem; }
    .camp-info .status { font-size: 0.75rem; color: var(--text-muted); display: flex; align-items: center; gap: 6px; }
    .dot { width: 6px; height: 6px; border-radius: 50%; }
    .camp-metric .val { font-weight: 700; font-size: 1rem; }
    .camp-metric .lab { font-size: 0.75rem; color: var(--text-muted); }
    .progress-bar { height: 6px; background: var(--bg-main); border-radius: 3px; overflow: hidden; margin-bottom: 4px; }
    .progress-fill { height: 100%; transition: var(--transition); }

    .row-two { display: grid; grid-template-columns: 1fr 1fr; gap: var(--sp-6); }
    @media (max-width: 1024px) { .row-two { grid-template-columns: 1fr; } }
    
    .sources { display: flex; flex-direction: column; gap: 16px; }
    .source-item { display: flex; justify-content: space-between; align-items: center; }
    .src-meta { display: flex; align-items: center; gap: 10px; font-weight: 500; font-size: 0.875rem; }
    .src-val { width: 120px; display: flex; flex-direction: column; gap: 4px; }
    .src-val .pct { font-size: 0.75rem; font-weight: 700; align-self: flex-end; }
    .small-bar { height: 4px; background: var(--bg-main); border-radius: 2px; }
    .small-bar .fill { height: 100%; border-radius: 2px; }

    .map-mock { height: 260px; background: var(--bg-main); border-radius: 8px; position: relative; display: flex; align-items: center; justify-content: center; overflow: hidden; }
    .map-point { position: absolute; width: 12px; height: 12px; background: var(--primary); border-radius: 50%; box-shadow: 0 0 0 4px var(--primary-light); animation: pulse 2s infinite; }
    .map-label { color: var(--text-muted); font-weight: 500; font-size: 0.875rem; z-index: 1; }
    
    @keyframes pulse {
       0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(60, 80, 224, 0.7); }
       70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(60, 80, 224, 0); }
       100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(60, 80, 224, 0); }
    }
  `]
})
export class MarketingComponent {
  stats = [
    { label: 'Total Reach', value: '1.2M', icon: 'fa-bullhorn', color: '#3C50E0' },
    { label: 'Ad Clicks', value: '45.1K', icon: 'fa-mouse-pointer', color: '#10B981' },
    { label: 'CTR Rate', value: '3.4%', icon: 'fa-chart-pie', color: '#F59E0B' },
    { label: 'Total Spent', value: '$12.4K', icon: 'fa-wallet', color: '#EF4444' },
  ];

  campaigns = [
    { name: 'Summer Sale 2026', status: 'Active', clicks: '12,450', conv: '4.2', reach: 85 },
    { name: 'Black Friday Intro', status: 'Active', clicks: '8,120', conv: '5.1', reach: 60 },
    { name: 'Referral Program', status: 'Paused', clicks: '2,400', conv: '1.8', reach: 35 },
  ];

  sources = [
    { name: 'Google Ads', icon: 'fa-google', pct: 45, color: '#DB4437' },
    { name: 'Facebook Ads', icon: 'fa-facebook', pct: 30, color: '#1877F2' },
    { name: 'Twitter Ads', icon: 'fa-twitter', pct: 15, color: '#1DA1F2' },
    { name: 'Other', icon: 'fa-share-nodes', pct: 10, color: '#64748B' },
  ];
}
