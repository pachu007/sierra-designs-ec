import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

// GA4 conversion event: fires on every click on a WhatsApp link (wa.me).
// Mark "whatsapp_click" as a Key event in GA4 (Admin > Key events) so it counts as a lead.
document.addEventListener(
  'click',
  (event) => {
    const target = event.target as Element | null;
    const link = target?.closest?.('a[href*="wa.me"]') as HTMLAnchorElement | null;
    if (!link || typeof window.gtag !== 'function') return;

    let message = '';
    try {
      message = new URL(link.href).searchParams.get('text') ?? '';
    } catch {
      // ignore malformed URLs
    }

    window.gtag('event', 'whatsapp_click', {
      link_text: (link.textContent ?? '').trim().slice(0, 80),
      message_text: message.slice(0, 100),
      section: link.closest('section')?.id || 'header_or_footer',
      page_path: window.location.pathname,
    });
  },
  true,
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
