import { Injectable, signal, HostListener, effect, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveService {
  private platformId = inject(PLATFORM_ID);
  
  // Viewport states
  isMobile = signal<boolean>(false);
  isTablet = signal<boolean>(false);
  isDesktop = signal<boolean>(true);
  
  // UI states
  isSidebarOpen = signal<boolean>(true);
  isSidebarCollapsed = signal<boolean>(false);

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      this.checkScreenSize();
      window.addEventListener('resize', () => this.checkScreenSize());
      
      // Auto-collapse sidebar on smaller desktops/laptops
      effect(() => {
        if (this.isTablet() || this.isMobile()) {
          this.isSidebarOpen.set(false);
          this.isSidebarCollapsed.set(false);
        } else {
          this.isSidebarOpen.set(true);
        }
      }, { allowSignalWrites: true });
    }
  }

  private checkScreenSize() {
    const width = window.innerWidth;
    this.isMobile.set(width < 768);
    this.isTablet.set(width >= 768 && width < 1024);
    this.isDesktop.set(width >= 1024);
  }

  toggleSidebar() {
    if (this.isMobile() || this.isTablet()) {
      this.isSidebarOpen.update(v => !v);
    } else {
      this.isSidebarCollapsed.update(v => !v);
    }
  }

  closeSidebar() {
    if (this.isMobile() || this.isTablet()) {
      this.isSidebarOpen.set(false);
    }
  }
}
