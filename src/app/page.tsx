import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Principles from "../components/Principles";
import Services from "../components/Services";
import HowItWorks from "../components/HowItWorks";
import Commitment from "../components/Commitment";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { content } from "../lib/content";
import { Suspense } from "react";
import WhatsAppWidget from "../components/WhatsAppWidget";

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-slate-900 focus:shadow-lg focus:ring-2 focus:ring-blue-600/30"
      >
        {content.a11y.skipToContent}
      </a>

      <Navbar />
      <main id="contenido">
        <Hero />

        <section
          id={content.sections.welcome.id}
          className="reveal scroll-mt-24 border-t border-slate-200/70 bg-white py-16 sm:py-20"
        >
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <p className="text-sm font-semibold tracking-wide text-blue-700">
                {content.sections.welcome.kicker}
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                {content.sections.welcome.title}
              </h2>
              <div className="mt-6 space-y-5 text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
                {content.sections.welcome.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Principles />
        <Services />
        <HowItWorks />
        <Commitment />
        <Suspense
          fallback={
            <section
              id={content.sections.contact.id}
              className="scroll-mt-24 border-t border-slate-200/70 bg-white py-16 sm:py-20"
            >
              <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl">
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                    {content.sections.contact.title}
                  </h2>
                  <p className="mt-3 text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
                    {content.sections.contact.subtitle}
                  </p>
                </div>
              </div>
            </section>
          }
        >
          <Contact />
        </Suspense>
      </main>
      <Footer />
      <WhatsAppWidget />

      <style>{`
        :root {
          --background: #ffffff;
          --foreground: #0f172a;
        }

        html {
          scroll-behavior: smooth;
        }

        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }
        }

        @keyframes sectionFadeUp {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes modalPop {
          from {
            opacity: 0;
            transform: translateY(10px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .reveal {
          animation: sectionFadeUp 700ms cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        @media (prefers-reduced-motion: reduce) {
          .reveal {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
