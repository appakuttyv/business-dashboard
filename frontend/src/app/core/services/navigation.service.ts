import { Injectable } from '@angular/core';

export interface NavItem {
  label: string;
  path?: string;
  icon: string;
  badge?: string;
  badgeColor?: string;
  children?: NavItem[];
}

export interface NavSection {
  title: string;
  items: NavItem[];
}

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  getMenu(): NavSection[] {
    return [
      {
        title: 'MENU',
        items: [
          {
            label: 'Dashboard',
            icon: 'fa-house',
            children: [
              { label: 'eCommerce', path: '/dashboard/ecommerce', icon: '' },
              { label: 'Analytics', path: '/dashboard/analytics', icon: '' },
              { label: 'Marketing', path: '/dashboard/marketing', icon: '' },
              { label: 'CRM', path: '/dashboard/crm', icon: '' },
            ],
          },
          { label: 'Calendar', icon: 'fa-calendar-days', path: '/calendar' },
          { label: 'Profile', icon: 'fa-user', path: '/profile' },
          {
            label: 'Forms',
            icon: 'fa-list-check',
            children: [
              { label: 'Form Elements', path: '/forms/elements', icon: '' },
              { label: 'Form Layout', path: '/forms/layout', icon: '' },
            ],
          },
          { label: 'Tables', icon: 'fa-table', path: '/tables' },
          { label: 'Settings', icon: 'fa-gear', path: '/settings' },
        ],
      },
      {
        title: 'SUPPORT',
        items: [
          { label: 'Messages', icon: 'fa-envelope', path: '/messages', badge: '5', badgeColor: 'primary' },
          { label: 'Inbox', icon: 'fa-inbox', path: '/inbox' },
          { label: 'Invoices', icon: 'fa-file-invoice', path: '/invoices' },
        ],
      },
      {
        title: 'OTHERS',
        items: [
          { label: 'Chart', icon: 'fa-chart-pie', path: '/charts' },
          {
            label: 'UI Elements',
            icon: 'fa-wand-magic-sparkles',
            children: [
              { label: 'Alerts', path: '/ui/alerts', icon: '' },
              { label: 'Buttons', path: '/ui/buttons', icon: '' },
              { label: 'Advanced UI', path: '/ui/advanced', icon: '' },
            ],
          },
          {
            label: 'Authentication',
            icon: 'fa-lock',
            children: [
              { label: 'Sign In', path: '/auth/signin', icon: '' },
              { label: 'Sign Up', path: '/auth/signup', icon: '' },
            ],
          },
        ],
      },
    ];
  }
}
