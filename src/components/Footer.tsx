import { content } from "../lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/70 bg-white py-10">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-sm font-semibold text-slate-900">
              {content.brand.name}
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              {content.sections.footer.tagline}
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-900">
              {content.sections.footer.servicesLabel}
            </p>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              {content.sections.services.items.map((s) => (
                <li key={s.id}>{s.title}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-900">
              {content.sections.footer.locationLabel}
            </p>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              {content.brand.location}
            </p>
            <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm">
              {content.nav.items.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="font-medium text-blue-700 transition-colors hover:text-blue-800 focus:outline-none focus-visible:rounded-md focus-visible:ring-2 focus-visible:ring-blue-600/30"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-slate-200/70 pt-6 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {content.brand.name}
          </p>
          <p>{content.sections.footer.tagline}</p>
        </div>
      </div>
    </footer>
  );
}

