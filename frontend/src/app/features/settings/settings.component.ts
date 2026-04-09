import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from '../../shared/components/breadcrumb/breadcrumb.component';
import { CardComponent } from '../../shared/components/card/card.component';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, BreadcrumbComponent, CardComponent],
  template: `
    <app-breadcrumb pageTitle="Settings"></app-breadcrumb>

    <div class="settings-grid">
      <!-- Left Column: Personal Info -->
      <div class="left-col">
        <app-card title="Personal Information">
           <form class="settings-form">
              <div class="form-row">
                 <div class="form-group">
                    <label>Full Name</label>
                    <div class="input-wrapper">
                       <i class="fa-regular fa-user"></i>
                       <input type="text" placeholder="Appakutty V" value="Appakutty V">
                    </div>
                 </div>
                 <div class="form-group">
                    <label>Phone Number</label>
                    <div class="input-wrapper">
                       <i class="fa-solid fa-phone"></i>
                       <input type="text" placeholder="+91 9876543210" value="+91 9876543210">
                    </div>
                 </div>
              </div>

              <div class="form-group">
                 <label>Email Address</label>
                 <div class="input-wrapper">
                    <i class="fa-regular fa-envelope"></i>
                    <input type="email" placeholder="admin@appakutty.dev" value="admin@appakutty.dev">
                 </div>
              </div>

              <div class="form-group">
                 <label>Username</label>
                 <div class="input-wrapper">
                    <i class="fa-solid fa-at"></i>
                    <input type="text" placeholder="appakuttyv" value="appakuttyv">
                 </div>
              </div>

              <div class="form-group">
                 <label>BIO</label>
                 <textarea rows="5" placeholder="Write your bio here..."></textarea>
              </div>

              <div class="form-actions">
                 <button type="button" class="btn-cancel">Cancel</button>
                 <button type="submit" class="btn-save">Save Changes</button>
              </div>
           </form>
        </app-card>
      </div>

      <!-- Right Column: Profile Photo -->
      <div class="right-col">
         <app-card title="Your Photo">
            <div class="photo-settings">
               <div class="current-photo">
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Appakutty" alt="avatar">
               </div>
               <div class="photo-info">
                  <p class="edit-btn">Edit your photo</p>
                  <p class="ext"><span>Delete</span> <span>Update</span></p>
               </div>
               
               <div class="upload-zone">
                  <input type="file" id="file" hidden>
                  <label for="file" class="upload-label">
                     <i class="fa-solid fa-cloud-arrow-up"></i>
                     <p><span>Click to upload</span> or drag and drop</p>
                     <p class="sub">SVG, PNG, JPG (max. 800x800px)</p>
                  </label>
               </div>

               <div class="form-actions full">
                 <button type="button" class="btn-cancel">Cancel</button>
                 <button type="submit" class="btn-save">Save</button>
              </div>
            </div>
         </app-card>
      </div>
    </div>
  `,
  styles: [`
    .settings-grid { display: grid; grid-template-columns: 1.5fr 1fr; gap: var(--sp-6); align-items: start; }
    @media (max-width: 1024px) { .settings-grid { grid-template-columns: 1fr; } }
    
    .settings-form { display: flex; flex-direction: column; gap: var(--sp-5); }
    .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: var(--sp-6); }
    @media (max-width: 640px) { .form-row { grid-template-columns: 1fr; } }

    .form-group { display: flex; flex-direction: column; gap: 8px; }
    .form-group label { font-size: 0.875rem; font-weight: 500; color: var(--text-main); }
    
    .input-wrapper { position: relative; background: var(--bg-main); border: 1px solid var(--border); border-radius: 8px; display: flex; align-items: center; padding: 0 16px; transition: var(--transition); }
    .input-wrapper:focus-within { border-color: var(--primary); box-shadow: 0 0 0 3px var(--primary-light); }
    .input-wrapper i { color: var(--text-muted); font-size: 1rem; width: 20px; }
    .input-wrapper input { background: transparent; border: none; outline: none; padding: 12px; flex: 1; color: var(--text-main); font-family: inherit; }

    textarea { background: var(--bg-main); border: 1px solid var(--border); border-radius: 8px; outline: none; padding: 12px; color: var(--text-main); font-family: inherit; resize: vertical; }
    textarea:focus { border-color: var(--primary); box-shadow: 0 0 0 3px var(--primary-light); }

    .form-actions { display: flex; justify-content: flex-end; gap: 12px; margin-top: 20px; }
    .btn-cancel { background: transparent; border: 1px solid var(--border); padding: 10px 24px; border-radius: 6px; color: var(--text-main); font-weight: 600; cursor: pointer; transition: var(--transition); }
    .btn-cancel:hover { background: var(--bg-main); }
    .btn-save { background: var(--primary); border: none; padding: 10px 24px; border-radius: 6px; color: white; font-weight: 600; cursor: pointer; transition: var(--transition); }
    .btn-save:hover { background: var(--primary-hover); }

    /* Photo column styles */
    .photo-settings { display: flex; flex-direction: column; align-items: center; gap: 24px; text-align: center; }
    .current-photo { width: 100px; height: 100px; border-radius: 50%; background: var(--bg-main); border: 1px solid var(--border); overflow: hidden; }
    .current-photo img { width: 100%; height: 100%; object-fit: cover; }
    .edit-btn { font-weight: 600; font-size: 0.875rem; }
    .ext { font-size: 0.75rem; color: var(--text-muted); display: flex; gap: 12px; }
    .ext span { cursor: pointer; }
    .ext span:hover { color: var(--primary); }

    .upload-zone { width: 100%; }
    .upload-label { display: flex; flex-direction: column; align-items: center; gap: 12px; border: 2px dashed var(--border); padding: 40px 20px; border-radius: 12px; cursor: pointer; transition: var(--transition); background: var(--bg-main); }
    .upload-label:hover { border-color: var(--primary); background: var(--primary-light); }
    .upload-label i { font-size: 2rem; color: var(--primary); }
    .upload-label p span { color: var(--primary); font-weight: 600; }
    .upload-label .sub { font-size: 0.75rem; color: var(--text-muted); }
    
    .form-actions.full { width: 100%; }
    .form-actions.full button { flex: 1; }
  `]
})
export class SettingsComponent {}
