import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="breadcrumb">
      <h2 class="page-title">{{ pageTitle }}</h2>
      <nav class="breadcrumb-nav">
        <ol>
          <li><a routerLink="/">Dashboard</a></li>
          <li class="separator">/</li>
          <li class="active">{{ pageTitle }}</li>
        </ol>
      </nav>
    </div>
  `,
  styles: [`
    .breadcrumb {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: var(--sp-8);
    }
    .page-title {
      font-size: 1.625rem;
      font-weight: 700;
      color: var(--text-main);
    }
    .breadcrumb-nav ol {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 0.875rem;
    }
    .breadcrumb-nav a {
      color: var(--text-muted);
      font-weight: 500;
    }
    .breadcrumb-nav a:hover {
      color: var(--primary);
    }
    .separator {
      color: var(--text-muted);
    }
    .active {
      color: var(--primary);
      font-weight: 600;
    }
    @media (max-width: 640px) {
      .breadcrumb { flex-direction: column; align-items: flex-start; gap: 8px; }
    }
  `]
})
export class BreadcrumbComponent {
  @Input() pageTitle: string = 'Dashboard';
}
