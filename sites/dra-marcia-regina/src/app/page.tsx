import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";
import { PinIcon, Star, WhatsAppIcon } from "@/components/icons";
import { areas, faq, site, steps } from "@/content/site";

function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>;
}

function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-sage-deep">{children}</p>;
}

function WhatsAppButton({ children, variant = "solid" }: { children: ReactNode; variant?: "solid" | "light" }) {
  const styles =
    variant === "solid"
      ? "bg-sage-deep text-white hover:bg-text"
      : "bg-bg text-text hover:bg-white";
  return (
    <a
      href={site.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full px-7 py-3.5 text-[15px] font-medium shadow-[0_8px_24px_-12px_rgba(42,42,40,0.5)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage-deep ${styles}`}
    >
      <WhatsAppIcon />
      {children}
    </a>
  );
}

const fullAddress = `${site.address.street} · ${site.address.district}, ${site.address.city} – ${site.address.state} · ${site.address.zip}`;

export default function Home() {
  return (
    <>
      {/* Faixa de prévia */}
      <div className="fixed inset-x-0 top-0 z-50 bg-text px-4 py-2 text-center text-[11px] tracking-wide text-bg/85">
        Prévia desenvolvida por <strong className="font-medium text-bg">Gonzaga Code</strong> para {site.name}
      </div>

      <header className="pt-[34px]">
        <Container className="flex h-16 items-center justify-between">
          <a href="#inicio" className="font-serif text-xl tracking-tight">
            {site.name}
          </a>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full border border-line px-4 py-2 text-sm transition-colors hover:border-sage-deep hover:text-sage-deep sm:inline-flex"
          >
            Agendar avaliação
          </a>
        </Container>
      </header>

      <main id="inicio">
        {/* 1. Hero */}
        <section className="pb-16 pt-6 sm:pb-24 sm:pt-12">
          <Container className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
            <div>
              <p className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white/60 px-3.5 py-1.5 text-xs text-muted">
                <Star className="size-3.5 text-[#c9a227]" />
                <span>
                  <strong className="font-medium text-text">{site.rating.value}</strong> no Google ·{" "}
                  {site.rating.count} avaliações
                </span>
              </p>
              <h1 className="mt-6 font-serif text-[3.25rem] font-medium leading-[0.98] tracking-tight text-balance sm:text-7xl lg:text-[5.5rem]">
                Tricologia em <em className="font-normal text-sage-deep">São Mateus</em>
              </h1>
              <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-muted">
                Avaliação individual para entender a causa da queda de cabelo e definir o cuidado certo para os
                seus fios e couro cabeludo.
              </p>
              <div className="mt-9">
                <WhatsAppButton>Agendar avaliação pelo WhatsApp</WhatsAppButton>
              </div>
              <p className="mt-6 text-sm text-muted">
                <span className="text-text">{site.name}</span> · {site.role}
              </p>
            </div>

            <div className="relative">
              <div className="texture-sand relative aspect-[4/5] overflow-hidden rounded-[28px] sm:aspect-[5/5] lg:aspect-[4/5]">
                <div className="strands absolute inset-0 opacity-70" />
                <div className="absolute -right-16 -top-16 size-64 rounded-full bg-white/30 blur-2xl" />
              </div>
              <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/60 bg-white/70 p-5 backdrop-blur-md sm:inset-x-auto sm:right-6 sm:w-72">
                <p className="font-serif text-xl">Avaliação capilar</p>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  Atendimento individual, com tempo para ouvir e explicar cada etapa.
                </p>
                <p className="mt-3 flex items-center gap-1.5 text-xs text-sage-deep">
                  <PinIcon className="size-3.5" /> {site.address.district}, Zona Leste
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* 2. Sobre */}
        <section className="border-t border-line py-20 sm:py-28">
          <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div data-reveal className="texture-sage relative order-2 aspect-[4/5] overflow-hidden rounded-[28px] lg:order-1">
              <div className="strands absolute inset-0 opacity-50" />
              <span className="absolute bottom-5 left-5 rounded-full bg-white/70 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-muted backdrop-blur">
                Foto da profissional
              </span>
            </div>
            <div data-reveal className="order-1 lg:order-2">
              <Eyebrow>Sobre</Eyebrow>
              <h2 className="mt-4 font-serif text-4xl font-medium leading-tight tracking-tight text-balance sm:text-5xl">
                Cuidado que começa por entender você
              </h2>
              <p className="mt-6 text-[17px] leading-relaxed text-muted">
                A {site.name} é biomédica esteta com atuação em tricologia, a área que estuda a saúde dos cabelos
                e do couro cabeludo. Cada atendimento começa com uma avaliação detalhada, com tempo para ouvir,
                explicar e esclarecer cada etapa do tratamento.
              </p>
            </div>
          </Container>
        </section>

        {/* 3. Como funciona */}
        <section className="bg-surface py-20 sm:py-28">
          <Container>
            <div data-reveal className="max-w-xl">
              <Eyebrow>Como funciona</Eyebrow>
              <h2 className="mt-4 font-serif text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
                Três etapas, no seu tempo
              </h2>
            </div>
            <ol className="mt-12 grid gap-4 md:grid-cols-3 md:gap-5">
              {steps.map((s, i) => (
                <li
                  key={s.n}
                  data-reveal
                  style={{ ["--delay" as string]: `${i * 120}ms` }}
                  className="rounded-3xl bg-bg p-7 sm:p-8"
                >
                  <span className="font-serif text-5xl italic text-sage">{s.n}</span>
                  <h3 className="mt-6 text-lg font-medium">{s.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{s.text}</p>
                </li>
              ))}
            </ol>
          </Container>
        </section>

        {/* 4. Áreas de atendimento */}
        <section className="py-20 sm:py-28">
          <Container className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
            <div data-reveal>
              <Eyebrow>Áreas de atendimento</Eyebrow>
              <h2 className="mt-4 font-serif text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
                Saúde dos fios, do couro cabeludo e da pele
              </h2>
            </div>
            <ul data-reveal className="divide-y divide-line border-y border-line">
              {areas.map((a) => (
                <li key={a} className="flex items-center gap-4 py-5 text-[17px]">
                  <span className="size-2 shrink-0 rounded-full bg-sage" aria-hidden="true" />
                  {a}
                </li>
              ))}
            </ul>
          </Container>
        </section>

        {/* 5. Perguntas frequentes */}
        <section className="border-t border-line py-20 sm:py-28">
          <Container className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
            <div data-reveal>
              <Eyebrow>Dúvidas frequentes</Eyebrow>
              <h2 className="mt-4 font-serif text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
                Antes da sua avaliação
              </h2>
            </div>
            <div data-reveal className="space-y-3">
              {faq.map((item) => (
                <details key={item.q} className="group rounded-2xl border border-line bg-white/50 px-6 open:bg-white">
                  <summary className="flex min-h-14 cursor-pointer items-center justify-between gap-6 py-4 font-medium">
                    {item.q}
                    <span
                      className="grid size-7 shrink-0 place-items-center rounded-full border border-line text-sage-deep transition-transform duration-300 group-open:rotate-45"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>
                  <p className="pb-5 pr-10 leading-relaxed text-muted">{item.a}</p>
                </details>
              ))}
            </div>
          </Container>
        </section>

        {/* 6. Localização */}
        <section className="bg-surface py-20 sm:py-28">
          <Container className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
            <div data-reveal>
              <Eyebrow>Localização</Eyebrow>
              <h2 className="mt-4 font-serif text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
                Na Cidade São Mateus, Zona Leste
              </h2>
              <address className="mt-8 not-italic leading-relaxed">
                {site.address.street}
                <br />
                {site.address.district}, {site.address.city} – {site.address.state}
                <br />
                CEP {site.address.zip}
              </address>
              <dl className="mt-8 divide-y divide-line border-y border-line text-[15px]">
                {site.hours.map((h) => (
                  <div key={h.days} className="flex justify-between py-3">
                    <dt className="text-muted">{h.days}</dt>
                    <dd className={h.time === "Fechado" ? "text-muted" : ""}>{h.time}</dd>
                  </div>
                ))}
              </dl>
              <a
                href={site.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full border border-text/20 px-6 py-3 text-[15px] transition-colors hover:border-sage-deep hover:text-sage-deep"
              >
                <PinIcon /> Como chegar
              </a>
            </div>
            <div data-reveal className="overflow-hidden rounded-[28px] border border-line bg-sand">
              <iframe
                src={site.mapEmbed}
                title={`Mapa: ${fullAddress}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-80 w-full grayscale-[35%] sm:h-full sm:min-h-[460px]"
              />
            </div>
          </Container>
        </section>

        {/* 7. CTA final */}
        <section className="py-20 sm:py-28">
          <Container>
            <div data-reveal className="texture-sand relative overflow-hidden rounded-[32px] px-6 py-16 text-center sm:px-16 sm:py-24">
              <div className="strands absolute inset-0 opacity-60" />
              <div className="relative">
                <h2 className="mx-auto max-w-2xl font-serif text-4xl font-medium leading-tight tracking-tight text-balance sm:text-6xl">
                  Cuide da saúde dos seus fios com quem entende do assunto
                </h2>
                <div className="mt-10">
                  <WhatsAppButton>Agendar avaliação</WhatsAppButton>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>

      {/* 8. Rodapé */}
      <footer className="border-t border-line pb-28 pt-12 text-sm text-muted md:pb-12">
        <Container className="grid gap-8 sm:grid-cols-2">
          <div>
            <p className="font-serif text-2xl text-text">{site.name}</p>
            <p className="mt-1">{site.role}</p>
            <p className="mt-1">CRBM {site.crbm}</p>
          </div>
          <div className="space-y-1 sm:text-right">
            <p>{site.address.street}</p>
            <p>
              {site.address.district}, {site.address.city} – {site.address.state} · {site.address.zip}
            </p>
            <p>
              WhatsApp:{" "}
              <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="text-text underline-offset-4 hover:underline">
                {site.phone}
              </a>
            </p>
          </div>
        </Container>
        <Container className="mt-10 border-t border-line pt-6 text-xs">
          Desenvolvido por <span className="text-text">Gonzaga Code</span>
        </Container>
      </footer>

      {/* Botão flutuante de WhatsApp (mobile) */}
      <a
        href={site.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Agendar avaliação pelo WhatsApp"
        className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-5 z-40 grid size-14 place-items-center rounded-full bg-[#25d366] text-white shadow-[0_10px_30px_-8px_rgba(0,0,0,0.35)] transition-transform active:scale-95 md:hidden"
      >
        <WhatsAppIcon className="size-7" />
      </a>

      <Reveal />
    </>
  );
}
