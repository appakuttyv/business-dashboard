import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card" [ngClass]="customClass">
      <div class="card-header" *ngIf="title">
        <h3 class="card-title">{{ title }}</h3>
        <ng-content select="[header-actions]"></ng-content>
      </div>
      <div class="card-body">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: [`
    .card {
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: 12px;
      box-shadow: var(--shadow-premium);
      overflow: hidden;
      transition: background 0.3s, border 0.3s;
    }
    .card-header {
      padding: var(--sp-6) var(--sp-6);
      border-bottom: 1px solid var(--border);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .card-title {
      font-size: 1.125rem;
      font-weight: 700;
      color: var(--text-main);
    }
    .card-body {
      padding: var(--sp-6);
    }
  `]
})
export class CardComponent {
  @Input() title: string = '';
  @Input() customClass: string = '';
}
