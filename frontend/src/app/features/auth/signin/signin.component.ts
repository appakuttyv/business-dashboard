import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="auth-wrapper">
      <div class="auth-card">
        <div class="auth-left">
           <div class="logo">
              <i class="fa-solid fa-bolt"></i>
              <span>Vortex.</span>
           </div>
           <p class="tagline">The most popular Angular dashboard template for your next project.</p>
           <img src="https://api.dicebear.com/7.x/shapes/svg?seed=auth" alt="shape" class="shape">
        </div>

        <div class="auth-right">
           <div class="form-header">
              <h2>Sign In to Vortex</h2>
              <p>Enter your details to login to your account.</p>
           </div>

           <form class="auth-form">
              <div class="form-group">
                 <label>Email Address</label>
                 <div class="input-icon">
                    <i class="fa-regular fa-envelope"></i>
                    <input type="email" placeholder="Enter your email">
                 </div>
              </div>

              <div class="form-group">
                 <label>Password</label>
                 <div class="input-icon">
                    <i class="fa-solid fa-lock"></i>
                    <input type="password" placeholder="6+ Characters, 1 Capital letter">
                 </div>
              </div>

              <button type="submit" class="btn-primary">Sign In</button>
              
              <div class="divider">
                 <span>Or sign in with</span>
              </div>

              <button type="button" class="btn-social">
                 <img src="https://www.google.com/favicon.ico" alt="google">
                 Sign in with Google
              </button>

              <p class="footer-text">
                 Don't have an account? <a routerLink="/auth/signup">Sign Up</a>
              </p>
           </form>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .auth-wrapper { min-height: 100vh; display: flex; align-items: center; justify-content: center; background: var(--bg-main); padding: 20px; }
    .auth-card { width: 1000px; background: var(--bg-card); display: grid; grid-template-columns: 1fr 1fr; border-radius: 12px; overflow: hidden; box-shadow: var(--shadow-premium); border: 1px solid var(--border); }
    @media (max-width: 900px) { .auth-card { grid-template-columns: 1fr; width: 500px; } .auth-left { display: none; } }

    .auth-left { background: var(--bg-sidebar); padding: 60px; color: white; display: flex; flex-direction: column; gap: 30px; position: relative; }
    .logo { display: flex; align-items: center; gap: 12px; font-size: 1.5rem; font-weight: 700; }
    .logo i { color: var(--primary); }
    .tagline { font-size: 1.125rem; color: var(--text-muted); line-height: 1.6; }
    .shape { margin-top: auto; opacity: 0.2; }

    .auth-right { padding: 60px; display: flex; flex-direction: column; justify-content: center; }
    .form-header h2 { font-size: 1.75rem; margin-bottom: 8px; }
    .form-header p { color: var(--text-muted); margin-bottom: 40px; }

    .auth-form { display: flex; flex-direction: column; gap: 24px; }
    .form-group { display: flex; flex-direction: column; gap: 8px; }
    .form-group label { font-size: 0.875rem; font-weight: 500; }
    
    .input-icon { position: relative; border: 1px solid var(--border); border-radius: 8px; display: flex; align-items: center; padding: 0 16px; transition: var(--transition); }
    .input-icon:focus-within { border-color: var(--primary); box-shadow: 0 0 0 4px var(--primary-light); }
    .input-icon i { color: var(--text-muted); }
    .input-icon input { width: 100%; border: none; outline: none; padding: 12px; background: transparent; color: var(--text-main); font-family: inherit; }

    .btn-primary { width: 100%; background: var(--primary); color: white; border: none; padding: 14px; border-radius: 8px; font-weight: 600; cursor: pointer; transition: var(--transition); }
    .btn-primary:hover { background: var(--primary-hover); }

    .divider { position: relative; text-align: center; margin: 10px 0; }
    .divider::before { content: ''; position: absolute; left: 0; top: 50%; width: 100%; height: 1px; background: var(--border); }
    .divider span { position: relative; background: var(--bg-card); padding: 0 12px; font-size: 0.875rem; color: var(--text-muted); }

    .btn-social { width: 100%; display: flex; align-items: center; justify-content: center; gap: 12px; background: transparent; border: 1px solid var(--border); padding: 12px; border-radius: 8px; font-weight: 600; cursor: pointer; color: var(--text-main); transition: var(--transition); }
    .btn-social:hover { background: var(--bg-main); }
    .btn-social img { width: 18px; }

    .footer-text { text-align: center; font-size: 0.875rem; color: var(--text-muted); margin-top: 10px; }
    .footer-text a { color: var(--primary); font-weight: 600; }
  `]
})
export class SigninComponent {}
