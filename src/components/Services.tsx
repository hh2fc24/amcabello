import React from "react";
import {
  ArrowRight,
  ClipboardCheck,
  Sun,
  ThermometerSnowflake,
  Wrench,
} from "lucide-react";
import { content } from "../lib/content";

const serviceIcons: Record<
  string,
  React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>
> = {
  fv: Sun,
  ito: ClipboardCheck,
  om: Wrench,
  hvac: ThermometerSnowflake,
};

export default function Services() {
  return (
    <section
      id={content.sections.services.id}
      className="reveal scroll-mt-24 border-t border-slate-200/70 bg-slate-50 py-16 sm:py-20"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            {content.sections.services.title}
          </h2>
          <p className="mt-3 text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
            {content.sections.services.subtitle}
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {content.sections.services.items.map((service) => {
            const Icon = serviceIcons[service.id] ?? Wrench;
            const href = `/?servicio=${encodeURIComponent(service.id)}#${content.sections.contact.id}`;
            return (
              <div
                key={service.id}
                className="group rounded-3xl border border-slate-200/70 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-blue-700 ring-1 ring-slate-200">
                      <Icon className="h-5 w-5" aria-hidden={true} />
                    </span>
                    <div>
                      <h3 className="text-base font-semibold leading-6 text-slate-900">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-700">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>

                <ul className="mt-5 space-y-2 text-sm text-slate-700">
                  {service.deliverables.map((deliverable) => (
                    <li key={deliverable} className="flex gap-2">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600"
                      />
                      <span className="leading-6">{deliverable}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <a
                    href={href}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm transition-all hover:border-slate-400 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600/30 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                    aria-label={`${service.ctaLabel}: ${service.title}`}
                  >
                    {service.ctaLabel}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
