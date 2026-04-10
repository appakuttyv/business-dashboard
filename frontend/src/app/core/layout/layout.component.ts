import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { ResponsiveService } from '../services/responsive.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SidebarComponent, HeaderComponent],
  template: `
    <div class="app-wrapper">
      <!-- Mobile Overlay -->
      <div 
        class="mobile-overlay" 
        *ngIf="responsive.isMobile() || responsive.isTablet()"
        [class.active]="responsive.isSidebarOpen()"
        (click)="responsive.closeSidebar()"
      ></div>

      <app-sidebar></app-sidebar>
      
      <div 
        class="main-container"
        [style.margin-left]="getMainMargin()"
      >
        <app-header></app-header>
        
        <main class="content-area">
          <router-outlet></router-outlet>
        </main>
      </div>
    </div>
  `,
  styles: [`
    .app-wrapper {
      display: flex;
      min-height: 100vh;
      overflow: hidden;
      background: var(--bg-main);
    }

    .mobile-overlay {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.4);
      z-index: 990;
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s;
      backdrop-filter: blur(2px);
    }

    .mobile-overlay.active {
      opacity: 1;
      visibility: visible;
    }

    .main-container {
      flex: 1;
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      transition: margin-left 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      background: var(--bg-main);
      width: 100%;
    }

    .content-area {
      flex: 1;
      padding: var(--sp-8);
      max-width: 1440px;
      margin: 0 auto;
      width: 100%;
    }

    @media (max-width: 768px) {
      .content-area {
        padding: var(--sp-4);
      }
    }
  `]
})
export class LayoutComponent {
  responsive = inject(ResponsiveService);

  getMainMargin(): string {
    if (this.responsive.isMobile() || this.responsive.isTablet()) {
      return '0';
    }
    return this.responsive.isSidebarCollapsed() ? '80px' : '280px';
  }
}
