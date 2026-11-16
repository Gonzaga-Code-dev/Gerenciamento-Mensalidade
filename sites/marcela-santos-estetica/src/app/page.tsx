import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { faq, pillars, services, site } from "@/content/site";

const container = "mx-auto w-full max-w-6xl px-5 sm:px-8";

function CtaButton({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <a
      href={site.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-12 items-center justify-center gap-2.5 whitespace-nowrap rounded-2xl px-6 py-3.5 text-[15px] font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deep ${
        light ? "bg-mist text-deep hover:bg-white" : "bg-deep-2 text-white hover:bg-deep"
      }`}
    >
      <WhatsAppIcon className="size-[18px]" />
      {children}
    </a>
  );
}

function Tag({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p
      className={`inline-flex items-center gap-2 text-sm font-medium ${light ? "text-aqua-soft" : "text-deep-2"}`}
    >
      <span className={`size-1.5 rounded-full ${light ? "bg-aqua" : "bg-aqua"}`} aria-hidden="true" />
      {children}
    </p>
  );
}

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <>
      {/* Faixa de prévia */}
      <div className="fixed inset-x-0 top-0 z-50 bg-deep px-4 py-[7px] text-center text-[11px] text-mist/80">
        Prévia desenvolvida por Gonzaga Code para {site.short}
      </div>

      <header className="pt-[31px]">
        <div className={`${container} flex h-20 items-center justify-between gap-6`}>
          <a href="#inicio" className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-full bg-deep-2 font-serif text-lg italic text-mist">
              ms
            </span>
            <span className="leading-tight">
              <span className="block font-serif text-xl">Marcela Santos</span>
              <span className="block text-[11px] text-muted">Estética e Saúde</span>
            </span>
          </a>
          <nav aria-label="Principal" className="hidden gap-8 text-sm text-muted md:flex">
            <a href="#procedimentos" className="hover:text-text">
              Procedimentos
            </a>
            <a href="#atendimento" className="hover:text-text">
              Atendimento
            </a>
            <a href="#duvidas" className="hover:text-text">
              Dúvidas
            </a>
            <a href="#local" className="hover:text-text">
              Localização
            </a>
          </nav>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-2xl bg-deep-2 px-4 py-2 text-sm text-white transition-colors hover:bg-deep sm:inline-flex"
          >
            Agendar
          </a>
        </div>
      </header>

      <main id="inicio">
        {/* 1. Hero */}
        <section className={`${container} grid gap-8 pb-16 pt-8 sm:pt-14 lg:grid-cols-12 lg:gap-10 lg:pb-24`}>
          <div className="flex flex-col justify-center lg:col-span-7">
            <Tag>Clínica de estética em São Mateus</Tag>
            <h1 className="mt-5 font-serif text-[3.2rem] leading-[0.98] tracking-tight text-balance sm:text-7xl lg:text-[5.6rem]">
              Cuidar de você, <em className="text-deep-2">com calma e critério</em>
            </h1>
            <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-muted">
              Limpeza de pele, microagulhamento, revitalização facial, massagem e depilação, com avaliação antes de
              cada cuidado e tempo para explicar cada etapa.
            </p>
            <div className="mt-9">
              <CtaButton>Agendar pelo WhatsApp</CtaButton>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="water relative aspect-[4/3] overflow-hidden rounded-[2rem] lg:aspect-[4/5]">
              <p className="absolute left-5 top-5 rounded-full bg-white/60 px-3 py-1 text-[11px] text-muted backdrop-blur">
                Espaço para foto do espaço
              </p>
              <div className="absolute inset-x-4 bottom-4 rounded-3xl bg-white/80 p-5 backdrop-blur-md">
                <p className="flex items-baseline gap-2">
                  <span className="font-serif text-4xl text-deep-2">{site.rating.value}</span>
                  <span className="text-sm text-muted">no Google · {site.rating.count} avaliações</span>
                </p>
                <p className="mt-2 text-sm text-muted">{site.address.street} · São Mateus</p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Procedimentos */}
        <section id="procedimentos" className="scroll-mt-10 pb-20 sm:pb-28">
          <div className={container}>
            <div data-reveal className="max-w-2xl">
              <Tag>Procedimentos</Tag>
              <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight sm:text-6xl">
                Cuidados para o rosto, <em className="text-deep-2">o corpo e o bem-estar</em>
              </h2>
            </div>
            <div className="mt-12 space-y-12">
              {services.map((g) => (
                <div key={g.group} data-reveal>
                  <h3 className="border-b border-line pb-3 text-sm font-medium uppercase tracking-[0.16em] text-deep-2">
                    {g.group}
                  </h3>
                  <ul className="mt-6 grid gap-x-10 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
                    {g.items.map((it) => (
                      <li key={it.title}>
                        <p className="font-serif text-2xl">{it.title}</p>
                        <p className="mt-1.5 leading-relaxed text-muted">{it.text}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Atendimento */}
        <section id="atendimento" className="scroll-mt-10 rounded-t-[2.5rem] bg-foam py-20 sm:py-28">
          <div className={container}>
            <div data-reveal className="max-w-2xl">
              <Tag>Como é o atendimento</Tag>
              <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight sm:text-6xl">
                Primeiro entender, <em className="text-deep-2">depois cuidar</em>
              </h2>
            </div>
            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {pillars.map((p, i) => (
                <article key={p.title} data-reveal className="rounded-3xl bg-mist p-7 sm:p-8">
                  <span className="grid size-10 place-items-center rounded-full bg-aqua-soft font-serif text-lg text-deep-2">
                    {i + 1}
                  </span>
                  <h3 className="mt-6 font-serif text-2xl">{p.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{p.text}</p>
                </article>
              ))}
            </div>
            <div
              data-reveal
              className="mt-4 flex flex-col gap-6 rounded-3xl bg-deep-2 p-7 text-mist sm:flex-row sm:items-center sm:justify-between sm:p-9"
            >
              <div>
                <p className="font-serif text-2xl sm:text-3xl">Quer saber qual cuidado é indicado para você?</p>
                <p className="mt-2 text-mist/70">Conte o que você quer cuidar e receba uma orientação.</p>
              </div>
              <CtaButton light>Falar no WhatsApp</CtaButton>
            </div>
          </div>
        </section>

        {/* 3. Dúvidas */}
        <section id="duvidas" className="scroll-mt-10 bg-foam pb-20 sm:pb-28">
          <div className={`${container} grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16`}>
            <div data-reveal>
              <Tag>Dúvidas</Tag>
              <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight sm:text-5xl">Antes de agendar</h2>
            </div>
            <div data-reveal className="space-y-3">
              {faq.map((item) => (
                <details key={item.q} className="group rounded-2xl bg-mist px-6">
                  <summary className="flex min-h-16 cursor-pointer items-center justify-between gap-6 py-4 text-[17px] font-medium">
                    {item.q}
                    <span
                      className="grid size-8 shrink-0 place-items-center rounded-full bg-aqua-soft text-deep-2 transition-transform group-open:rotate-45"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>
                  <p className="max-w-xl pb-6 leading-relaxed text-muted">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Localização */}
        <section id="local" className="scroll-mt-10 py-20 sm:py-28">
          <div className={`${container} grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16`}>
            <div data-reveal>
              <Tag>Localização</Tag>
              <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
                Na Av. Mateo Bei, <em className="text-deep-2">em São Mateus</em>
              </h2>
              <address className="mt-8 not-italic leading-relaxed">
                {site.address.street}
                <br />
                {site.address.district}, {site.address.city} – {site.address.state}
                <br />
                CEP {site.address.zip}
              </address>
              <p className="mt-6 text-[15px]">
                <span className="text-muted">Horário:</span> {site.hours}
              </p>
              <p className="mt-1 text-sm text-muted">Agendamento pelo WhatsApp.</p>
              <a
                href={site.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex min-h-12 items-center rounded-2xl border border-deep-2/30 px-6 py-3 text-[15px] text-deep-2 transition-colors hover:bg-deep-2 hover:text-white"
              >
                Como chegar
              </a>
            </div>
            <div data-reveal className="overflow-hidden rounded-[2rem] bg-foam">
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

        {/* 5. CTA final */}
        <section className={`${container} pb-20 sm:pb-28`}>
          <div data-reveal className="water rounded-[2.5rem] px-6 py-16 text-center sm:py-20">
            <h2 className="mx-auto max-w-2xl font-serif text-4xl leading-tight tracking-tight text-balance sm:text-6xl">
              Seu próximo cuidado <em className="text-deep-2">começa com uma conversa</em>
            </h2>
            <div className="mt-10">
              <CtaButton>Agendar horário</CtaButton>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-deep pb-28 pt-12 text-sm text-mist/65 md:pb-12">
        <div className={`${container} flex flex-col gap-4 sm:flex-row sm:justify-between`}>
          <div>
            <p className="font-serif text-xl text-mist">{site.name}</p>
            <p className="mt-1">
              {site.address.street} · {site.address.district}, {site.address.city} – {site.address.state}
            </p>
          </div>
          <div className="sm:text-right">
            <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-mist">
              WhatsApp {site.phone}
            </a>
            <p className="mt-1 text-xs">
              © {year} {site.short} · Desenvolvido por Gonzaga Code
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
        className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-40 grid size-14 place-items-center rounded-full bg-deep-2 text-white shadow-lg shadow-deep/30 transition-transform active:scale-95 md:hidden"
      >
        <WhatsAppIcon className="size-7" />
      </a>

      <Reveal />
    </>
  );
}
