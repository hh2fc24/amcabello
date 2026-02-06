import { ClipboardList, FileSearch, LineChart } from "lucide-react";
import { content } from "../lib/content";

const stepIcons = [FileSearch, LineChart, ClipboardList] as const;

export default function HowItWorks() {
  return (
    <section
      id={content.sections.howItWorks.id}
      className="reveal scroll-mt-24 border-t border-slate-200/70 bg-white py-16 sm:py-20"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            {content.sections.howItWorks.title}
          </h2>
          <p className="mt-3 text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
            {content.sections.howItWorks.subtitle}
          </p>
        </div>

        <ol className="relative mt-10 grid gap-5 md:grid-cols-3">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-5 top-6 hidden h-0.5 w-[calc(100%-2.5rem)] bg-slate-200 md:block"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-5 top-6 block h-[calc(100%-1.5rem)] w-0.5 bg-slate-200 md:hidden"
          />

          {content.sections.howItWorks.steps.map((step, index) => {
            const Icon = stepIcons[index] ?? FileSearch;
            return (
              <li
                key={step.title}
                className="relative rounded-3xl border border-slate-200/70 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex items-start gap-3">
                  <span className="relative z-10 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-sm">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-base font-semibold leading-6 text-slate-900">
                      {step.title}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-700">
                      {step.description}
                    </p>
                  </div>
                </div>

                <ul className="mt-5 space-y-2 text-sm text-slate-700">
                  {step.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-600"
                      />
                      <span className="leading-6">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

