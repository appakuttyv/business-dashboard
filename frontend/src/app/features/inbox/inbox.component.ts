import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from '../../shared/components/breadcrumb/breadcrumb.component';
import { CardComponent } from '../../shared/components/card/card.component';

@Component({
  selector: 'app-inbox',
  standalone: true,
  imports: [CommonModule, BreadcrumbComponent, CardComponent],
  template: `
    <app-breadcrumb pageTitle="Inbox"></app-breadcrumb>

    <div class="inbox-wrapper">
       <!-- 1. Inbox Sidebar -->
       <div class="inbox-nav">
          <button class="compose-btn">Compose</button>
          
          <div class="nav-links">
             <button class="active"><i class="fa-solid fa-inbox"></i> Inbox <span>12</span></button>
             <button><i class="fa-regular fa-paper-plane"></i> Sent</button>
             <button><i class="fa-regular fa-star"></i> Starred</button>
             <button><i class="fa-regular fa-trash-can"></i> Trash</button>
             <button><i class="fa-regular fa-file"></i> Drafts <span>2</span></button>
          </div>

          <div class="labels">
             <p class="section-title">LABELS</p>
             <button><span class="dot work"></span> Work</button>
             <button><span class="dot personal"></span> Personal</button>
             <button><span class="dot social"></span> Social</button>
          </div>
       </div>

       <!-- 2. Email List -->
       <div class="email-list-wrap">
          <div class="list-header">
             <div class="search-box">
                <i class="fa-solid fa-magnifying-glass"></i>
                <input type="text" placeholder="Search emails...">
             </div>
             <div class="header-btns">
                <button><i class="fa-solid fa-rotate-right"></i></button>
                <button><i class="fa-solid fa-ellipsis-vertical"></i></button>
             </div>
          </div>

          <div class="list-content">
             <div *ngFor="let email of emails" class="email-item" [class.unread]="email.unread">
                <div class="item-meta">
                   <div class="check">
                      <input type="checkbox">
                      <span class="box"></span>
                   </div>
                   <i class="fa-regular fa-star"></i>
                </div>
                <div class="item-body">
                   <p class="sender">{{ email.sender }}</p>
                   <p class="subj">{{ email.subject }}</p>
                   <p class="snip">{{ email.snippet }}</p>
                </div>
                <div class="item-time">{{ email.time }}</div>
             </div>
          </div>
       </div>
    </div>
  `,
  styles: [`
    .inbox-wrapper { display: grid; grid-template-columns: 240px 1fr; gap: var(--sp-6); height: 800px; background: var(--bg-card); border: 1px solid var(--border); border-radius: 12px; overflow: hidden; }
    @media (max-width: 1024px) { .inbox-wrapper { grid-template-columns: 1fr; height: auto; } .inbox-nav { display: none; } }

    .inbox-nav { background: var(--bg-main); padding: 24px; border-right: 1px solid var(--border); }
    .compose-btn { width: 100%; padding: 12px; border: none; background: var(--primary); color: white; border-radius: 8px; font-weight: 700; margin-bottom: 30px; cursor: pointer; transition: var(--transition); }
    .compose-btn:hover { background: var(--primary-hover); }

    .nav-links, .labels { display: flex; flex-direction: column; gap: 4px; }
    .section-title { font-size: 0.75rem; font-weight: 700; color: var(--text-muted); padding: 20px 0 10px; }
    .nav-links button, .labels button { display: flex; align-items: center; gap: 12px; padding: 10px 12px; border: none; background: transparent; color: var(--text-muted); font-size: 0.875rem; font-weight: 500; border-radius: 6px; cursor: pointer; text-align: left; }
    .nav-links button span { margin-left: auto; width: 22px; height: 22px; background: var(--primary-light); color: var(--primary); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 10px; font-weight: 700; }
    .nav-links button i { width: 16px; }
    .nav-links button.active { background: var(--bg-card); color: var(--primary); }

    .dot { width: 10px; height: 10px; border-radius: 50%; }
    .dot.work { background: var(--primary); }
    .dot.personal { background: var(--success); }
    .dot.social { background: var(--warning); }

    .email-list-wrap { display: flex; flex-direction: column; }
    .list-header { padding: 16px 24px; border-bottom: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center; }
    .search-box { display: flex; align-items: center; gap: 10px; background: var(--bg-main); padding: 8px 16px; border-radius: 8px; width: 300px; color: var(--text-muted); }
    .search-box input { border: none; outline: none; background: transparent; font-size: 0.875rem; flex: 1; color: var(--text-main); }
    .header-btns button { width: 32px; height: 32px; border: 1px solid var(--border); background: transparent; border-radius: 6px; color: var(--text-muted); cursor: pointer; }

    .list-content { flex: 1; overflow-y: auto; }
    .email-item { display: flex; align-items: flex-start; gap: 20px; padding: 20px 24px; border-bottom: 1px solid var(--border); transition: var(--transition); cursor: pointer; }
    .email-item:hover { background: var(--bg-main); }
    .email-item.unread { background: white; font-weight: 700; border-left: 4px solid var(--primary); }
    .email-item.unread .subj { color: var(--text-main); }
    
    .item-meta { display: flex; align-items: center; gap: 12px; color: var(--text-muted); margin-top: 4px; }
    .check { position: relative; width: 16px; height: 16px; }
    .check input { opacity: 0; position: absolute; }
    .box { position: absolute; width:16px; height: 16px; border: 1px solid var(--border-strong); border-radius: 3px; top:0; left:0; }
    .item-body { flex: 1; display: flex; flex-direction: column; gap: 4px; overflow: hidden; }
    .sender { font-size: 0.875rem; }
    .subj { font-size: 0.875rem; color: var(--text-main); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .snip { font-size: 0.875rem; color: var(--text-muted); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .item-time { font-size: 0.75rem; color: var(--text-muted); margin-top: 4px; }
  `]
})
export class InboxComponent {
  emails = [
    { sender: 'Appakutty V', subject: 'Project Milestone Reached', snippet: 'The replication is going smoothly. Check out the latest dashboards...', time: '10:45 AM', unread: true },
    { sender: 'GitHub', subject: 'Security alert: new device detected', snippet: 'A new login from Chrome on Windows was detected for your account...', time: '8:20 AM', unread: true },
    { sender: 'Vercel Team', subject: 'Deployment Successful', snippet: 'Your latest push to main has been deployed successfully. Preview here...', time: 'Yesterday', unread: false },
    { sender: 'Slack Notification', subject: 'New message from General', snippet: 'There are several new messages waiting for you in the #general channel...', time: 'Oct 8', unread: false },
  ];
}
