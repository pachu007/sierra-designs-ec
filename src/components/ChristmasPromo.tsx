import React, { useEffect, useState } from 'react';
import { Gift, Check, X, MessageSquare } from 'lucide-react';
import { NAVIDAD } from '../data';

const POPUP_KEY = 'sd_navidad_popup_closed';

function seasonState() {
  const now = Date.now();
  const active = now < new Date(NAVIDAD.endsAt).getTime();
  const beforeDeadline = now < new Date(NAVIDAD.orderDeadlineEndsAt).getTime();
  return {
    active,
    deadlineText: beforeDeadline
      ? 'Pedidos para Navidad hasta el 15 de diciembre. Después, entrega en enero.'
      : 'Ya pasó el último día para Navidad: los pedidos nuevos se entregan en enero.'
  };
}

export const ChristmasSection: React.FC = () => {
  const { active, deadlineText } = seasonState();
  const [picked, setPicked] = useState<number[]>([]);
  if (!active) return null;

  const toggle = (n: number) =>
    setPicked((prev) => {
      if (prev.includes(n)) return prev.filter((x) => x !== n);
      if (prev.length >= 2) return [prev[1], n];
      return [...prev, n];
    });

  const nameOf = (n: number) => NAVIDAD.models.find((m) => m.n === n)?.name ?? '';
  const message =
    picked.length === 2
      ? `Hola! Quiero la promo de Navidad: Modelo ${picked[0]} (${nameOf(picked[0])}) y Modelo ${picked[1]} (${nameOf(picked[1])}). ¿Cómo hacemos el pedido?`
      : 'Hola! Quiero ver la Colección Navideña (2 bandejas por $20 + tablita de regalo)';

  return (
    <section id="navidad" className="bg-verde-oscuro text-crema py-16 px-4 sm:px-6 lg:px-8 border-b border-dorado/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-dorado block mb-2">Colección Navideña</span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
            2 bandejas por ${NAVIDAD.promoPrice} y una tablita de picar de regalo
          </h2>
          <div className="w-16 h-1 bg-dorado mx-auto rounded-full mb-4" />
          <p className="text-crema/85 text-sm sm:text-base leading-relaxed">
            Elige cualquier 2 de los {NAVIDAD.models.length} modelos (${NAVIDAD.priceEach} cada una) y te regalamos una tablita de picar. Cada bandeja mide {NAVIDAD.size}. {NAVIDAD.materialNote}
          </p>
          <p className="mt-3 inline-block bg-dorado text-negro-profundo text-xs sm:text-sm font-bold rounded-full px-4 py-1.5">
            {deadlineText}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4 mb-8 [&>*:last-child:nth-child(odd)]:col-span-2 [&>*:last-child:nth-child(odd)]:w-1/2 [&>*:last-child:nth-child(odd)]:justify-self-center md:[&>*:last-child:nth-child(odd)]:col-span-1 md:[&>*:last-child:nth-child(odd)]:w-auto">
          {NAVIDAD.models.map((m) => {
            const on = picked.includes(m.n);
            return (
              <button
                key={m.n}
                type="button"
                onClick={() => toggle(m.n)}
                aria-pressed={on}
                className={`relative text-left rounded-xl overflow-hidden bg-blanco text-texto-oscuro border-2 transition-all duration-200 cursor-pointer ${
                  on ? 'border-dorado ring-2 ring-dorado scale-[1.02]' : 'border-transparent hover:border-dorado/60'
                }`}
              >
                <img
                  src={NAVIDAD.image(m.n)}
                  alt={`Modelo ${m.n}: bandeja navideña de madera de laurel con forma de ${m.name.toLowerCase()}, ${NAVIDAD.size}`}
                  className="w-full aspect-[4/3] object-cover"
                  loading="lazy"
                  width={900}
                  height={672}
                />
                {on && (
                  <span className="absolute top-2 right-2 bg-dorado text-negro-profundo rounded-full p-1">
                    <Check className="w-4 h-4" />
                  </span>
                )}
                <div className="p-2.5">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-verde-oscuro font-bold">Modelo {m.n}</p>
                  <p className="font-display text-sm font-extrabold leading-tight">{m.name}</p>
                  <p className="text-[11px] text-texto-oscuro/70 leading-snug mt-0.5">{m.detail}</p>
                </div>
              </button>
            );
          })}
        </div>

        <div className="text-center">
          <p className="text-sm mb-3 min-h-[1.25rem]" aria-live="polite">
            {picked.length === 0 && 'Toca 2 modelos para armar tu promo.'}
            {picked.length === 1 && `Elegiste el Modelo ${picked[0]}. Elige 1 más.`}
            {picked.length === 2 && `Tu promo: Modelo ${picked[0]} + Modelo ${picked[1]} = $${NAVIDAD.promoPrice}, con tablita de regalo.`}
          </p>
          <a
            href={NAVIDAD.waLink(message)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-dorado hover:bg-dorado-hover text-negro-profundo font-bold text-sm px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-md shadow-black/20 active:scale-95"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>{picked.length === 2 ? 'Pedir mi promo por WhatsApp' : 'Preguntar por la promo'}</span>
          </a>
          <p className="text-[11px] text-crema/60 mt-4 max-w-xl mx-auto">
            {NAVIDAD.illustrativeNote} Envío garantizado; el costo depende de tu ciudad y te lo confirmamos antes de que pagues.
          </p>
        </div>
      </div>
    </section>
  );
};

export const ChristmasPopup: React.FC = () => {
  const { active, deadlineText } = seasonState();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!active) return;
    let closed = false;
    try { closed = sessionStorage.getItem(POPUP_KEY) === '1'; } catch { /* storage may be unavailable */ }
    if (closed) return;
    const t = window.setTimeout(() => setOpen(true), 6000);
    return () => window.clearTimeout(t);
  }, [active]);

  if (!active || !open) return null;

  const close = () => {
    setOpen(false);
    try { sessionStorage.setItem(POPUP_KEY, '1'); } catch { /* ignore */ }
  };

  return (
    <div
      role="dialog"
      aria-label="Promoción de Navidad"
      className="fixed z-50 bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:w-96 bg-negro-profundo text-crema border border-dorado/50 rounded-2xl shadow-2xl shadow-black/40 p-4"
    >
      <button
        type="button"
        onClick={close}
        aria-label="Cerrar"
        className="absolute top-2 right-2 p-1.5 rounded-full text-crema/70 hover:text-crema cursor-pointer"
      >
        <X className="w-4 h-4" />
      </button>
      <div className="flex items-start gap-3">
        <img src={NAVIDAD.image(3)} alt="" className="w-20 h-16 object-cover rounded-lg shrink-0" width={80} height={64} />
        <div className="pr-5">
          <p className="font-mono text-[10px] uppercase tracking-widest text-dorado font-bold flex items-center gap-1">
            <Gift className="w-3 h-3" /> Colección Navideña
          </p>
          <p className="font-display text-base font-extrabold leading-snug">2 bandejas por ${NAVIDAD.promoPrice} + tablita de picar de regalo</p>
        </div>
      </div>
      <p className="text-xs text-crema/75 mt-2">${NAVIDAD.priceEach} cada una, {NAVIDAD.models.length} modelos. {deadlineText}</p>
      <a
        href="#navidad"
        onClick={close}
        className="mt-3 inline-flex w-full items-center justify-center bg-dorado hover:bg-dorado-hover text-negro-profundo font-bold text-sm px-4 py-2.5 rounded-full transition-all"
      >
        Elegir mis 2 modelos
      </a>
    </div>
  );
};
