import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from '../../shared/components/breadcrumb/breadcrumb.component';
import { CardComponent } from '../../shared/components/card/card.component';

@Component({
  selector: 'app-crm',
  standalone: true,
  imports: [CommonModule, BreadcrumbComponent, CardComponent],
  template: `
    <app-breadcrumb pageTitle="CRM"></app-breadcrumb>

    <div class="crm-grid">
      <!-- 1. KPI Stats -->
      <div class="stats-grid">
         <app-card *ngFor="let stat of stats">
            <div class="stat-crm">
               <div class="label-group">
                  <p class="title">{{ stat.title }}</p>
                  <h3 class="value">{{ stat.value }}</h3>
               </div>
               <div class="line-mock">
                  <div class="line" [style.width.%]="stat.trend" [style.background]="stat.color"></div>
               </div>
               <p class="trend-label" [style.color]="stat.color">{{ stat.trend }}% Increase</p>
            </div>
         </app-card>
      </div>

      <!-- 2. Deal Pipeline & Leads -->
      <div class="main-row">
         <app-card title="Deal Pipeline" class="col-8">
            <div class="pipeline">
               <div *ngFor="let stage of pipeline" class="stage">
                  <div class="stage-info">
                     <span class="dot" [style.background]="stage.color"></span>
                     <p class="name">{{ stage.name }}</p>
                     <span class="count">{{ stage.count }}</span>
                  </div>
                  <div class="bar-container">
                     <div class="bar-fill" [style.width.%]="stage.pct" [style.background]="stage.color"></div>
                  </div>
                  <p class="amount">{{ stage.amount }}</p>
               </div>
            </div>
         </app-card>

         <app-card title="Leads by Source" class="col-4">
            <div class="leads-chart">
               <div class="multi-bar">
                  <div *ngFor="let l of leads" class="lead-bar" [style.height.px]="l.val * 2" [style.background]="l.color" [title]="l.source"></div>
               </div>
               <div class="lead-legend">
                  <p *ngFor="let l of leads"><span class="dot" [style.background]="l.color"></span> {{ l.source }}</p>
               </div>
            </div>
         </app-card>
      </div>

      <!-- 3. Recent Tasks/Activities -->
      <div class="row-three">
         <app-card title="Project Tasks" class="col-12">
            <div class="task-list">
               <div *ngFor="let task of tasks" class="task-item">
                  <div class="task-check">
                     <input type="checkbox" [checked]="task.done">
                     <span class="check-box"></span>
                  </div>
                  <div class="task-body">
                     <p class="task-title" [class.done]="task.done">{{ task.title }}</p>
                     <p class="task-desc">Assigned to: {{ task.owner }}</p>
                  </div>
                  <div class="task-meta">
                     <span class="prio" [style.color]="task.prioColor">{{ task.prio }}</span>
                  </div>
               </div>
            </div>
         </app-card>
      </div>
    </div>
  `,
  styles: [`
    .crm-grid { display: flex; flex-direction: column; gap: var(--sp-8); }
    
    .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: var(--sp-6); }
    .stat-crm { display: flex; flex-direction: column; gap: 12px; }
    .stat-crm .title { font-size: 0.875rem; color: var(--text-muted); font-weight: 500; }
    .stat-crm .value { font-size: 1.5rem; font-weight: 700; }
    .line-mock { height: 4px; background: var(--bg-main); border-radius: 2px; overflow: hidden; }
    .line-mock .line { height: 100%; border-radius: 2px; }
    .trend-label { font-size: 0.75rem; font-weight: 600; }

    .main-row { display: grid; grid-template-columns: 2fr 1fr; gap: var(--sp-6); }
    @media (max-width: 1024px) { .main-row { grid-template-columns: 1fr; } }

    .pipeline { display: flex; flex-direction: column; gap: 20px; }
    .stage { display: grid; grid-template-columns: 140px 1fr 100px; gap: 20px; align-items: center; }
    @media (max-width: 600px) { 
      .stage { grid-template-columns: 1fr; gap: 8px; } 
      .stage .amount { text-align: left; }
    }
    .stage-info { display: flex; align-items: center; gap: 10px; }
    .stage-info .dot { width: 8px; height: 8px; border-radius: 50%; }
    .stage-info .name { font-size: 0.875rem; font-weight: 500; color: var(--text-muted); }
    .stage-info .count { font-size: 0.75rem; background: var(--bg-main); padding: 2px 6px; border-radius: 4px; font-weight: 700; margin-left: auto; }
    .bar-container { height: 8px; background: var(--bg-main); border-radius: 4px; overflow: hidden; }
    .bar-fill { height: 100%; border-radius: 4px; transition: var(--transition); }
    .stage .amount { font-weight: 700; font-size: 0.875rem; text-align: right; }

    .leads-chart { display: flex; flex-direction: column; align-items: center; gap: 30px; padding: 20px 0; }
    .multi-bar { display: flex; align-items: flex-end; gap: 12px; height: 120px; }
    .lead-bar { width: 30px; border-radius: 4px 4px 0 0; transition: var(--transition); }
    .lead-legend { width: 100%; display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
    .lead-legend p { font-size: 0.75rem; color: var(--text-muted); display: flex; align-items: center; gap: 6px; }
    .lead-legend .dot { width: 6px; height: 6px; border-radius: 50%; }

    .task-list { display: flex; flex-direction: column; gap: 16px; }
    .task-item { display: flex; align-items: center; gap: 16px; padding: 12px; border-radius: 8px; border: 1px solid var(--border); transition: var(--transition); }
    .task-item:hover { border-color: var(--primary); background: var(--primary-light); }
    
    .task-check { position: relative; width: 20px; height: 20px; }
    .task-check input { opacity: 0; width: 0; height: 0; }
    .check-box { position: absolute; top:0; left:0; width: 20px; height: 20px; border: 2px solid var(--border-strong); border-radius: 4px; }
    input:checked + .check-box { background: var(--primary); border-color: var(--primary); }
    input:checked + .check-box::after { content: '✔'; position: absolute; color: white; font-size: 12px; top: 50%; left: 50%; transform: translate(-50%, -50%); }

    .task-body { flex:1; }
    .task-title { font-weight: 600; font-size: 0.875rem; margin-bottom: 2px; }
    .task-title.done { text-decoration: line-through; opacity: 0.6; }
    .task-desc { font-size: 0.75rem; color: var(--text-muted); }
    .prio { font-size: 0.75rem; font-weight: 700; text-transform: uppercase; }
  `]
})
export class CRMComponent {
  stats = [
    { title: 'Total Deals', value: '1,450', trend: 75, color: '#3C50E0' },
    { title: 'Revenue forecast', value: '$45,200', trend: 60, color: '#10B981' },
    { title: 'New Leads', value: '450', trend: 45, color: '#F59E0B' },
    { title: 'Closed Won', value: '342', trend: 90, color: '#8b5cf6' },
  ];

  pipeline = [
    { name: 'Prospecting', count: 12, pct: 40, amount: '$12,450', color: '#10B981' },
    { name: 'Qualification', count: 8, pct: 60, amount: '$25,000', color: '#3C50E0' },
    { name: 'Proposal', count: 5, pct: 85, amount: '$42,100', color: '#F59E0B' },
    { name: 'Negotiation', count: 2, pct: 95, amount: '$15,000', color: '#8b5cf6' },
  ];

  leads = [
    { source: 'Referral', val: 45, color: '#3C50E0' },
    { source: 'Direct', val: 30, color: '#10B981' },
    { source: 'Ads', val: 20, color: '#F59E0B' },
    { source: 'Social', val: 15, color: '#8b5cf6' },
  ];

  tasks = [
    { title: 'Follow up with David', owner: 'Appakutty V', prio: 'High', prioColor: '#EF4444', done: true },
    { title: 'Prepare Q4 Forecast', owner: 'Appakutty V', prio: 'Medium', prioColor: '#F59E0B', done: false },
    { title: 'Review Contract #451', owner: 'Admin', prio: 'Low', prioColor: '#10B981', done: false },
  ];
}
