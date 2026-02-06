import { CheckCircle2 } from "lucide-react";
import { content } from "../lib/content";

export default function Commitment() {
  return (
    <section
      id={content.sections.commitment.id}
      className="reveal scroll-mt-24 border-t border-slate-200/70 bg-slate-50 py-16 sm:py-20"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            {content.sections.commitment.title}
          </h2>
          <p className="mt-3 text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
            {content.sections.commitment.subtitle}
          </p>
        </div>

        <div className="mt-10 rounded-3xl border border-slate-200/70 bg-white p-6 shadow-sm sm:p-8">
          <ul className="grid gap-3 sm:grid-cols-2">
            {content.sections.commitment.items.map((item) => (
              <li key={item} className="flex gap-3">
                <CheckCircle2
                  className="mt-0.5 h-5 w-5 flex-none text-emerald-700"
                  aria-hidden="true"
                />
                <span className="text-sm leading-6 text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

