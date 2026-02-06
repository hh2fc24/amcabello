import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { content } from "../lib/content";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="min-w-0 truncate text-sm font-semibold tracking-tight text-slate-900 sm:text-base"
          aria-label={content.brand.name}
        >
          {content.brand.name}
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Principal">
          {content.nav.items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-700 transition-colors hover:text-slate-900 focus:outline-none focus-visible:rounded-md focus-visible:ring-2 focus-visible:ring-blue-600/30"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={content.nav.cta.href}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-700 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            {content.nav.cta.label}
          </a>
        </div>
      </div>
    </header>
  );
}

