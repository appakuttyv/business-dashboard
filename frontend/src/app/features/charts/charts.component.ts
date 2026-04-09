import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from '../../shared/components/breadcrumb/breadcrumb.component';
import { CardComponent } from '../../shared/components/card/card.component';

@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [CommonModule, BreadcrumbComponent, CardComponent],
  template: `
    <app-breadcrumb pageTitle="Charts"></app-breadcrumb>

    <div class="charts-grid">
      <!-- 1. Line Chart -->
      <app-card title="Sales Analysis">
         <div class="line-chart-outer">
            <div class="chart-y-axis">
               <span>100</span><span>75</span><span>50</span><span>25</span><span>0</span>
            </div>
            <div class="chart-body">
               <svg viewBox="0 0 1000 300" class="svg-line">
                  <path d="M0,250 L100,220 L200,260 L300,180 L400,150 L500,190 L600,100 L700,120 L800,80 L900,90 L1000,50" 
                        fill="none" stroke="var(--primary)" stroke-width="4" stroke-linecap="round"/>
                  <path d="M0,280 L100,260 L200,240 L300,270 L400,250 L500,230 L600,210 L700,200 L800,220 L900,180 L1000,150" 
                        fill="none" stroke="#80CAEE" stroke-width="4" stroke-linecap="round"/>
               </svg>
               <div class="chart-x-axis">
                  <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span>
               </div>
            </div>
         </div>
      </app-card>

      <!-- 2. Bar Chart -->
      <app-card title="Weekly Target">
         <div class="bar-chart-mock">
            <div *ngFor="let h of [40, 65, 50, 85, 95, 75, 60]" class="bar-col">
               <div class="bar-fill" [style.height.%]="h"></div>
               <span class="day">Day</span>
            </div>
         </div>
      </app-card>

      <!-- 3. Doughnut Chart -->
      <app-card title="Lead Conversion">
         <div class="doughnut-showcase">
            <div class="dougnut-ring">
               <div class="segment p" style="--v: 65"></div>
               <div class="segment s" style="--v: 25"></div>
               <div class="segment t" style="--v: 10"></div>
               <div class="center">
                  <h3>65%</h3>
                  <p>Inbound</p>
               </div>
            </div>
            <div class="stats-list">
               <div class="item"><span class="dot p"></span> Inbound <span>65%</span></div>
               <div class="item"><span class="dot s"></span> Outbound <span>25%</span></div>
               <div class="item"><span class="dot t"></span> Referral <span>10%</span></div>
            </div>
         </div>
      </app-card>
      
      <!-- 4. Area Chart -->
      <app-card title="Network Traffic">
         <div class="area-chart">
            <svg viewBox="0 0 1000 200" preserveAspectRatio="none">
               <path d="M0,180 Q150,150 300,170 Q450,190 600,130 Q750,110 900,140 L1000,0 L1000,200 L0,200 Z" fill="var(--primary-light)"/>
               <path d="M0,180 Q150,150 300,170 Q450,190 600,130 Q750,110 900,140" fill="none" stroke="var(--primary)" stroke-width="2"/>
            </svg>
         </div>
      </app-card>
    </div>
  `,
  styles: [`
    .charts-grid { display: grid; grid-template-columns: 1fr 1fr; gap: var(--sp-8); }
    @media (max-width: 1024px) { .charts-grid { grid-template-columns: 1fr; } }
    
    /* Line Chart CSS */
    .line-chart-outer { display: flex; gap: 20px; height: 350px; padding: 20px 0; }
    .chart-y-axis { display: flex; flex-direction: column; justify-content: space-between; font-size: 0.75rem; color: var(--text-muted); }
    .chart-body { flex: 1; display: flex; flex-direction: column; }
    .svg-line { flex: 1; border-bottom: 1px solid var(--border); border-left: 1px solid var(--border); }
    .chart-x-axis { display: flex; justify-content: space-between; padding-top: 10px; font-size: 0.75rem; color: var(--text-muted); }

    /* Bar Chart CSS */
    .bar-chart-mock { height: 300px; display: flex; align-items: flex-end; justify-content: space-around; border-bottom: 1px solid var(--border); padding-bottom: 30px; }
    .bar-col { display: flex; flex-direction: column; align-items: center; gap: 10px; flex: 1; }
    .bar-fill { width: 30px; background: var(--primary); border-radius: 4px; transition: var(--transition); }
    .bar-fill:hover { background: var(--primary-hover); transform: scaleY(1.05); }
    .day { font-size: 0.75rem; color: var(--text-muted); position: absolute; bottom: -25px; }

    /* Doughnut Chart CSS */
    .doughnut-showcase { display: flex; align-items: center; justify-content: space-around; padding: 40px 0; }
    .dougnut-ring { width: 180px; height: 180px; border-radius: 50%; border: 20px solid var(--primary); position: relative; display: flex; align-items: center; justify-content: center; }
    .center { text-align: center; }
    .center h3 { font-size: 1.5rem; }
    .center p { font-size: 0.75rem; color: var(--text-muted); }
    .stats-list { display: flex; flex-direction: column; gap: 12px; }
    .item { font-size: 0.875rem; color: var(--text-muted); display: flex; align-items: center; gap: 8px; font-weight: 500; }
    .item span:last-child { color: var(--text-main); font-weight: 700; margin-left: auto; }
    .dot { width: 10px; height: 10px; border-radius: 50%; }
    .dot.p { background: var(--primary); }
    .dot.s { background: #80CAEE; }
    .dot.t { background: #10B981; }

    /* Area Chart */
    .area-chart { height: 200px; width: 100%; overflow: hidden; }
    .area-chart svg { width: 100%; height: 100%; transform: scaleY(-1); }
  `]
})
export class ChartsComponent {}
