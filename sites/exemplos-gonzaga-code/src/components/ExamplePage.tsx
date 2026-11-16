import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import Reveal from "./Reveal";
import WhatsAppIcon from "./WhatsAppIcon";
import { fonts } from "@/content/fonts";
import { type Example, whatsappFor } from "@/content/examples";

const container = "mx-auto w-full max-w-6xl px-5 sm:px-8";

function Cta({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-theme inline-flex min-h-12 items-center justify-center gap-2.5 whitespace-nowrap bg-accent px-6 py-3.5 text-[15px] font-semibold text-accent-ink transition-opacity hover:opacity-85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <WhatsAppIcon className="size-[18px]" />
      {children}
    </a>
  );
}

function H2({ caps, children }: { caps: string; children: ReactNode }) {
  return <h2 className={`font-h text-4xl leading-[1.05] sm:text-5xl ${caps}`}>{children}</h2>;
}

export default function ExamplePage({ ex }: { ex: Example }) {
  const t = ex.theme;
  const href = whatsappFor(ex.nicho);
  const heading = fonts[t.heading];
  const body = fonts[t.body];
  const style = {
    "--bg": t.bg,
    "--surface": t.surface,
    "--line": t.line,
    "--text": t.text,
    "--muted": t.muted,
    "--accent": t.accent,
    "--accent-ink": t.accentInk,
    "--radius": t.radius,
    "--font-h": heading.style.fontFamily,
    "--font-b": body.style.fontFamily,
  } as CSSProperties;
  const caps = t.uppercaseHeadings ? "uppercase tracking-tight" : "tracking-tight";

  return (
    <div style={style} className="min-h-screen bg-bg font-b text-text">
      {/* Faixa de exemplo */}
      <div className="fixed inset-x-0 top-0 z-50 flex items-center justify-center gap-3 bg-[#111] px-4 py-[7px] text-[11px] text-white/80">
        <span className="truncate">Exemplo fictício · site criado pela Gonzaga Code</span>
        <Link href="/" className="shrink-0 underline underline-offset-2 hover:text-white">
          Ver todos
        </Link>
      </div>

      <header className="pt-[31px]">
        <div className={`${container} flex h-20 items-center justify-between gap-6`}>
          <a href="#inicio" className="leading-tight">
            <span className={`block font-h text-xl sm:text-2xl ${caps}`}>{ex.name}</span>
            <span className="block text-[11px] text-muted">{ex.kind}</span>
          </a>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-theme hidden bg-accent px-4 py-2 text-sm font-semibold text-accent-ink sm:inline-flex"
          >
            {ex.cta}
          </a>
        </div>
      </header>

      <main id="inicio">
        {/* Hero */}
        {t.hero === "split" ? (
          <section className={`${container} grid gap-10 pb-16 pt-8 sm:pt-14 lg:grid-cols-12 lg:items-center lg:pb-24`}>
            <div className="lg:col-span-7">
              <p className="text-sm font-medium text-muted">{ex.kind} · Zona Leste de São Paulo</p>
              <h1 className={`mt-5 font-h text-[2.9rem] leading-[1] sm:text-7xl ${caps}`}>
                {ex.h1[0]} <span className="text-accent">{ex.h1[1]}</span>
              </h1>
              <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-muted">{ex.sub}</p>
              <div className="mt-9">
                <Cta href={href}>{ex.cta}</Cta>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="placeholder rounded-card relative aspect-[4/3] lg:aspect-[4/5]">
                <span className="absolute bottom-4 left-4 rounded-full bg-white/70 px-3 py-1 text-[11px] text-[#333]">
                  {ex.photo}
                </span>
              </div>
            </div>
          </section>
        ) : (
          <section className={`${container} pb-16 pt-10 text-center sm:pt-16 lg:pb-24`}>
            <p className="text-sm font-medium text-muted">{ex.kind} · Zona Leste de São Paulo</p>
            <h1 className={`mx-auto mt-5 max-w-4xl font-h text-[2.9rem] leading-[1] text-balance sm:text-7xl ${caps}`}>
              {ex.h1[0]} <span className="text-accent">{ex.h1[1]}</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-[17px] leading-relaxed text-muted">{ex.sub}</p>
            <div className="mt-9">
              <Cta href={href}>{ex.cta}</Cta>
            </div>
            <div className="placeholder rounded-card relative mx-auto mt-14 h-56 max-w-5xl sm:h-80">
              <span className="absolute bottom-4 left-4 rounded-full bg-white/70 px-3 py-1 text-[11px] text-[#333]">
                {ex.photo}
              </span>
            </div>
          </section>
        )}

        {/* Serviços */}
        <section className="border-t border-line py-20 sm:py-24">
          <div className={container}>
            <div data-reveal className="max-w-2xl">
              <p className="text-sm font-medium text-accent">Serviços</p>
              <div className="mt-3">
                <H2 caps={caps}>O que fazemos</H2>
              </div>
            </div>
            {t.services === "cards" ? (
              <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {ex.services.map((s) => (
                  <li key={s.title} data-reveal className="rounded-card bg-surface p-6">
                    <h3 className={`font-h text-xl ${caps}`}>{s.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-muted">{s.text}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <ul className="mt-12 border-t border-text/30">
                {ex.services.map((s, i) => (
                  <li
                    key={s.title}
                    data-reveal
                    className="grid gap-2 border-b border-line py-6 sm:grid-cols-12 sm:items-baseline sm:gap-8"
                  >
                    <span className="text-sm tabular-nums text-accent sm:col-span-1">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className={`font-h text-2xl sm:col-span-5 ${caps}`}>{s.title}</h3>
                    <p className="leading-relaxed text-muted sm:col-span-6">{s.text}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>

        {/* Como funciona */}
        <section className="bg-surface py-20 sm:py-24">
          <div className={container}>
            <div data-reveal>
              <p className="text-sm font-medium text-accent">Como funciona</p>
              <div className="mt-3">
                <H2 caps={caps}>Simples do começo ao fim</H2>
              </div>
            </div>
            <ol className="mt-12 grid gap-8 md:grid-cols-3">
              {ex.steps.map((s, i) => (
                <li key={s.title} data-reveal className="border-t-2 border-accent pt-5">
                  <span className="text-sm font-semibold text-accent">{i + 1}</span>
                  <h3 className={`mt-2 font-h text-2xl ${caps}`}>{s.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Dúvidas e local */}
        <section className="py-20 sm:py-24">
          <div className={`${container} grid gap-12 lg:grid-cols-2 lg:gap-16`}>
            <div data-reveal>
              <p className="text-sm font-medium text-accent">Dúvidas</p>
              <div className="mt-3">
                <H2 caps={caps}>Perguntas frequentes</H2>
              </div>
              <div className="mt-8 divide-y divide-line border-y border-line">
                {ex.faq.map((f) => (
                  <details key={f.q} className="group py-5">
                    <summary className="flex cursor-pointer items-center justify-between gap-6 text-[17px] font-medium">
                      {f.q}
                      <span className="text-accent transition-transform group-open:rotate-45" aria-hidden="true">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 leading-relaxed text-muted">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
            <div data-reveal>
              <p className="text-sm font-medium text-accent">Onde estamos</p>
              <div className="mt-3">
                <H2 caps={caps}>Zona Leste de São Paulo</H2>
              </div>
              <div className="placeholder rounded-card relative mt-8 h-64">
                <span className="absolute bottom-4 left-4 rounded-full bg-white/70 px-3 py-1 text-[11px] text-[#333]">
                  Mapa do Google com o endereço
                </span>
              </div>
              <p className="mt-4 text-sm text-muted">Endereço, horários e botão &quot;Como chegar&quot; entram aqui.</p>
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="bg-accent py-16 text-accent-ink sm:py-20">
          <div data-reveal className={`${container} flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between`}>
            <h2 className={`max-w-2xl font-h text-4xl leading-[1.05] sm:text-5xl ${caps}`}>
              {ex.closing[0]} {ex.closing[1]}
            </h2>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-theme inline-flex min-h-12 shrink-0 items-center justify-center gap-2.5 whitespace-nowrap bg-accent-ink px-6 py-3.5 text-[15px] font-semibold text-accent transition-opacity hover:opacity-90"
            >
              <WhatsAppIcon className="size-[18px]" />
              {ex.cta}
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-line pb-28 pt-10 text-sm text-muted md:pb-10">
        <div className={`${container} flex flex-col gap-3 sm:flex-row sm:justify-between`}>
          <div>
            <p className={`font-h text-lg text-text ${caps}`}>{ex.name}</p>
            {ex.registro && <p className="mt-1">{ex.registro}</p>}
          </div>
          <p className="text-xs sm:text-right">
            Negócio fictício, criado como exemplo de portfólio.
            <br />
            Desenvolvido por Gonzaga Code
          </p>
        </div>
      </footer>

      {/* WhatsApp flutuante (mobile) */}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ex.cta}
        className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-40 grid size-14 place-items-center rounded-full bg-accent text-accent-ink shadow-lg shadow-black/25 md:hidden"
      >
        <WhatsAppIcon className="size-7" />
      </a>

      <Reveal />
    </div>
  );
}
