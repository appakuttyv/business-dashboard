import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';
import { CardComponent } from '../../../shared/components/card/card.component';

@Component({
  selector: 'app-alerts',
  standalone: true,
  imports: [CommonModule, BreadcrumbComponent, CardComponent],
  template: `
    <app-breadcrumb pageTitle="Alerts"></app-breadcrumb>

    <div class="alerts-grid">
      <app-card title="Alerts Style 1">
        <div class="alert alert-success">
           <i class="fa-solid fa-circle-check"></i>
           <p><strong>Success!</strong> Your transaction has been completed successfully.</p>
        </div>
        <div class="alert alert-warning">
           <i class="fa-solid fa-triangle-exclamation"></i>
           <p><strong>Warning!</strong> Your subscription is about to expire in 2 days.</p>
        </div>
        <div class="alert alert-danger">
           <i class="fa-solid fa-circle-xmark"></i>
           <p><strong>Error!</strong> Something went wrong, please try again later.</p>
        </div>
      </app-card>

      <app-card title="Alerts Style 2">
        <div class="alert alert-success filled">
           <i class="fa-solid fa-circle-check"></i>
           <div class="content">
              <h4>Great News!</h4>
              <p>Your application was accepted by the team.</p>
           </div>
        </div>
        <div class="alert alert-danger filled">
           <i class="fa-solid fa-circle-xmark"></i>
           <div class="content">
              <h4>Access Denied!</h4>
              <p>You do not have permission to access this page.</p>
           </div>
        </div>
      </app-card>
    </div>
  `,
  styles: [`
    .alerts-grid { display: grid; grid-template-columns: 1fr; gap: var(--sp-8); }
    
    .alert { padding: 20px; border-radius: 8px; display: flex; align-items: flex-start; gap: 16px; margin-bottom: 20px; border: 1px solid transparent; }
    .alert:last-child { margin-bottom: 0; }
    .alert i { font-size: 1.25rem; margin-top: 2px; }
    .alert p { font-size: 0.875rem; line-height: 1.5; }
    .alert p strong { font-weight: 700; }

    .alert-success { background: #E1F9F0; color: #10B981; border-color: #A7F3D0; }
    .alert-warning { background: #FEF9C3; color: #EAB308; border-color: #FEF08A; }
    .alert-danger { background: #FEE2E2; color: #EF4444; border-color: #FECACA; }

    .alert.filled { border: none; }
    .alert-success.filled { background: #10B981; color: white; }
    .alert-danger.filled { background: #EF4444; color: white; }
    
    .alert.filled .content h4 { color: currentColor; font-size: 1rem; margin-bottom: 4px; }
    .alert.filled .content p { opacity: 0.9; }
  `]
})
export class AlertsComponent {}
