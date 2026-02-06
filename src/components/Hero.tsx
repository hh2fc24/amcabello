import {
  CalendarDays,
  MessageCircle,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { content } from "../lib/content";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="reveal relative overflow-hidden bg-slate-50">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero_background_1770413666427.png"
          alt="Ingeniería Eléctrica y Climatización"
          fill
          priority
          className="object-cover opacity-30 mix-blend-multiply"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-16 pt-12 sm:px-6 sm:pb-24 sm:pt-20 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/50 px-3 py-1 font-medium text-blue-700 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
              </span>
              <span className="text-xs tracking-wide uppercase">
                {content.brand.location}
              </span>
            </div>

            <h1 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl sm:leading-tight">
              Ingeniería que <span className="text-blue-700">Rentabiliza</span> <br className="hidden sm:block" />
              tu Inversión.
            </h1>

            <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg sm:leading-8">
              {content.hero.subheadline}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={content.hero.primaryCta.href}
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all hover:bg-blue-700 hover:-translate-y-0.5"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <CalendarDays className="h-4 w-4" />
                  {content.hero.primaryCta.label}
                </span>
              </a>
              <a
                href={content.hero.secondaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/60 px-6 py-3.5 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur-md transition-all hover:border-slate-300 hover:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              >
                <MessageCircle className="h-4 w-4 text-emerald-600" />
                {content.hero.secondaryCta.label}
              </a>
            </div>

            <dl className="mt-12 grid gap-4 sm:grid-cols-3">
              {content.hero.bullets.map((item, idx) => (
                <div key={idx} className="group relative rounded-2xl border border-slate-200/50 bg-white/60 p-5 shadow-sm backdrop-blur-sm transition-all hover:-translate-y-1 hover:shadow-md">
                  <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-b from-white/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="flex items-center gap-2.5">
                    {idx === 0 && <TrendingUp className="h-5 w-5 text-emerald-600" />}
                    {idx === 1 && <ShieldCheck className="h-5 w-5 text-blue-600" />}
                    {idx === 2 && <MessageCircle className="h-5 w-5 text-indigo-600" />}
                    <dt className="text-sm font-bold text-slate-900">
                      {item.title}
                    </dt>
                  </div>
                  <dd className="mt-2 text-xs leading-5 text-slate-600">
                    {item.text}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <aside className="lg:col-span-5 lg:mt-12">
            <div className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/50">
              <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-blue-100/50 blur-2xl" />
              <div className="relative">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  {content.hero.credentialsLabel}
                </p>
                <p className="mt-2 text-xl font-bold tracking-tight text-slate-900">
                  {content.brand.name}
                </p>
                <p className="text-sm font-medium text-blue-700">{content.brand.credentials}</p>

                <div className="mt-6 space-y-3">
                  <div className="rounded-2xl bg-slate-50 p-4 transition-colors hover:bg-blue-50/50">
                    <p className="text-sm font-bold text-slate-900">
                      {content.sections.services.subtitle}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-slate-600">
                      Entregamos soluciones técnicas robustas, no solo papeles.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-4 transition-colors hover:bg-blue-50/50">
                    <p className="text-sm font-bold text-slate-900">
                      {content.sections.howItWorks.title}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-slate-600">
                      Diagnóstico → Propuesta → Ejecución. Sin burocracia.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
