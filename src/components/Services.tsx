import React from "react";
import {
  ArrowRight,
  ClipboardCheck,
  Sun,
  ThermometerSnowflake,
  Wrench,
} from "lucide-react";
import { content } from "../lib/content";
import Image from "next/image";

const serviceIcons: Record<
  string,
  React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>
> = {
  fv: Sun,
  ito: ClipboardCheck,
  om: Wrench,
  hvac: ThermometerSnowflake,
};

const serviceImages: Record<string, string> = {
  fv: "/images/service_solar_pv_1770413679520.png",
  ito: "/images/service_ito_qa_1770413694596.png",
  om: "/images/service_om_maintenance_1770413709305.png",
  hvac: "/images/service_hvac_heatpump_1770413723611.png",
};

export default function Services() {
  return (
    <section
      id={content.sections.services.id}
      className="reveal scroll-mt-24 border-t border-slate-200/70 bg-slate-50/50 py-16 sm:py-24"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {content.sections.services.title}
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            {content.sections.services.subtitle}
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:gap-10">
          {content.sections.services.items.map((service) => {
            const Icon = serviceIcons[service.id] ?? Wrench;
            const bgImage = serviceImages[service.id];
            const href = `/?servicio=${encodeURIComponent(service.id)}#${content.sections.contact.id}`;

            return (
              <div
                key={service.id}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-xl hover:-translate-y-1"
              >
                {/* Image Header */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-100 sm:h-56">
                  {bgImage && (
                    <Image
                      src={bgImage}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      quality={85}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                  <div className="absolute bottom-4 left-6 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/90 shadow-sm backdrop-blur-md">
                      <Icon className="h-5 w-5 text-blue-700" />
                    </span>
                    <h3 className="text-xl font-bold text-white shadow-sm">
                      {service.title}
                    </h3>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <p className="text-base leading-relaxed text-slate-600">
                    {service.description}
                  </p>

                  <ul className="mt-6 flex-1 space-y-3">
                    {service.deliverables.map((deliverable) => (
                      <li key={deliverable} className="flex items-start gap-3 text-sm text-slate-700">
                        <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                        <span>{deliverable}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 pt-6 border-t border-slate-100">
                    <a
                      href={href}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
                    >
                      {service.ctaLabel}
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
