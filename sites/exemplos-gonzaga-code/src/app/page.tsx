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

        <section className={`${container} pb-20`}>
          <ul className="max-w-2xl divide-y divide-line border-y border-line">
            {examples.map((ex) => (
              <li key={ex.slug}>
                <Link
                  href={`/${ex.slug}/`}
                  className="group flex min-h-16 items-center gap-4 py-4 transition-colors hover:text-muted"
                >
                  <span
                    className="size-3 shrink-0 rounded-full"
                    style={{ background: ex.theme.accent }}
                    aria-hidden="true"
                  />
                  <span className="flex-1">
                    <span className="block text-[17px] font-medium capitalize">{ex.nicho}</span>
                    <span className="block text-sm text-muted">{ex.name}</span>
                  </span>
                  <span className="text-sm text-muted transition-transform group-hover:translate-x-1">
                    Ver exemplo →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
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
