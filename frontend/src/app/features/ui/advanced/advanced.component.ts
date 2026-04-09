import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';
import { CardComponent } from '../../../shared/components/card/card.component';

@Component({
  selector: 'app-advanced-ui',
  standalone: true,
  imports: [CommonModule, BreadcrumbComponent, CardComponent],
  template: `
    <app-breadcrumb pageTitle="Advanced UI"></app-breadcrumb>

    <div class="advanced-grid">
       <!-- 1. Tabs Showcase -->
       <app-card title="Tab Varieties">
          <div class="tabs-container">
             <div class="tab-header">
                <button *ngFor="let tab of tabs" 
                        [class.active]="activeTab() === tab"
                        (click)="activeTab.set(tab)">
                   {{ tab }}
                </button>
             </div>
             <div class="tab-content">
                <p *ngIf="activeTab() === 'Home'">Home content: High-performance dashboard components built for scale.</p>
                <p *ngIf="activeTab() === 'Profile'">Profile content: User-centric design patterns for professional applications.</p>
                <p *ngIf="activeTab() === 'Settings'">Settings content: Advanced configuration options for your workspace.</p>
             </div>
          </div>
       </app-card>

       <!-- 2. Accordion Showcase -->
       <app-card title="Accordions">
          <div class="accordion-container">
             <div *ngFor="let item of accordions; let i = index" class="accordion-item" [class.open]="openAccordion() === i">
                <button class="accordion-toggle" (click)="toggleAccordion(i)">
                   <span>{{ item.title }}</span>
                   <i class="fa-solid fa-chevron-down" [class.rotate]="openAccordion() === i"></i>
                </button>
                <div class="accordion-body" *ngIf="openAccordion() === i">
                   <p>{{ item.content }}</p>
                </div>
             </div>
          </div>
       </app-card>

       <!-- 3. Progress Variations -->
       <app-card title="Progress Bars">
          <div class="progress-showcase">
             <div class="prog-item">
                <p class="lab">Primary Progress <span>75%</span></p>
                <div class="bar"><div class="fill" style="width: 75%; background: var(--primary);"></div></div>
             </div>
             <div class="prog-item">
                <p class="lab">Success Progress <span>90%</span></p>
                <div class="bar"><div class="fill" style="width: 90%; background: var(--success);"></div></div>
             </div>
             <div class="prog-item">
                <p class="lab">Warning Progress <span>45%</span></p>
                <div class="bar"><div class="fill" style="width: 45%; background: var(--warning);"></div></div>
             </div>
          </div>
       </app-card>

       <!-- 4. Modals Mockup -->
       <app-card title="Modals Preview">
          <div class="modal-preview">
             <div class="modal-mock">
                <div class="m-header">
                   <h3>Modal Title</h3>
                   <i class="fa-solid fa-xmark"></i>
                </div>
                <div class="m-body">
                   <p>This is a high-fidelity preview of a professional modal window styled with TailAdmin guidelines.</p>
                </div>
                <div class="m-footer">
                   <button class="btn-cancel">Cancel</button>
                   <button class="btn-primary">Accept</button>
                </div>
             </div>
          </div>
       </app-card>
    </div>
  `,
  styles: [`
    .advanced-grid { display: grid; grid-template-columns: 1fr 1fr; gap: var(--sp-8); }
    @media (max-width: 1024px) { .advanced-grid { grid-template-columns: 1fr; } }

    /* Tabs */
    .tabs-container { display: flex; flex-direction: column; }
    .tab-header { display: flex; border-bottom: 1px solid var(--border); margin-bottom: 20px; }
    .tab-header button { padding: 12px 24px; border: none; background: transparent; font-weight: 600; color: var(--text-muted); cursor: pointer; position: relative; transition: var(--transition); }
    .tab-header button.active { color: var(--primary); }
    .tab-header button.active::after { content: ''; position: absolute; bottom: -1px; left: 0; width: 100%; height: 2px; background: var(--primary); }
    .tab-content { font-size: 0.875rem; color: var(--text-muted); line-height: 1.6; }

    /* Accordion */
    .accordion-container { display: flex; flex-direction: column; gap: 10px; }
    .accordion-item { border: 1px solid var(--border); border-radius: 8px; overflow: hidden; }
    .accordion-toggle { width: 100%; display: flex; justify-content: space-between; align-items: center; padding: 16px 20px; border: none; background: var(--bg-card); font-weight: 600; cursor: pointer; }
    .accordion-toggle i { font-size: 0.75rem; transition: transform 0.3s; color: var(--text-muted); }
    .accordion-toggle i.rotate { transform: rotate(180deg); color: var(--primary); }
    .accordion-body { padding: 0 20px 20px; font-size: 0.875rem; color: var(--text-muted); }

    /* Progress */
    .progress-showcase { display: flex; flex-direction: column; gap: 20px; }
    .prog-item .lab { display: flex; justify-content: space-between; font-size: 0.875rem; font-weight: 600; margin-bottom: 8px; }
    .prog-item .bar { height: 8px; background: var(--bg-main); border-radius: 4px; overflow: hidden; }
    .prog-item .fill { height: 100%; border-radius: 4px; }

    /* Modal Mock */
    .modal-preview { background: var(--bg-main); padding: 30px; border-radius: 8px; display: flex; align-items: center; justify-content: center; }
    .modal-mock { background: var(--bg-card); width: 100%; border-radius: 12px; box-shadow: var(--shadow-premium); overflow: hidden; border: 1px solid var(--border); }
    .m-header { padding: 16px 24px; border-bottom: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center; }
    .m-header h3 { font-size: 1rem; }
    .m-body { padding: 24px; font-size: 0.875rem; color: var(--text-muted); line-height: 1.5; }
    .m-footer { padding: 16px 24px; border-top: 1px solid var(--border); display: flex; justify-content: flex-end; gap: 12px; }
    .m-footer button { padding: 8px 16px; border-radius: 6px; font-size: 0.875rem; font-weight: 600; cursor: pointer; }
    .btn-cancel { border: 1px solid var(--border); background: transparent; }
    .btn-primary { border: none; background: var(--primary); color: white; }
  `]
})
export class AdvancedUIComponent {
  tabs = ['Home', 'Profile', 'Settings'];
  activeTab = signal<string>('Home');

  openAccordion = signal<number | null>(0);
  accordions = [
    { title: 'How does the theme switcher work?', content: 'It utilizes Angular Signals to manage global state and persists the choice in localStorage for a seamless user experience.' },
    { title: 'Is the layout responsive?', content: 'Yes, the sidebar and main content area use CSS Grid and flexbox with breakpoints to adapt to mobile and tablet views.' },
    { title: 'Can I add more dashboards?', content: 'The architecture is highly modular, allowing you to easily add new dashboards in the features/dashboard directory.' }
  ];

  toggleAccordion(index: number) {
    this.openAccordion.set(this.openAccordion() === index ? null : index);
  }
}
