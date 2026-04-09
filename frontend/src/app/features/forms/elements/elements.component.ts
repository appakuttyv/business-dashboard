import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';
import { CardComponent } from '../../../shared/components/card/card.component';

@Component({
  selector: 'app-form-elements',
  standalone: true,
  imports: [CommonModule, BreadcrumbComponent, CardComponent],
  template: `
    <app-breadcrumb pageTitle="Form Elements"></app-breadcrumb>

    <div class="forms-grid">
      <!-- Input Fields -->
      <div class="column">
        <app-card title="Input Fields">
          <div class="form-container">
            <div class="form-group">
              <label>Default Input</label>
              <input type="text" placeholder="Default Input" class="form-input">
            </div>

            <div class="form-group">
              <label>Active Input</label>
              <input type="text" placeholder="Active Input" class="form-input active">
            </div>

            <div class="form-group">
              <label>Disabled Input</label>
              <input type="text" placeholder="Disabled Input" class="form-input" disabled>
            </div>
          </div>
        </app-card>

        <app-card title="Toggle Switch Inputs" class="mt-8">
           <div class="toggle-container">
              <div class="toggle-row">
                 <span>Switch One</span>
                 <label class="switch">
                    <input type="checkbox" checked>
                    <span class="slider"></span>
                 </label>
              </div>
              <div class="toggle-row">
                 <span>Switch Two</span>
                 <label class="switch square">
                    <input type="checkbox">
                    <span class="slider"></span>
                 </label>
              </div>
           </div>
        </app-card>
      </div>

      <!-- Select & File -->
      <div class="column">
        <app-card title="Select Inputs">
          <div class="form-container">
            <div class="form-group">
              <label>Select Country</label>
              <div class="select-wrapper">
                 <select class="form-input">
                    <option>USA</option>
                    <option>UK</option>
                    <option>India</option>
                 </select>
                 <i class="fa-solid fa-chevron-down"></i>
              </div>
            </div>

            <div class="form-group">
              <label>Multi Select</label>
              <div class="multi-select-mock">
                 <span class="tag">USA <i class="fa-solid fa-xmark"></i></span>
                 <span class="tag">India <i class="fa-solid fa-xmark"></i></span>
                 <i class="fa-solid fa-chevron-down ml-auto"></i>
              </div>
            </div>
          </div>
        </app-card>

        <app-card title="File Upload" class="mt-8">
           <div class="form-container">
              <div class="file-input-wrapper">
                 <label>Attach file</label>
                 <div class="file-custom">
                    <input type="file" id="file-upload" hidden>
                    <label for="file-upload" class="file-btn">Choose File</label>
                    <span class="file-name">No file chosen</span>
                 </div>
              </div>
           </div>
        </app-card>
      </div>
    </div>
  `,
  styles: [`
    .forms-grid { display: grid; grid-template-columns: 1fr 1fr; gap: var(--sp-8); }
    @media (max-width: 1024px) { .forms-grid { grid-template-columns: 1fr; } }
    
    .form-container { display: flex; flex-direction: column; gap: var(--sp-6); }
    .form-group { display: flex; flex-direction: column; gap: 8px; }
    .form-group label { font-size: 0.875rem; font-weight: 500; color: var(--text-main); }
    
    .form-input { width: 100%; background: var(--bg-main); border: 1px solid var(--border); padding: 12px 16px; border-radius: 8px; outline: none; font-family: inherit; color: var(--text-main); transition: var(--transition); }
    .form-input:focus, .form-input.active { border-color: var(--primary); box-shadow: 0 0 0 4px var(--primary-light); }
    .form-input:disabled { background: var(--bg-main); cursor: not-allowed; opacity: 0.6; }

    .select-wrapper { position: relative; }
    .select-wrapper select { appearance: none; }
    .select-wrapper i { position: absolute; right: 16px; top: 50%; transform: translateY(-50%); color: var(--text-muted); pointer-events: none; }

    .multi-select-mock { background: var(--bg-main); border: 1px solid var(--border); padding: 8px 16px; border-radius: 8px; display: flex; gap: 8px; align-items: center; min-height: 46px; }
    .tag { background: white; border: 1px solid var(--border); padding: 2px 8px; border-radius: 4px; font-size: 0.75rem; display: flex; align-items: center; gap: 6px; }
    .tag i { color: var(--text-muted); font-size: 0.65rem; cursor: pointer; }
    .ml-auto { margin-left: auto; color: var(--text-muted); }

    /* Switch toggle */
    .toggle-container { display: flex; flex-direction: column; gap: var(--sp-4); }
    .toggle-row { display: flex; justify-content: space-between; align-items: center; }
    .switch { position: relative; display: inline-block; width: 48px; height: 24px; }
    .switch input { opacity: 0; width: 0; height: 0; }
    .slider { position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background-color: var(--border-strong); transition: .4s; border-radius: 34px; }
    .slider:before { position: absolute; content: ""; height: 18px; width: 18px; left: 3px; bottom: 3px; background-color: white; transition: .4s; border-radius: 50%; }
    input:checked + .slider { background-color: var(--primary); }
    input:checked + .slider:before { transform: translateX(24px); }
    .switch.square .slider { border-radius: 4px; }
    .switch.square .slider:before { border-radius: 2px; }

    /* File Input */
    .file-input-wrapper { display: flex; flex-direction: column; gap: 12px; }
    .file-custom { border: 1px solid var(--border); border-radius: 8px; padding: 4px; display: flex; align-items: center; gap: 12px; background: var(--bg-main); }
    .file-btn { background: var(--primary); color: white; padding: 6px 12px; border-radius: 6px; font-size: 0.875rem; font-weight: 500; cursor: pointer; }
    .file-name { color: var(--text-muted); font-size: 0.875rem; }

    .mt-8 { margin-top: var(--sp-8); }
  `]
})
export class ElementsComponent {}
