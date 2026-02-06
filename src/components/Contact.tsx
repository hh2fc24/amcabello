"use client";

import { useMemo, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowRight, MessageCircle } from "lucide-react";
import { content } from "../lib/content";

export default function Contact() {
  const searchParams = useSearchParams();

  const serviceFromQuery = searchParams.get("servicio");
  const messageFromQuery = searchParams.get("mensaje");

  const allowedServiceValues = useMemo(() => {
    return new Set<string>(
      content.sections.contact.form.serviceOptions.map((o) => o.value),
    );
  }, []);

  const selectedService =
    serviceFromQuery && allowedServiceValues.has(serviceFromQuery)
      ? serviceFromQuery
      : "diagnostico";
  const prefillMessage = typeof messageFromQuery === "string" ? messageFromQuery : "";
  const formKey = `${selectedService}:${prefillMessage}`;

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      service: String(formData.get("service") ?? ""),
      message: String(formData.get("message") ?? ""),
      timestamp: new Date().toISOString(),
      page: typeof window !== "undefined" ? window.location.href : "",
    };

    console.log("[contact]", payload);

    alert(content.sections.contact.form.successMessage);
    e.currentTarget.reset();
  }

  return (
    <section
      id={content.sections.contact.id}
      className="reveal scroll-mt-24 border-t border-slate-200/70 bg-white py-16 sm:py-20"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              {content.sections.contact.title}
            </h2>
            <p className="mt-3 text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
              {content.sections.contact.subtitle}
            </p>

            <div className="mt-6 rounded-3xl border border-slate-200/70 bg-slate-50 p-6">
              <p className="text-sm font-semibold text-slate-900">
                {content.brand.name}
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                {content.brand.credentials}
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                {content.brand.location}
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Email:{" "}
                <a
                  href={content.links.email.href}
                  className="font-semibold text-blue-700 hover:text-blue-800 focus:outline-none focus-visible:rounded-md focus-visible:ring-2 focus-visible:ring-blue-600/30"
                >
                  {content.links.email.label}
                </a>
              </p>

              <div className="mt-5">
                <a
                  href={content.sections.contact.whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-emerald-700 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600/40 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  {content.sections.contact.whatsapp.label}
                </a>
                <p className="mt-3 text-xs leading-5 text-slate-600">
                  {content.sections.contact.subtitle}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-slate-200/70 bg-white p-6 shadow-sm sm:p-8">
              <p className="text-sm font-semibold text-slate-900">
                {content.sections.contact.form.title}
              </p>

              <form key={formKey} className="mt-6 space-y-4" onSubmit={onSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-slate-900"
                    >
                      {content.sections.contact.form.fields.name.label}
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      defaultValue=""
                      placeholder={content.sections.contact.form.fields.name.placeholder}
                      className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-slate-900"
                    >
                      {content.sections.contact.form.fields.email.label}
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      defaultValue=""
                      placeholder={content.sections.contact.form.fields.email.placeholder}
                      className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="text-sm font-medium text-slate-900"
                    >
                      {content.sections.contact.form.fields.phone.label}
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      inputMode="tel"
                      defaultValue=""
                      placeholder={content.sections.contact.form.fields.phone.placeholder}
                      className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="text-sm font-medium text-slate-900"
                    >
                      {content.sections.contact.form.fields.service.label}
                    </label>
                    <select
                      id="service"
                      name="service"
                      defaultValue={selectedService}
                      className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
                    >
                      {content.sections.contact.form.serviceOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-slate-900"
                  >
                    {content.sections.contact.form.fields.message.label}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    defaultValue={prefillMessage}
                    placeholder={content.sections.contact.form.fields.message.placeholder}
                    className="mt-2 w-full resize-y rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
                  />
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-700 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                  >
                    {content.sections.contact.form.submitLabel}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                  <a
                    href={content.sections.contact.whatsapp.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition-all hover:border-slate-400 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600/30 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    {content.sections.contact.whatsapp.label}
                  </a>
                </div>

                <p className="text-xs leading-5 text-slate-600">
                  {content.sections.contact.subtitle}
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
