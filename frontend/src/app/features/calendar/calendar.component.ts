import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from '../../shared/components/breadcrumb/breadcrumb.component';
import { CardComponent } from '../../shared/components/card/card.component';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule, BreadcrumbComponent, CardComponent],
  template: `
    <app-breadcrumb pageTitle="Calendar"></app-breadcrumb>

    <div class="calendar-card">
       <div class="calendar-header">
          <div class="nav-btns">
             <button><i class="fa-solid fa-chevron-left"></i></button>
             <button><i class="fa-solid fa-chevron-right"></i></button>
          </div>
          <h2 class="current-month">October 2026</h2>
          <div class="view-options">
             <button class="active">Month</button>
             <button>Week</button>
             <button>Day</button>
          </div>
       </div>

       <div class="calendar-grid">
          <div class="weekday" *ngFor="let day of weekDays">{{ day }}</div>
          
          <div *ngFor="let date of dates" 
               class="calendar-day" 
               [class.other-month]="date.otherMonth"
               [class.today]="date.isToday">
             <span class="date-num">{{ date.day }}</span>
             
             <div class="events" *ngIf="date.events && date.events.length">
                <div *ngFor="let event of date.events" class="event" [style.background]="event.color">
                   {{ event.title }}
                </div>
             </div>
          </div>
       </div>
    </div>
  `,
  styles: [`
    .calendar-card { background: var(--bg-card); border-radius: 12px; border: 1px solid var(--border); overflow: hidden; box-shadow: var(--shadow-sm); }
    
    .calendar-header { display: flex; align-items: center; justify-content: space-between; padding: 24px 30px; border-bottom: 1px solid var(--border); }
    .nav-btns { display: flex; gap: 8px; }
    .nav-btns button { width: 32px; height: 32px; border: 1px solid var(--border); background: transparent; border-radius: 6px; color: var(--text-main); cursor: pointer; transition: var(--transition); }
    .nav-btns button:hover { background: var(--bg-main); border-color: var(--primary); color: var(--primary); }
    
    .current-month { font-size: 1.25rem; font-weight: 700; }
    
    .view-options { display: flex; border: 1px solid var(--border); border-radius: 6px; overflow: hidden; }
    .view-options button { padding: 8px 16px; border: none; background: transparent; font-size: 0.875rem; font-weight: 500; cursor: pointer; color: var(--text-main); }
    .view-options button.active { background: var(--primary); color: white; }
    .view-options button:not(.active):hover { background: var(--bg-main); }

    .calendar-grid { display: grid; grid-template-columns: repeat(7, 1fr); }
    .weekday { text-align: center; padding: 16px; font-weight: 600; color: var(--text-muted); font-size: 0.875rem; border-bottom: 1px solid var(--border); }
    
    .calendar-day { height: 120px; padding: 10px; border-right: 1px solid var(--border); border-bottom: 1px solid var(--border); position: relative; transition: var(--transition); }
    .calendar-day:nth-child(7n) { border-right: none; }
    .calendar-day:hover { background: var(--bg-main); }
    .calendar-day.other-month { opacity: 0.4; }
    .calendar-day.today { background: var(--primary-light); }
    .calendar-day.today .date-num { background: var(--primary); color: white; border-radius: 50%; width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; }

    .date-num { font-weight: 600; font-size: 0.875rem; margin-bottom: 8px; display: block; }

    .events { display: flex; flex-direction: column; gap: 4px; }
    .event { font-size: 11px; color: white; padding: 2px 6px; border-radius: 4px; font-weight: 500; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  `]
})
export class CalendarComponent {
  weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  dates = [
    { day: 27, otherMonth: true }, { day: 28, otherMonth: true }, { day: 29, otherMonth: true }, { day: 30, otherMonth: true },
    { day: 1, events: [{ title: 'Redesign UI', color: '#3C50E0' }] },
    { day: 2 }, { day: 3 }, { day: 4 }, { day: 5 },
    { day: 6, events: [{ title: 'App Development', color: '#10B981' }] },
    { day: 7 }, { day: 8 }, { day: 9 }, { day: 10 },
    { day: 11, isToday: true }, { day: 12 }, { day: 13 }, { day: 14 },
    { day: 15, events: [{ title: 'Meeting with Appakutty', color: '#8b5cf6' }] },
    { day: 16 }, { day: 17 }, { day: 18 }, { day: 19 },
    { day: 20 }, { day: 21, events: [{ title: 'Deployment', color: '#EF4444' }] },
    { day: 22 }, { day: 23 }, { day: 24 }, { day: 25 },
    { day: 26 }, { day: 27 }, { day: 28 }, { day: 29 }, 
    { day: 30 }, { day: 31 }, { day: 1, otherMonth: true }
  ];
}
