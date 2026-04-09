import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavigationService, NavSection, NavItem } from '../../services/navigation.service';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <aside class="sidebar" [class.collapsed]="isCollapsed()">
      <div class="logo">
        <div class="logo-wrapper">
          <div class="logo-icon">
            <i class="fa-solid fa-bolt"></i>
          </div>
          <span class="logo-text" *ngIf="!isCollapsed()">Vortex<span class="dot">.</span></span>
        </div>
        <button class="collapse-toggle" (click)="toggleCollapse()">
          <i class="fa-solid" [ngClass]="isCollapsed() ? 'fa-angles-right' : 'fa-angles-left'"></i>
        </button>
      </div>
      
      <div class="nav-container scroll-custom">
        <div *ngFor="let section of menu()" class="nav-section">
          <p class="section-label" *ngIf="!isCollapsed()">{{ section.title }}</p>
          <ul>
            <li *ngFor="let item of section.items" class="nav-item">
              <!-- Item with Children -->
              <div *ngIf="item.children; else singleItem">
                <button 
                  class="nav-link dropdown-toggle" 
                  (click)="toggleSubmenu(item.label)"
                  [class.active]="isSubmenuOpen(item.label)"
                >
                  <i class="fa-solid {{ item.icon }} icon"></i>
                  <span class="label" *ngIf="!isCollapsed()">{{ item.label }}</span>
                  <i 
                    class="fa-solid fa-chevron-down arrow" 
                    *ngIf="!isCollapsed()"
                    [class.rotate]="isSubmenuOpen(item.label)"
                  ></i>
                </button>
                
                <ul class="submenu" *ngIf="!isCollapsed() && isSubmenuOpen(item.label)">
                  <li *ngFor="let child of item.children">
                    <a [routerLink]="child.path" routerLinkActive="active" class="submenu-link">
                      {{ child.label }}
                    </a>
                  </li>
                </ul>
              </div>

              <!-- Single Item -->
              <ng-template #singleItem>
                <a [routerLink]="item.path" routerLinkActive="active" class="nav-link">
                  <i class="fa-solid {{ item.icon }} icon"></i>
                  <span class="label" *ngIf="!isCollapsed()">{{ item.label }}</span>
                  <span *ngIf="item.badge && !isCollapsed()" class="badge">{{ item.badge }}</span>
                </a>
              </ng-template>
            </li>
          </ul>
        </div>
      </div>

      <div class="sidebar-footer" *ngIf="!isCollapsed()">
        <div class="user-profile">
          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Appakutty" alt="User">
          <div class="info">
            <p class="name">Appakutty V</p>
            <p class="email">admin&#64;appakutty.dev</p>
          </div>
        </div>
      </div>
    </aside>
  `,
  styles: [`
    .sidebar {
      width: var(--sidebar-width);
      height: 100vh;
      background: var(--zinc-900);
      color: white;
      display: flex;
      flex-direction: column;
      position: fixed;
      left: 0;
      top: 0;
      z-index: 1000;
      transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      border-right: 1px solid var(--zinc-800);
    }

    .sidebar.collapsed {
      width: 80px;
    }

    .logo {
      padding: var(--sp-6);
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: var(--header-height);
    }

    .logo-wrapper {
      display: flex;
      align-items: center;
      gap: 12px;
      overflow: hidden;
    }

    .logo-icon {
      min-width: 32px;
      height: 32px;
      background: var(--primary);
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
    }

    .logo-text {
      font-size: 1.25rem;
      font-weight: 700;
      white-space: nowrap;
      color: white;
    }

    .collapse-toggle {
      background: transparent;
      border: none;
      color: #8A99AF;
      cursor: pointer;
      padding: 4px;
    }

    .nav-container {
      flex: 1;
      padding: var(--sp-4);
      overflow-y: auto;
    }

    .section-label {
      padding: var(--sp-4) var(--sp-2);
      font-size: 0.75rem;
      font-weight: 600;
      color: #8A99AF;
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }

    .nav-link {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px;
      border-radius: 8px;
      color: #DEE4EE;
      font-weight: 500;
      transition: all 0.2s;
      cursor: pointer;
      width: 100%;
      border: none;
      background: transparent;
      text-align: left;
    }

    .nav-link:hover, .nav-link.active {
      color: white;
      background: #333A48;
    }

    .nav-link.active .icon {
      color: var(--primary);
    }

    .icon {
      min-width: 20px;
      font-size: 1.125rem;
      text-align: center;
    }

    .label {
      white-space: nowrap;
      flex: 1;
    }

    .arrow {
      font-size: 0.75rem;
      transition: transform 0.3s;
      color: #8A99AF;
    }

    .arrow.rotate {
      transform: rotate(180deg);
    }

    .submenu {
      margin-left: 20px;
      margin-top: 4px;
      padding-left: 12px;
      border-left: 1px solid #333A48;
    }

    .submenu-link {
      display: block;
      padding: 8px 12px;
      color: #D1D5DB;
      font-size: 0.875rem;
      border-radius: 6px;
    }

    .submenu-link:hover, .submenu-link.active {
      color: white;
      background: #333A48;
    }

    .badge {
      background: var(--primary);
      color: white;
      font-size: 0.65rem;
      padding: 2px 6px;
      border-radius: 4px;
      font-weight: 700;
    }

    .sidebar-footer {
      padding: var(--sp-6);
      border-top: 1px solid #333A48;
    }

    .user-profile {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .user-profile img {
      width: 36px;
      height: 36px;
      border-radius: 8px;
    }

    .user-profile .name { font-weight: 600; font-size: 0.875rem; color: white; }
    .user-profile .email { font-size: 0.75rem; color: #8A99AF; }

    /* Scrollbar */
    .scroll-custom::-webkit-scrollbar { width: 4px; }
    .scroll-custom::-webkit-scrollbar-thumb { background: #333A48; border-radius: 10px; }
  `]
})
export class SidebarComponent {
  private navService = inject(NavigationService);
  
  menu = signal<NavSection[]>(this.navService.getMenu());
  isCollapsed = signal<boolean>(false);
  openSubmenus = signal<Set<string>>(new Set());

  toggleCollapse() {
    this.isCollapsed.set(!this.isCollapsed());
  }

  toggleSubmenu(label: string) {
    const current = new Set(this.openSubmenus());
    if (current.has(label)) {
      current.delete(label);
    } else {
      current.add(label);
    }
    this.openSubmenus.set(current);
  }

  isSubmenuOpen(label: string): boolean {
    return this.openSubmenus().has(label);
  }
}
