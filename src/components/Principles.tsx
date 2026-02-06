import { BarChart3, ShieldCheck, Sparkles } from "lucide-react";
import { content } from "../lib/content";

const icons = [BarChart3, Sparkles, ShieldCheck] as const;

export default function Principles() {
  return (
    <section
      id={content.sections.principles.id}
      className="reveal scroll-mt-24 border-t border-slate-200/70 bg-white py-16 sm:py-20"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            {content.sections.principles.title}
          </h2>
          <p className="mt-3 text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
            {content.hero.subheadline}
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {content.sections.principles.items.map((item, index) => {
            const Icon = icons[index] ?? ShieldCheck;
            return (
              <div
                key={item.title}
                className="group rounded-3xl border border-slate-200/70 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 ring-1 ring-blue-100">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold leading-6 text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-700">
                      {item.description}
                    </p>
                  </div>
                </div>

                <ul className="mt-5 space-y-2 text-sm text-slate-700">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-600"
                      />
                      <span className="leading-6">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

