import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';
import { CardComponent } from '../../../shared/components/card/card.component';

@Component({
  selector: 'app-form-layout',
  standalone: true,
  imports: [CommonModule, BreadcrumbComponent, CardComponent],
  template: `
    <app-breadcrumb pageTitle="Form Layout"></app-breadcrumb>

    <div class="forms-grid">
      <!-- Contact Form -->
      <div class="column">
        <app-card title="Contact Form">
          <form class="stack-form">
            <div class="form-row">
               <div class="form-group">
                  <label>First Name</label>
                  <input type="text" placeholder="Enter first name" class="form-input">
               </div>
               <div class="form-group">
                  <label>Last Name</label>
                  <input type="text" placeholder="Enter last name" class="form-input">
               </div>
            </div>

            <div class="form-group">
               <label>Email Address</label>
               <input type="email" placeholder="Enter your email" class="form-input">
            </div>

            <div class="form-group">
               <label>Subject</label>
               <input type="text" placeholder="Enter subject" class="form-input">
            </div>

            <div class="form-group">
               <label>Message</label>
               <textarea rows="6" placeholder="Type your message" class="form-input"></textarea>
            </div>

            <button type="submit" class="btn-primary-full">Send Message</button>
          </form>
        </app-card>
      </div>

      <!-- Sign In Form -->
      <div class="column">
        <app-card title="Sign In Form">
          <form class="stack-form">
            <div class="form-group">
               <label>Email</label>
               <input type="email" placeholder="Enter your email" class="form-input">
            </div>

            <div class="form-group">
               <label>Password</label>
               <input type="password" placeholder="Enter password" class="form-input">
            </div>

            <div class="form-options">
               <label class="check-container">
                  <input type="checkbox">
                  <span class="checkmark"></span>
                  Remember me
               </label>
               <a href="#" class="forgot">Forgot Password?</a>
            </div>

            <button type="submit" class="btn-primary-full">Sign In</button>
          </form>
        </app-card>

        <app-card title="Sign Up Form" class="mt-8">
          <form class="stack-form">
            <div class="form-group">
               <label>Full Name</label>
               <input type="text" placeholder="Enter full name" class="form-input">
            </div>
            <div class="form-group">
               <label>Email</label>
               <input type="email" placeholder="Enter email" class="form-input">
            </div>
            <div class="form-group">
               <label>Password</label>
               <input type="password" placeholder="Create password" class="form-input">
            </div>
            <div class="form-group">
               <label>Confirm Password</label>
               <input type="password" placeholder="Re-enter password" class="form-input">
            </div>
            <button type="submit" class="btn-primary-full">Create Account</button>
          </form>
        </app-card>
      </div>
    </div>
  `,
  styles: [`
    .forms-grid { display: grid; grid-template-columns: 1.5fr 1fr; gap: var(--sp-8); }
    @media (max-width: 1024px) { .forms-grid { grid-template-columns: 1fr; } }
    
    .stack-form { display: flex; flex-direction: column; gap: var(--sp-6); }
    .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: var(--sp-6); }
    @media (max-width: 640px) { .form-row { grid-template-columns: 1fr; } }

    .form-group { display: flex; flex-direction: column; gap: 8px; }
    .form-group label { font-size: 0.875rem; font-weight: 500; color: var(--text-main); }
    
    .form-input { width: 100%; background: var(--bg-main); border: 1px solid var(--border); padding: 12px 16px; border-radius: 8px; outline: none; font-family: inherit; color: var(--text-main); transition: var(--transition); }
    .form-input:focus { border-color: var(--primary); box-shadow: 0 0 0 4px var(--primary-light); }
    
    textarea { resize: vertical; }

    .btn-primary-full { width: 100%; background: var(--primary); color: white; border: none; padding: 12px; border-radius: 8px; font-weight: 600; cursor: pointer; transition: var(--transition); }
    .btn-primary-full:hover { background: var(--primary-hover); }

    .form-options { display: flex; justify-content: space-between; align-items: center; }
    .forgot { color: var(--primary); font-size: 0.875rem; font-weight: 500; }

    .check-container { display: flex; align-items: center; gap: 8px; font-size: 0.875rem; cursor: pointer; color: var(--text-muted); }
    .checkmark { width: 18px; height: 18px; border: 1px solid var(--border-strong); border-radius: 4px; position: relative; }
    input:checked ~ .checkmark { background: var(--primary); border-color: var(--primary); }
    input:checked ~ .checkmark::after { content: '✔'; position: absolute; color: white; font-size: 10px; top: 50%; left: 50%; transform: translate(-50%, -50%); }
    .check-container input { display: none; }

    .mt-8 { margin-top: var(--sp-8); }
  `]
})
export class FormLayoutComponent {}
