import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { services, site, steps } from "@/content/site";

const container = "mx-auto w-full max-w-6xl px-5 sm:px-8";

function CtaButton({ children, variant = "gold" }: { children: ReactNode; variant?: "gold" | "ink" }) {
  return (
    <a
      href={site.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-12 items-center justify-center gap-2.5 whitespace-nowrap px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[0.14em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne ${
        variant === "gold" ? "bg-champagne text-ink hover:bg-ivory" : "bg-ink text-ivory hover:bg-ink-soft"
      }`}
    >
      <WhatsAppIcon className="size-[18px]" />
      {children}
    </a>
  );
}

function Overline({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p
      className={`text-[11px] font-semibold uppercase tracking-[0.24em] ${light ? "text-champagne" : "text-champagne-deep"}`}
    >
      {children}
    </p>
  );
}

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <>
      {/* Faixa de prévia */}
      <div className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink px-4 py-[7px] text-center text-[11px] text-ivory/70">
        Prévia desenvolvida por Gonzaga Code para {site.name}
      </div>

      {/* 1. Hero escuro */}
      <div className="bg-ink pt-[31px] text-ivory">
        <header className={`${container} flex h-20 items-center justify-between gap-6`}>
          <a href="#inicio" className="leading-none">
            <span className="block font-serif text-2xl">Milena Couto</span>
            <span className="mt-1 block text-[10px] uppercase tracking-[0.3em] text-champagne">Clínica</span>
          </a>
          <nav aria-label="Principal" className="hidden gap-8 text-[13px] text-ivory/70 md:flex">
            <a href="#tratamentos" className="hover:text-ivory">
              Tratamentos
            </a>
            <a href="#como" className="hover:text-ivory">
              Como funciona
            </a>
            <a href="#local" className="hover:text-ivory">
              Localização
            </a>
          </nav>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-champagne/60 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-champagne transition-colors hover:bg-champagne hover:text-ink"
          >
            Agendar
          </a>
        </header>

        <main id="inicio">
          <section className={`${container} grid gap-12 pb-16 pt-12 sm:pb-24 sm:pt-20 lg:grid-cols-12 lg:items-center`}>
            <div className="lg:col-span-7">
              <Overline light>Estética facial · Jardim Brasília</Overline>
              <h1 className="mt-6 font-serif text-[3rem] leading-[1.02] text-balance sm:text-7xl lg:text-[5.4rem]">
                A sua pele, <em className="text-champagne">tratada com precisão</em>
              </h1>
              <p className="mt-7 max-w-lg text-[17px] leading-relaxed text-ivory/70">
                Tratamentos faciais, dermaplaning e tecnologia de luz, sempre a partir de uma avaliação individual.
              </p>
              <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center">
                <CtaButton>Agendar avaliação</CtaButton>
                <p className="text-sm text-ivory/60">
                  <span className="text-champagne">★ {site.rating.value}</span> no Google · {site.rating.count} avaliações
                </p>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="silk relative aspect-[4/5] w-full border border-white/10">
                <div className="absolute inset-4 border border-champagne/25" />
                <p className="absolute bottom-8 left-8 text-[11px] uppercase tracking-[0.2em] text-ivory/50">
                  Espaço para foto da clínica
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* 2. Tratamentos */}
      <section id="tratamentos" className="scroll-mt-10 py-20 sm:py-28">
        <div className={container}>
          <div data-reveal className="max-w-2xl">
            <Overline>Tratamentos</Overline>
            <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
              Cuidados indicados para <em className="text-champagne-deep">a sua pele</em>
            </h2>
          </div>
          <ol className="mt-14 border-t border-ink">
            {services.map((s, i) => (
              <li
                key={s.title}
                data-reveal
                className="grid gap-3 border-b border-line py-8 sm:grid-cols-12 sm:items-baseline sm:gap-8"
              >
                <span className="font-serif text-2xl text-champagne-deep sm:col-span-1">0{i + 1}</span>
                <h3 className="font-serif text-2xl sm:col-span-5 sm:text-3xl">{s.title}</h3>
                <p className="leading-relaxed text-muted sm:col-span-6">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 3. Como funciona */}
      <section id="como" className="scroll-mt-10 bg-paper py-20 sm:py-28">
        <div className={container}>
          <div data-reveal className="max-w-2xl">
            <Overline>Como funciona</Overline>
            <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">Cada tratamento começa por ouvir você</h2>
          </div>
          <div className="mt-14 grid gap-px bg-line sm:grid-cols-3">
            {steps.map((s) => (
              <div key={s.n} data-reveal className="bg-paper p-8 sm:p-10">
                <span className="font-serif text-4xl italic text-champagne-deep">{s.n}</span>
                <h3 className="mt-6 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Localização */}
      <section id="local" className="scroll-mt-10 py-20 sm:py-28">
        <div className={`${container} grid gap-10 lg:grid-cols-12 lg:gap-12`}>
          <div data-reveal className="lg:col-span-5">
            <Overline>Localização</Overline>
            <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">No Jardim Brasília, Zona Leste</h2>
            <address className="mt-8 not-italic leading-relaxed">
              {site.address.street}
              <br />
              {site.address.district}, {site.address.city} – {site.address.state}
              <br />
              CEP {site.address.zip}
            </address>
            <p className="mt-6 text-sm text-muted">Horários e agendamento pelo WhatsApp.</p>
            <a
              href={site.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex min-h-12 items-center border border-ink px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.14em] transition-colors hover:bg-ink hover:text-ivory"
            >
              Como chegar
            </a>
          </div>
          <div data-reveal className="border border-line bg-paper lg:col-span-7">
            <iframe
              src={site.mapEmbed}
              title={`Mapa: ${site.address.street}, ${site.address.district}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block h-80 w-full grayscale sm:h-full sm:min-h-[420px]"
            />
          </div>
        </div>
      </section>

      {/* 5. CTA final */}
      <section className="bg-ink py-20 text-ivory sm:py-24">
        <div data-reveal className={`${container} flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between`}>
          <h2 className="max-w-2xl font-serif text-4xl leading-tight text-balance sm:text-5xl">
            Agende sua avaliação e descubra <em className="text-champagne">o cuidado certo</em>
          </h2>
          <div className="shrink-0">
            <CtaButton>Falar no WhatsApp</CtaButton>
          </div>
        </div>
      </section>

      <footer className="bg-ink pb-28 text-sm text-ivory/55 md:pb-12">
        <div className={`${container} flex flex-col gap-4 border-t border-white/10 pt-10 sm:flex-row sm:justify-between`}>
          <div>
            <p className="font-serif text-xl text-ivory">{site.name}</p>
            <p className="mt-1">
              {site.address.street} · {site.address.district}, {site.address.city} – {site.address.state}
            </p>
          </div>
          <div className="sm:text-right">
            <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-ivory">
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
        className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-40 grid size-14 place-items-center rounded-full bg-champagne text-ink shadow-lg shadow-black/30 transition-transform active:scale-95 md:hidden"
      >
        <WhatsAppIcon className="size-7" />
      </a>

      <Reveal />
    </>
  );
}
