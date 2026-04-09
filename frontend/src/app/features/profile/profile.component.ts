import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from '../../shared/components/breadcrumb/breadcrumb.component';
import { CardComponent } from '../../shared/components/card/card.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, BreadcrumbComponent, CardComponent],
  template: `
    <app-breadcrumb pageTitle="Profile"></app-breadcrumb>

    <div class="profile-wrapper">
      <app-card [customClass]="'profile-card no-padding'">
        <!-- Cover Photo -->
        <div class="cover-photo">
          <img src="https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80&w=1200&h=300" alt="cover">
          <button class="edit-cover"><i class="fa-solid fa-camera"></i> Edit</button>
        </div>

        <!-- User Info Header -->
        <div class="profile-header">
           <div class="avatar-container">
             <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Appakutty" alt="avatar">
             <button class="edit-avatar"><i class="fa-solid fa-camera"></i></button>
           </div>
           
           <div class="meta">
             <h2 class="name">Appakutty V</h2>
             <p class="role">Full Stack Developer</p>
           </div>

           <div class="stats-row">
              <div class="stat">
                 <span class="val">259</span>
                 <span class="lab">Posts</span>
              </div>
              <div class="divider"></div>
              <div class="stat">
                 <span class="val">129K</span>
                 <span class="lab">Followers</span>
              </div>
              <div class="divider"></div>
              <div class="stat">
                 <span class="val">2K</span>
                 <span class="lab">Following</span>
              </div>
           </div>
        </div>

        <!-- About Section -->
        <div class="profile-body">
           <h3 class="section-title">About Me</h3>
           <p class="bio">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere fermentum urna, eu condimentum mauris tempus ut. Donec fermentum blandit aliquet. Etiam at efficitur justo, ut tristique sem.
           </p>
           
           <h3 class="section-title">Follow me on</h3>
           <div class="social-links">
              <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
              <a href="#"><i class="fa-brands fa-twitter"></i></a>
              <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
              <a href="#"><i class="fa-brands fa-dribbble"></i></a>
              <a href="#"><i class="fa-brands fa-github"></i></a>
           </div>
        </div>
      </app-card>
    </div>
  `,
  styles: [`
    .profile-wrapper { max-width: 1000px; margin: 0 auto; }
    ::ng-deep .profile-card.no-padding .card-body { padding: 0; }
    
    .cover-photo { height: 260px; position: relative; overflow: hidden; border-radius: 10px 10px 0 0; }
    .cover-photo img { width: 100%; height: 100%; object-fit: cover; }
    .edit-cover { position: absolute; bottom: 20px; right: 20px; background: var(--primary); color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer; font-size: 0.875rem; font-weight: 500; display: flex; align-items: center; gap: 8px; }

    .profile-header { display: flex; flex-direction: column; align-items: center; margin-top: -60px; position: relative; z-index: 10; padding-bottom: 30px; border-bottom: 1px solid var(--border); }
    .avatar-container { width: 140px; height: 140px; border-radius: 50%; border: 4px solid var(--bg-card); position: relative; background: var(--bg-card); overflow: visible; }
    .avatar-container img { width: 100%; height: 100%; border-radius: 50%; object-fit: cover; }
    .edit-avatar { position: absolute; bottom: 5px; right: 5px; width: 34px; height: 34px; background: var(--primary); color: white; border: 2px solid var(--bg-card); border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; }

    .meta { text-align: center; margin-top: 16px; margin-bottom: 24px; }
    .meta .name { font-size: 1.5rem; font-weight: 700; color: var(--text-main); }
    .meta .role { color: var(--text-muted); font-weight: 500; font-size: 0.875rem; }

    .stats-row { display: flex; align-items: center; gap: 40px; background: var(--bg-main); padding: 12px 30px; border-radius: 10px; border: 1px solid var(--border); }
    .stat { display: flex; flex-direction: column; align-items: center; min-width: 80px; }
    .stat .val { font-size: 1.125rem; font-weight: 700; color: var(--text-main); }
    .stat .lab { font-size: 0.75rem; color: var(--text-muted); }
    .divider { height: 30px; width: 1px; background: var(--border); }

    .profile-body { padding: 40px; text-align: center; }
    .section-title { font-size: 1.125rem; font-weight: 700; margin-bottom: 16px; margin-top: 32px; }
    .section-title:first-child { margin-top: 0; }
    .bio { color: var(--text-muted); line-height: 1.8; max-width: 600px; margin: 0 auto; }

    .social-links { display: flex; justify-content: center; gap: 20px; margin-top: 20px; }
    .social-links a { width: 40px; height: 40px; border-radius: 50%; background: var(--bg-main); border: 1px solid var(--border); display: flex; align-items: center; justify-content: center; color: var(--text-muted); font-size: 1.125rem; transition: var(--transition); }
    .social-links a:hover { background: var(--primary); color: white; border-color: var(--primary); }

    @media (max-width: 640px) { .stats-row { gap: 20px; } .stat { min-width: 60px; } }
  `]
})
export class ProfileComponent {}
