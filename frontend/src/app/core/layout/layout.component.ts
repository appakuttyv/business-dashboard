import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SidebarComponent, HeaderComponent],
  template: `
    <div class="app-wrapper">
      <app-sidebar></app-sidebar>
      
      <div class="main-container">
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
    }

    .main-container {
      flex: 1;
      display: flex;
      flex-direction: column;
      margin-left: var(--sidebar-width);
      min-height: 100vh;
      transition: margin-left 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      background: var(--bg-main);
    }

    .content-area {
      flex: 1;
      padding: var(--sp-8);
      max-width: 1440px;
      margin: 0 auto;
      width: 100%;
    }

    @media (max-width: 1024px) {
      .main-container {
        margin-left: 80px;
      }
    }

    @media (max-width: 768px) {
      .main-container {
        margin-left: 0;
      }
    }
  `]
})
export class LayoutComponent {}
