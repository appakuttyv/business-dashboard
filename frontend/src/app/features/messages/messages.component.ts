import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from '../../shared/components/breadcrumb/breadcrumb.component';
import { CardComponent } from '../../shared/components/card/card.component';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [CommonModule, BreadcrumbComponent, CardComponent],
  template: `
    <app-breadcrumb pageTitle="Messages"></app-breadcrumb>

    <div class="chat-wrapper">
       <!-- 1. Contacts Sidebar -->
       <div class="chat-sidebar">
          <div class="search-wrap">
             <i class="fa-solid fa-magnifying-glass"></i>
             <input type="text" placeholder="Search contacts...">
          </div>
          
          <div class="contacts-list scroll-custom">
             <div *ngFor="let contact of contacts" class="contact-item" [class.active]="contact.active">
                <div class="avatar-wrap">
                   <img [src]="contact.avatar" alt="contact">
                   <span class="status-dot" [class.online]="contact.online"></span>
                </div>
                <div class="contact-info">
                   <p class="name">{{ contact.name }}</p>
                   <p class="last">{{ contact.lastMessage }}</p>
                </div>
                <div class="meta" *ngIf="contact.unread">
                   <span class="badge">{{ contact.unread }}</span>
                </div>
             </div>
          </div>
       </div>

       <!-- 2. Chat Area -->
       <div class="chat-area">
          <div class="chat-header">
             <div class="header-user">
                <div class="avatar-wrap">
                   <img [src]="contacts[0].avatar" alt="contact">
                   <span class="status-dot online"></span>
                </div>
                <div class="info">
                   <p class="name">{{ contacts[0].name }}</p>
                   <p class="status">Online</p>
                </div>
             </div>
             <div class="header-actions">
                <button><i class="fa-solid fa-phone"></i></button>
                <button><i class="fa-solid fa-video"></i></button>
                <button><i class="fa-solid fa-circle-info"></i></button>
             </div>
          </div>

          <div class="chat-messages scroll-custom">
             <div *ngFor="let msg of messages" class="msg-row" [class.me]="msg.me">
                <div class="msg-bubble">
                   <p>{{ msg.text }}</p>
                   <span class="time">{{ msg.time }}</span>
                </div>
             </div>
          </div>

          <div class="chat-footer">
             <button class="attach"><i class="fa-solid fa-plus"></i></button>
             <input type="text" placeholder="Type your message here...">
             <button class="send"><i class="fa-solid fa-paper-plane"></i></button>
          </div>
       </div>
    </div>
  `,
  styles: [`
    .chat-wrapper { display: grid; grid-template-columns: 320px 1fr; height: 750px; background: var(--bg-card); border: 1px solid var(--border); border-radius: 12px; overflow: hidden; }
    @media (max-width: 1024px) { .chat-wrapper { grid-template-columns: 1fr; } .chat-sidebar { display: none; } }

    .chat-sidebar { border-right: 1px solid var(--border); display: flex; flex-direction: column; }
    .search-wrap { padding: 20px; border-bottom: 1px solid var(--border); display: flex; align-items: center; gap: 10px; color: var(--text-muted); }
    .search-wrap input { border: none; outline: none; background: transparent; flex: 1; font-size: 0.875rem; color: var(--text-main); }
    
    .contacts-list { flex: 1; overflow-y: auto; }
    .contact-item { display: flex; align-items: center; gap: 12px; padding: 15px 20px; border-bottom: 1px solid var(--border); cursor: pointer; transition: var(--transition); }
    .contact-item:hover { background: var(--bg-main); }
    .contact-item.active { background: var(--primary-light); border-right: 3px solid var(--primary); }
    
    .avatar-wrap { position: relative; min-width: 48px; }
    .avatar-wrap img { width: 48px; height: 48px; border-radius: 50%; object-fit: cover; }
    .status-dot { position: absolute; bottom: 2px; right: 2px; width: 12px; height: 12px; border-radius: 50%; border: 2px solid white; background: #94a3b8; }
    .status-dot.online { background: var(--success); }

    .contact-info { flex: 1; min-width: 0; }
    .contact-info .name { font-weight: 700; font-size: 0.875rem; color: var(--text-main); }
    .contact-info .last { font-size: 0.75rem; color: var(--text-muted); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; margin-top: 2px; }
    .meta .badge { background: var(--primary); color: white; padding: 2px 6px; border-radius: 99px; font-size: 10px; font-weight: 700; }

    .chat-area { display: flex; flex-direction: column; background: #F9FAFB; }
    .dark .chat-area { background: #1a222c; }
    
    .chat-header { padding: 15px 25px; background: var(--bg-card); display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border); }
    .header-user { display: flex; align-items: center; gap: 12px; }
    .header-user .name { font-weight: 700; font-size: 1rem; }
    .header-user .status { font-size: 0.75rem; color: var(--success); }
    .header-actions { display: flex; gap: 10px; }
    .header-actions button { width: 36px; height: 36px; border: none; background: transparent; color: var(--text-muted); cursor: pointer; font-size: 1.125rem; }

    .chat-messages { flex: 1; padding: 30px; overflow-y: auto; display: flex; flex-direction: column; gap: 20px; }
    .msg-row { display: flex; }
    .msg-row.me { justify-content: flex-end; }
    .msg-bubble { max-width: 70%; padding: 12px 18px; border-radius: 12px 12px 12px 0; background: var(--bg-card); box-shadow: 0 2px 4px rgba(0,0,0,0.05); }
    .me .msg-bubble { background: var(--primary); color: white; border-radius: 12px 120px 0 12px; }
    .msg-bubble p { font-size: 0.875rem; line-height: 1.5; }
    .msg-bubble .time { font-size: 10px; opacity: 0.7; display: block; margin-top: 6px; }

    .chat-footer { padding: 20px 25px; background: var(--bg-card); display: flex; align-items: center; gap: 15px; border-top: 1px solid var(--border); }
    .chat-footer input { flex: 1; padding: 12px 20px; border: 1px solid var(--border); border-radius: 8px; outline: none; background: var(--bg-main); font-family: inherit; }
    .chat-footer button { width: 44px; height: 44px; border-radius: 8px; border: none; cursor: pointer; transition: var(--transition); }
    .chat-footer .attach { background: var(--bg-main); color: var(--text-muted); }
    .chat-footer .send { background: var(--primary); color: white; }

    .scroll-custom::-webkit-scrollbar { width: 5px; }
    .scroll-custom::-webkit-scrollbar-thumb { background: var(--border-strong); border-radius: 10px; }
  `]
})
export class MessagesComponent {
  contacts = [
    { name: 'Appakutty V', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Appakutty', lastMessage: 'The dashboard is looking amazing!', unread: 2, online: true, active: true },
    { name: 'Sara Desing', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sara', lastMessage: 'Can you update the charts?', unread: 0, online: false },
    { name: 'John Doe', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John', lastMessage: 'Let\'s meeting at 3 PM', unread: 0, online: true },
    { name: 'Vortex Bot', avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=Vortex', lastMessage: 'System alert: 5 new issues', unread: 1, online: true },
  ];

  messages = [
    { text: 'Hi Appakutty, how is the dashboard replication going?', time: '10:00 AM', me: false },
    { text: 'It\'s going great! I have implemented almost all pages.', time: '10:05 AM', me: true },
    { text: 'I just finished the Inbox and moved to Messages now.', time: '10:06 AM', me: true },
    { text: 'Great work. Can you make sure the mobile layout is also clean?', time: '10:10 AM', me: false },
    { text: 'Absolutely. I\'m adding responsive breakpoints as I build.', time: '10:11 AM', me: true },
  ];
}
