"use client";

import { useEffect, useId, useRef, useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { content } from "../lib/content";

type SimMessage = {
  from: "Tu" | "Álvaro";
  text: string;
};

const simulatedConversation: SimMessage[] = [
  {
    from: "Tu",
    text: "Hola Álvaro, me gustaría solicitar una evaluación. ¿Podemos agendar un diagnóstico técnico de 15–30 min?",
  },
  {
    from: "Álvaro",
    text: "Claro. Para partir, necesito el objetivo del proyecto y datos básicos del sitio/tarifa. Te explico alcances, plazos y supuestos de ROI sin letra chica.",
  },
  {
    from: "Tu",
    text: "Perfecto. Te comparto la información y coordinamos el siguiente paso.",
  },
];

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  const titleId = useId();
  const descriptionId = useId();
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!open) return;
    closeButtonRef.current?.focus();
  }, [open]);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <>
      <div className="fixed bottom-4 right-4 z-[55] sm:bottom-6 sm:right-6">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="group inline-flex items-center gap-3 rounded-full border border-emerald-700/10 bg-emerald-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-900/10 transition-all hover:bg-emerald-700 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          aria-haspopup="dialog"
          aria-expanded={open}
          aria-controls="whatsapp-modal"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="hidden sm:block">WhatsApp</span>
        </button>
      </div>

      {open ? (
        <div
          className="fixed inset-0 z-[60]"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          aria-describedby={descriptionId}
          id="whatsapp-modal"
        >
          <button
            type="button"
            className="absolute inset-0 cursor-default bg-slate-900/30 backdrop-blur-sm"
            aria-label="Cerrar"
            onClick={() => setOpen(false)}
          />

          <div className="pointer-events-none absolute inset-0 flex items-end justify-center p-4 sm:items-center">
            <div className="pointer-events-auto w-full max-w-lg rounded-3xl border border-slate-200/70 bg-white shadow-2xl shadow-slate-900/15 motion-safe:animate-[modalPop_180ms_cubic-bezier(0.16,1,0.3,1)_both]">
              <div className="flex items-start justify-between gap-4 border-b border-slate-200/70 px-6 py-5">
                <div>
                  <p
                    id={titleId}
                    className="text-sm font-semibold text-slate-900"
                  >
                    Conversemos por WhatsApp
                  </p>
                  <p
                    id={descriptionId}
                    className="mt-1 text-sm leading-6 text-slate-600"
                  >
                    Conversación simulada (referencial). Al abrir WhatsApp, puedes
                    editar el mensaje antes de enviarlo.
                  </p>
                </div>
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600/30"
                  aria-label="Cerrar modal"
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>

              <div className="px-6 py-5">
                <div className="space-y-3">
                  {simulatedConversation.map((m, idx) => {
                    const isUser = m.from === "Tu";
                    return (
                      <div
                        key={`${idx}-${m.from}`}
                        className={`flex ${isUser ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={[
                            "max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6 shadow-sm",
                            isUser
                              ? "bg-emerald-600 text-white"
                              : "bg-slate-100 text-slate-800",
                          ].join(" ")}
                        >
                          <p className="text-xs font-semibold opacity-90">
                            {m.from}
                          </p>
                          <p className="mt-1">{m.text}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-5 rounded-2xl border border-slate-200/70 bg-slate-50 p-4">
                  <p className="text-xs font-semibold tracking-wide text-slate-700">
                    Confianza
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-700">
                    Respuesta en 24–48 h hábiles. Si prefieres, también puedes
                    completar el formulario en la sección “Contacto”.
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    Email:{" "}
                    <a
                      href={content.links.email.href}
                      className="font-semibold text-blue-700 hover:text-blue-800 focus:outline-none focus-visible:rounded-md focus-visible:ring-2 focus-visible:ring-blue-600/30"
                    >
                      {content.links.email.label}
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-3 border-t border-slate-200/70 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
                <a
                  href={content.links.whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-emerald-700 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Abrir WhatsApp
                </a>
                <a
                  href={`#${content.sections.contact.id}`}
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition-all hover:border-slate-400 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600/30 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                >
                  Ir a formulario
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
