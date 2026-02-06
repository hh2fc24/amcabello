"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { content } from "../lib/content";

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<"greeting" | "engaged">("greeting");

  // Reset step when closed for a while? Nah, keep it simple.

  return (
    <div className="fixed bottom-5 right-5 z-[55] flex flex-col items-end gap-4 sm:bottom-8 sm:right-8">
      {/* Messages / Modal */}
      {open && (
        <div className="w-80 animate-in slide-in-from-bottom-4 fade-in duration-200">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between bg-slate-900 px-4 py-3 text-white">
              <div className="flex items-center gap-3">
                <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-white">
                  AC
                  <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-slate-900 bg-green-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Asistente Virtual</p>
                  <p className="text-xs text-slate-300">En línea ahora</p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="rounded-full p-1 hover:bg-white/10"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Body */}
            <div className="bg-slate-50 p-4">
              <div className="flex flex-col gap-3">
                {/* Bot Message */}
                <div className="flex items-start gap-2">
                  <div className="max-w-[85%] rounded-2xl rounded-tl-none bg-white p-3 text-sm text-slate-700 shadow-sm border border-slate-100">
                    Hola 👋. Soy el asistente de Álvaro. ¿Te gustaría agendar una evaluación técnica o tienes alguna duda?
                  </div>
                </div>

                {/* User Response Options */}
                {step === "greeting" && (
                  <div className="flex flex-col gap-2 mt-2 items-end">
                    <button
                      onClick={() => setStep("engaged")}
                      className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 active:scale-95 text-right"
                    >
                      Sí, quiero una evaluación
                    </button>
                    <a
                      href={content.links.whatsapp.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-xl bg-white border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 active:scale-95 text-right"
                    >
                      Sólo tengo una consulta rápida
                    </a>
                  </div>
                )}

                {/* Confirmation Step */}
                {step === "engaged" && (
                  <>
                    <div className="flex items-start gap-2 animate-in fade-in slide-in-from-bottom-2">
                      <div className="max-w-[85%] rounded-2xl rounded-tl-none bg-white p-3 text-sm text-slate-700 shadow-sm border border-slate-100">
                        Perfecto. Te derivo directamente al WhatsApp de Álvaro para que coordinen.
                      </div>
                    </div>
                    <div className="mt-2 flex justify-end">
                      <a
                        href={content.links.whatsapp.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 hover:shadow-md transition-all active:scale-95"
                      >
                        <MessageCircle className="h-4 w-4" />
                        Abrir WhatsApp
                      </a>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Trigger Button */}
      <button
        onClick={() => setOpen(!open)}
        className="group flex items-center gap-2 rounded-full border border-emerald-600/20 bg-emerald-600 p-3.5 text-white shadow-lg shadow-emerald-600/20 transition-all hover:scale-105 hover:bg-emerald-700 hover:shadow-xl active:scale-95"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="hidden pr-1 text-sm font-bold sm:inline-block">Conversar</span>
      </button>
    </div>
  );
}
