import {
  CalendarDays,
  MessageCircle,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { content } from "../lib/content";

export default function Hero() {
  return (
    <section className="reveal relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.10),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(16,185,129,0.08),transparent_45%)]" />

      <div className="relative mx-auto w-full max-w-6xl px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <p className="text-sm font-semibold tracking-wide text-blue-700">
              {content.brand.location}
            </p>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl sm:leading-tight">
              {content.hero.headline}
            </h1>
            <p className="mt-5 text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
              {content.hero.subheadline}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={content.hero.primaryCta.href}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-700 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                <CalendarDays className="h-4 w-4" aria-hidden="true" />
                {content.hero.primaryCta.label}
              </a>
              <a
                href={content.hero.secondaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition-all hover:border-slate-400 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600/30 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                {content.hero.secondaryCta.label}
              </a>
            </div>

            <dl className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200/70 bg-white/70 p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
                <div className="flex items-center gap-2">
                  <TrendingUp
                    className="h-4 w-4 text-emerald-700"
                    aria-hidden="true"
                  />
                  <dt className="text-sm font-semibold text-slate-900">
                    {content.hero.bullets[0].title}
                  </dt>
                </div>
                <dd className="mt-2 text-sm leading-6 text-slate-700">
                  {content.hero.bullets[0].text}
                </dd>
              </div>

              <div className="rounded-2xl border border-slate-200/70 bg-white/70 p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
                <div className="flex items-center gap-2">
                  <ShieldCheck
                    className="h-4 w-4 text-blue-700"
                    aria-hidden="true"
                  />
                  <dt className="text-sm font-semibold text-slate-900">
                    {content.hero.bullets[1].title}
                  </dt>
                </div>
                <dd className="mt-2 text-sm leading-6 text-slate-700">
                  {content.hero.bullets[1].text}
                </dd>
              </div>

              <div className="rounded-2xl border border-slate-200/70 bg-white/70 p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
                <div className="flex items-center gap-2">
                  <MessageCircle
                    className="h-4 w-4 text-slate-700"
                    aria-hidden="true"
                  />
                  <dt className="text-sm font-semibold text-slate-900">
                    {content.hero.bullets[2].title}
                  </dt>
                </div>
                <dd className="mt-2 text-sm leading-6 text-slate-700">
                  {content.hero.bullets[2].text}
                </dd>
              </div>
            </dl>
          </div>

          <aside className="lg:col-span-5">
            <div className="rounded-3xl border border-slate-200/70 bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold tracking-wide text-slate-600">
                {content.hero.credentialsLabel}
              </p>
              <p className="mt-2 text-lg font-semibold tracking-tight text-slate-900">
                {content.brand.credentials}
              </p>
              <div className="mt-6 rounded-2xl bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">
                  {content.sections.services.subtitle}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  {content.sections.services.items[0].description}
                </p>
              </div>
              <div className="mt-4 rounded-2xl bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">
                  {content.sections.howItWorks.title}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  {content.sections.howItWorks.subtitle}
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
