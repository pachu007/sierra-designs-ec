import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import {defineConfig, type Plugin} from 'vite';

// Single source of truth for the Spanish SEO copy: src/content/copy.es.json.
// This plugin injects title/meta, the FAQPage JSON-LD and a crawlable static text block
// (React replaces the static block once JavaScript runs) into index.html.
function seoCopy(): Plugin {
  const esc = (s: string) =>
    s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  return {
    name: 'seo-copy',
    transformIndexHtml(html) {
      const copy = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'src/content/copy.es.json'), 'utf-8'));
      const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: copy.faq.map((f: {q: string; a: string}) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: {'@type': 'Answer', text: f.a},
        })),
      };
      const faqScript =
        '<script type="application/ld+json">' +
        JSON.stringify(faqSchema).replace(/</g, '\\u003c') +
        '</script>';

      const wa = 'https://wa.me/593960053637?text=' + encodeURIComponent('Hola! Quiero cotizar un regalo personalizado en madera');
      const staticBlock =
        '<main style="max-width:48rem;margin:0 auto;padding:2rem 1rem;font-family:system-ui,sans-serif;line-height:1.6;color:#2a2a24">' +
        `<h1>${esc(copy.hero.h1)}</h1>` +
        `<p>${esc(copy.hero.answer)}</p>` +
        `<ul>${copy.hero.proof.map((p: string) => `<li>${esc(p)}</li>`).join('')}</ul>` +
        '<h2>Qué hacemos</h2>' +
        `<ul>${copy.products.map((p: {title: string; description: string}) => `<li><strong>${esc(p.title)}:</strong> ${esc(p.description)}</li>`).join('')}</ul>` +
        '<h2>Preguntas frecuentes</h2>' +
        copy.faq.map((f: {q: string; a: string}) => `<h3>${esc(f.q)}</h3><p>${esc(f.a)}</p>`).join('') +
        '<h2>Contacto</h2>' +
        `<p>Sierra Designs — ${esc(copy.address)}.</p>` +
        `<p><a href="${wa}">Cotizar por WhatsApp</a> · <a href="/en/">English version</a></p>` +
        '</main>';

      return html
        .replace('<!--SEO_TITLE-->', esc(copy.title))
        .replace('<!--SEO_DESCRIPTION-->', esc(copy.description))
        .replace('<!--SEO_OG_TITLE-->', esc(copy.ogTitle))
        .replace('<!--SEO_OG_DESCRIPTION-->', esc(copy.ogDescription))
        .replace('<!--SEO_FAQ_SCHEMA-->', faqScript)
        .replace('<!--STATIC_CONTENT-->', staticBlock);
    },
  };
}

export default defineConfig(() => {
  return {
    base: '/',
    plugins: [react(), tailwindcss(), seoCopy()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
