import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { facial, faq, site } from "@/content/site";

const container = "mx-auto w-full max-w-6xl px-5 sm:px-8";

function CtaButton({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <a
      href={site.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-12 items-center justify-center gap-2.5 whitespace-nowrap rounded-full px-7 py-3.5 text-[15px] font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay ${
        light ? "bg-bg text-cocoa hover:bg-white" : "bg-clay-deep text-white hover:bg-cocoa"
      }`}
    >
      <WhatsAppIcon className="size-[18px]" />
      {children}
    </a>
  );
}

function Label({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p className={`font-serif text-lg italic ${light ? "text-blush" : "text-clay"}`}>{children}</p>
  );
}

const nav = [
  { label: "Estética facial", href: "#facial" },
  { label: "Pilates", href: "#pilates" },
  { label: "Onde estamos", href: "#local" },
];

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <>
      {/* Faixa de prévia */}
      <div className="fixed inset-x-0 top-0 z-50 bg-cocoa px-4 py-[7px] text-center text-[11px] text-bg/80">
        Prévia desenvolvida por Gonzaga Code para {site.name}
      </div>

      <header className="pt-[31px]">
        <div className={`${container} flex h-20 items-center justify-between gap-6`}>
          <a href="#inicio" className="font-serif text-[22px] leading-none">
            Marília <em className="text-clay">Ferrari</em>
          </a>
          <nav aria-label="Principal" className="hidden gap-8 text-sm text-muted md:flex">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="transition-colors hover:text-text">
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-text/20 px-4 py-2 text-sm transition-colors hover:border-clay hover:text-clay"
          >
            Agendar
          </a>
        </div>
      </header>

      <main id="inicio">
        {/* 1. Hero */}
        <section className={`${container} pb-14 pt-10 text-center sm:pb-20 sm:pt-16`}>
          <p className="text-sm text-muted">
            <span className="text-clay">★★★★★</span> {site.rating.value} no Google · {site.rating.count} avaliações
          </p>
          <h1 className="mx-auto mt-6 max-w-4xl font-serif text-[2.9rem] font-normal leading-[1.02] tracking-tight text-balance sm:text-7xl">
            Cuidado com a pele, <em className="text-clay">no seu tempo</em>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-[17px] leading-relaxed text-muted">
            Estética facial e Pilates em São Mateus. Tratamentos pensados para a sua pele e um espaço para você
            cuidar de si com calma.
          </p>
          <div className="mt-9 flex flex-col items-center gap-4">
            <CtaButton>Agendar pelo WhatsApp</CtaButton>
            <p className="text-sm text-muted">
              {site.address.street} · {site.address.district}
            </p>
          </div>
        </section>

        {/* Painel visual */}
        <div className={container}>
          <div className="glow relative h-56 overflow-hidden rounded-[2rem] sm:h-80">
            <div className="absolute -bottom-24 left-1/2 size-80 -translate-x-1/2 rounded-full border border-white/50" />
            <div className="absolute -bottom-40 left-1/2 size-[30rem] -translate-x-1/2 rounded-full border border-white/30" />
            <p className="absolute bottom-6 left-6 rounded-full bg-white/60 px-3 py-1 text-[11px] text-muted backdrop-blur">
              Espaço para foto do espaço ou da Marília
            </p>
          </div>
        </div>

        {/* 2. Estética facial */}
        <section id="facial" className="scroll-mt-10 py-20 sm:py-28">
          <div className={container}>
            <div data-reveal className="grid gap-6 lg:grid-cols-2 lg:items-end">
              <div>
                <Label>Estética facial</Label>
                <h2 className="mt-3 font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
                  Tratamentos para cada tipo de pele
                </h2>
              </div>
              <p className="max-w-md text-[17px] leading-relaxed text-muted lg:justify-self-end">
                Antes de qualquer procedimento, a pele é avaliada. Assim, cada cuidado é indicado para o que você
                realmente precisa.
              </p>
            </div>
            <ul className="mt-12 grid gap-4 sm:grid-cols-2">
              {facial.map((s, i) => (
                <li key={s.title} data-reveal className="rounded-3xl bg-surface p-7 sm:p-9">
                  <span className="text-sm tabular-nums text-clay">0{i + 1}</span>
                  <h3 className="mt-4 font-serif text-2xl">{s.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{s.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 3. Pilates */}
        <section id="pilates" className="scroll-mt-10 bg-cocoa py-20 text-bg sm:py-28">
          <div className={`${container} grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16`}>
            <div data-reveal>
              <Label light>Pilates</Label>
              <h2 className="mt-3 font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
                Movimento e bem-estar no mesmo espaço
              </h2>
              <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-bg/75">
                Além da estética, o espaço oferece aulas de Pilates, com acompanhamento e atenção ao seu ritmo.
                Consulte horários e turmas pelo WhatsApp.
              </p>
              <div className="mt-9">
                <CtaButton light>Quero saber sobre o Pilates</CtaButton>
              </div>
            </div>
            <div data-reveal className="glow relative aspect-[4/3] overflow-hidden rounded-[2rem] opacity-90">
              <div className="absolute -right-10 -top-10 size-64 rounded-full border border-white/40" />
              <p className="absolute bottom-5 left-5 rounded-full bg-white/60 px-3 py-1 text-[11px] text-muted backdrop-blur">
                Espaço para foto das aulas
              </p>
            </div>
          </div>
        </section>

        {/* 4. Dúvidas */}
        <section className="py-20 sm:py-28">
          <div className={`${container} grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16`}>
            <div data-reveal>
              <Label>Dúvidas</Label>
              <h2 className="mt-3 font-serif text-4xl leading-tight tracking-tight sm:text-5xl">Antes de agendar</h2>
            </div>
            <div data-reveal className="divide-y divide-line border-y border-line">
              {faq.map((item) => (
                <details key={item.q} className="group py-5">
                  <summary className="flex min-h-12 cursor-pointer items-center justify-between gap-6 font-serif text-xl">
                    {item.q}
                    <span
                      className="grid size-8 shrink-0 place-items-center rounded-full bg-surface text-clay transition-transform group-open:rotate-45"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-3 max-w-xl leading-relaxed text-muted">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Onde estamos */}
        <section id="local" className="scroll-mt-10 bg-surface py-20 sm:py-28">
          <div className={`${container} grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16`}>
            <div data-reveal>
              <Label>Onde estamos</Label>
              <h2 className="mt-3 font-serif text-4xl leading-tight tracking-tight sm:text-5xl">Em São Mateus</h2>
              <address className="mt-8 not-italic leading-relaxed">
                {site.address.street}
                <br />
                {site.address.district}, {site.address.city} – {site.address.state}
                <br />
                CEP {site.address.zip}
              </address>
              <p className="mt-6 text-sm text-muted">Horários de atendimento pelo WhatsApp.</p>
              <a
                href={site.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex min-h-12 items-center rounded-full border border-text/20 px-6 py-3 text-[15px] transition-colors hover:border-clay hover:text-clay"
              >
                Como chegar
              </a>
            </div>
            <div data-reveal className="overflow-hidden rounded-[2rem] border border-line bg-blush/40">
              <iframe
                src={site.mapEmbed}
                title={`Mapa: ${site.address.street}, ${site.address.district}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block h-80 w-full sm:h-full sm:min-h-[420px]"
              />
            </div>
          </div>
        </section>

        {/* 6. CTA final */}
        <section className="py-20 text-center sm:py-28">
          <div data-reveal className={container}>
            <h2 className="mx-auto max-w-2xl font-serif text-4xl leading-tight tracking-tight text-balance sm:text-6xl">
              Sua pele merece <em className="text-clay">um olhar cuidadoso</em>
            </h2>
            <div className="mt-10">
              <CtaButton>Agendar horário</CtaButton>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line pb-28 pt-12 text-sm text-muted md:pb-12">
        <div className={`${container} flex flex-col gap-6 sm:flex-row sm:justify-between`}>
          <div>
            <p className="font-serif text-xl text-text">{site.name}</p>
            <p className="mt-1">
              {site.address.street} · {site.address.district}, {site.address.city} – {site.address.state}
            </p>
          </div>
          <div className="sm:text-right">
            <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-text">
              WhatsApp {site.phone}
            </a>
            <p className="mt-1 text-xs">
              © {year} {site.name} · Desenvolvido por Gonzaga Code
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp flutuante (mobile) */}
      <a
        href={site.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Agendar pelo WhatsApp"
        className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-40 grid size-14 place-items-center rounded-full bg-clay-deep text-white shadow-lg shadow-cocoa/25 transition-transform active:scale-95 md:hidden"
      >
        <WhatsAppIcon className="size-7" />
      </a>

      <Reveal />
    </>
  );
}
