import Link from "next/link";
import type { CSSProperties } from "react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { contact, examples } from "@/content/examples";
import { fonts } from "@/content/fonts";

const container = "mx-auto w-full max-w-6xl px-5 sm:px-8";
const ask = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
  "Olá, Hygor! Vi os exemplos de sites e quero um para o meu negócio.",
)}`;

export default function Home() {
  const style = {
    "--font-h": fonts.cormorant.style.fontFamily,
    "--font-b": fonts.inter.style.fontFamily,
  } as CSSProperties;

  return (
    <div style={style} className="min-h-screen bg-bg font-b text-text">
      <header className={`${container} flex h-20 items-center justify-between`}>
        <p className="font-h text-2xl">Gonzaga Code</p>
        <a
          href={ask}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-text/20 px-4 py-2 text-sm transition-colors hover:bg-text hover:text-bg"
        >
          Quero um site
        </a>
      </header>

      <main>
        <section className={`${container} pb-14 pt-10 sm:pt-16`}>
          <p className="text-sm text-muted">Tecnologia aplicada a negócios</p>
          <h1 className="mt-4 max-w-3xl font-h text-5xl leading-[1.02] tracking-tight text-balance sm:text-7xl">
            Veja como pode ficar <em className="italic">o site do seu negócio</em>
          </h1>
          <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-muted">
            Três exemplos de sites para negócios locais. Cada site é feito do zero, com a identidade do cliente, para
            levar quem pesquisa no Google direto para o WhatsApp.
          </p>
        </section>

        <section className={`${container} grid gap-5 pb-20 md:grid-cols-3`}>
          {examples.map((ex) => {
            const t = ex.theme;
            return (
              <Link
                key={ex.slug}
                href={`/${ex.slug}/`}
                className="group flex min-h-[340px] flex-col justify-between overflow-hidden rounded-3xl p-7 transition-transform hover:-translate-y-1"
                style={{ background: t.bg, color: t.text, border: `1px solid ${t.line}` }}
              >
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.18em]" style={{ color: t.accent }}>
                    {ex.nicho}
                  </p>
                  <p
                    className={`mt-5 text-4xl leading-[1.02] ${t.uppercaseHeadings ? "uppercase" : ""}`}
                    style={{ fontFamily: fonts[t.heading].style.fontFamily }}
                  >
                    {ex.name}
                  </p>
                  <p className="mt-3 text-sm" style={{ color: t.muted }}>
                    {ex.kind}
                  </p>
                </div>
                <div className="mt-10 flex items-center justify-between">
                  <span className="flex gap-1.5">
                    {[t.accent, t.surface, t.text].map((c) => (
                      <span key={c} className="size-5 rounded-full" style={{ background: c, border: `1px solid ${t.line}` }} />
                    ))}
                  </span>
                  <span className="text-sm font-medium" style={{ color: t.accent }}>
                    Ver exemplo →
                  </span>
                </div>
              </Link>
            );
          })}
        </section>

        <section className="border-t border-line py-16 sm:py-20">
          <div className={`${container} flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between`}>
            <h2 className="max-w-2xl font-h text-4xl leading-tight tracking-tight sm:text-5xl">
              Quer ver uma prévia com o seu negócio?
            </h2>
            <a
              href={ask}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full bg-text px-6 py-3.5 text-[15px] font-medium text-bg"
            >
              <WhatsAppIcon className="size-[18px]" />
              Falar com o Hygor
            </a>
          </div>
        </section>
      </main>

      <footer className={`${container} border-t border-line py-8 text-xs text-muted`}>
        Os negócios destes exemplos são fictícios. · Gonzaga Code
      </footer>
    </div>
  );
}
