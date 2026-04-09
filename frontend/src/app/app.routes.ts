import { Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard/ecommerce', pathMatch: 'full' },
      { 
        path: 'dashboard/ecommerce', 
        loadComponent: () => import('./features/dashboard/dashboard.component').then(m => m.DashboardComponent) 
      },
      { 
        path: 'dashboard/analytics', 
        loadComponent: () => import('./features/dashboard/analytics.component').then(m => m.AnalyticsComponent) 
      },
      { 
        path: 'dashboard/marketing', 
        loadComponent: () => import('./features/dashboard/marketing.component').then(m => m.MarketingComponent) 
      },
      { 
        path: 'dashboard/crm', 
        loadComponent: () => import('./features/dashboard/crm.component').then(m => m.CRMComponent) 
      },
      { 
        path: 'calendar', 
        loadComponent: () => import('./features/calendar/calendar.component').then(m => m.CalendarComponent) 
      },
      { 
        path: 'profile', 
        loadComponent: () => import('./features/profile/profile.component').then(m => m.ProfileComponent) 
      },
      { 
        path: 'forms/elements', 
        loadComponent: () => import('./features/forms/elements/elements.component').then(m => m.ElementsComponent) 
      },
      { 
        path: 'forms/layout', 
        loadComponent: () => import('./features/forms/layout/layout.component').then(m => m.FormLayoutComponent) 
      },
      { 
        path: 'tables', 
        loadComponent: () => import('./features/tables/tables.component').then(m => m.TablesComponent) 
      },
      { 
        path: 'settings', 
        loadComponent: () => import('./features/settings/settings.component').then(m => m.SettingsComponent) 
      },
      { 
        path: 'ui/alerts', 
        loadComponent: () => import('./features/ui/alerts/alerts.component').then(m => m.AlertsComponent) 
      },
      { 
        path: 'ui/buttons', 
        loadComponent: () => import('./features/ui/buttons/buttons.component').then(m => m.ButtonsComponent) 
      },
      { 
        path: 'ui/advanced', 
        loadComponent: () => import('./features/ui/advanced/advanced.component').then(m => m.AdvancedUIComponent) 
      },
      { 
        path: 'charts', 
        loadComponent: () => import('./features/charts/charts.component').then(m => m.ChartsComponent) 
      },
      { 
        path: 'inbox', 
        loadComponent: () => import('./features/inbox/inbox.component').then(m => m.InboxComponent) 
      },
      { 
        path: 'messages', 
        loadComponent: () => import('./features/messages/messages.component').then(m => m.MessagesComponent) 
      },
      { 
        path: 'invoices', 
        loadComponent: () => import('./features/invoices/invoices.component').then(m => m.InvoicesComponent) 
      },
    ],
  },
  { 
    path: 'auth/signin', 
    loadComponent: () => import('./features/auth/signin/signin.component').then(m => m.SigninComponent) 
  },
  { 
    path: 'auth/signup', 
    loadComponent: () => import('./features/auth/signup/signup.component').then(m => m.SignupComponent) 
  },
  { path: '**', redirectTo: 'dashboard/ecommerce' }
];
