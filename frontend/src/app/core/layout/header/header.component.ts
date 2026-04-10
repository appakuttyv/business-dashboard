import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';
import { ResponsiveService } from '../../services/responsive.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="header">
      <div class="header-left">
        <!-- New Mobile Menu Toggle -->
        <button 
          class="menu-toggle" 
          *ngIf="responsive.isMobile() || responsive.isTablet()"
          (click)="responsive.toggleSidebar()"
        >
          <i class="fa-solid fa-bars-staggered"></i>
        </button>

        <div class="search-hint" (click)="focusSearch()" [class.compact]="responsive.isMobile()">
          <i class="fa-solid fa-magnifying-glass"></i>
          <span *ngIf="!responsive.isMobile()">Type to search...</span>
          <kbd class="kbd" *ngIf="!responsive.isMobile()">⌘K</kbd>
        </div>
      </div>
      
      <div class="header-right">
        <!-- Theme Toggle -->
        <button class="theme-toggle" (click)="themeService.toggleTheme()">
          <div class="toggle-track" [class.dark]="themeService.isDarkMode()">
            <div class="toggle-thumb">
              <i class="fa-solid" [ngClass]="themeService.isDarkMode() ? 'fa-moon' : 'fa-sun'"></i>
            </div>
          </div>
        </button>

        <!-- Notifications -->
        <div class="action-item" *ngIf="!responsive.isMobile()">
          <i class="fa-regular fa-bell"></i>
          <span class="ping"></span>
        </div>

        <!-- Messages -->
        <div class="action-item" *ngIf="!responsive.isMobile()">
          <i class="fa-regular fa-message"></i>
          <span class="ping info"></span>
        </div>
        
        <div class="divider" *ngIf="!responsive.isMobile()"></div>
        
        <!-- User Profile -->
        <div class="user-dropdown">
          <div class="user-meta" *ngIf="!responsive.isMobile()">
            <p class="name">Appakutty V</p>
            <p class="role">Admin Administrator</p>
          </div>
          <div class="avatar">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Appakutty" alt="User">
          </div>
          <i class="fa-solid fa-chevron-down arrow" *ngIf="!responsive.isMobile()"></i>
        </div>
      </div>
    </header>
  `,
  styles: [`
    .header {
      height: var(--header-height);
      background: var(--bg-card);
      border-bottom: 1px solid var(--border);
      padding: 0 var(--sp-8);
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: sticky;
      top: 0;
      z-index: 900;
      transition: background 0.3s;
    }

    @media (max-width: 768px) {
      .header { padding: 0 var(--sp-4); }
    }

    .header-left {
      display: flex;
      align-items: center;
      gap: var(--sp-4);
      flex: 1;
    }

    .menu-toggle {
      width: 40px;
      height: 40px;
      border: none;
      background: var(--bg-main);
      color: var(--text-main);
      border-radius: 8px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.25rem;
    }

    .search-hint {
      display: flex;
      align-items: center;
      gap: 12px;
      background: var(--bg-main);
      padding: 8px 16px;
      border-radius: 10px;
      border: 1px solid var(--border);
      color: var(--text-muted);
      max-width: 400px;
      cursor: text;
      transition: var(--transition);
    }

    .search-hint.compact { width: 40px; padding: 0; justify-content: center; border-radius: 50%; height: 40px; }

    .kbd {
      margin-left: auto;
      background: var(--bg-card);
      border: 1px solid var(--border);
      padding: 2px 6px;
      border-radius: 4px;
      font-size: 0.75rem;
      font-family: inherit;
    }

    .header-right {
      display: flex;
      align-items: center;
      gap: var(--sp-4);
    }

    /* Theme Toggle Switch */
    .theme-toggle {
      background: transparent;
      border: none;
      padding: 0;
      cursor: pointer;
    }

    .toggle-track {
      width: 58px;
      height: 32px;
      background: #E2E8F0;
      border-radius: 20px;
      position: relative;
      transition: all 0.3s;
    }

    .toggle-track.dark {
      background: var(--primary);
    }

    .toggle-thumb {
      width: 26px;
      height: 26px;
      background: white;
      border-radius: 50%;
      position: absolute;
      top: 3px;
      left: 3px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      color: var(--zinc-400);
      font-size: 0.875rem;
      box-shadow: var(--shadow-sm);
    }

    .dark .toggle-thumb {
      left: 29px;
      color: var(--primary);
    }

    .action-item {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: var(--bg-main);
      border: 1px solid var(--border);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--text-muted);
      cursor: pointer;
      position: relative;
    }

    .ping {
      position: absolute;
      top: 0;
      right: 0;
      width: 10px;
      height: 10px;
      background: #EF4444;
      border-radius: 50%;
      border: 2px solid var(--bg-card);
    }

    .ping.info { background: #3C50E0; }

    .divider {
      width: 1px;
      height: 30px;
      background: var(--border);
    }

    .user-dropdown {
      display: flex;
      align-items: center;
      gap: 12px;
      cursor: pointer;
    }

    .user-meta {
      text-align: right;
    }

    .user-meta .name {
      font-weight: 600;
      font-size: 0.875rem;
    }

    .user-meta .role {
      font-size: 0.75rem;
      color: var(--text-muted);
    }

    .avatar {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      overflow: hidden;
      background: var(--bg-main);
      border: 2px solid var(--border);
    }

    .avatar img { width: 100%; height: 100%; object-fit: cover; }

    .arrow {
      font-size: 0.75rem;
      color: var(--text-muted);
    }
  `]
})
export class HeaderComponent {
  themeService = inject(ThemeService);
  responsive = inject(ResponsiveService);

  focusSearch() {
    console.log('Search focused');
  }
}
