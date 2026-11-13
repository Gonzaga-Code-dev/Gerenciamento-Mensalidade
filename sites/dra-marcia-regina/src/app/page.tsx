import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";
import { WhatsAppIcon } from "@/components/icons";
import { areas, faq, site, steps } from "@/content/site";

function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1120px] px-5 sm:px-8 ${className}`}>{children}</div>;
}

function CtaButton({ children, variant = "dark" }: { children: ReactNode; variant?: "dark" | "light" }) {
  const styles =
    variant === "dark"
      ? "bg-sage-deep text-white hover:bg-[#46543f]"
      : "bg-white text-text hover:bg-bg";
  return (
    <a
      href={site.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-12 shrink-0 items-center whitespace-nowrap justify-center gap-2.5 rounded-[3px] px-6 py-3 text-[15px] font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage-deep ${styles}`}
    >
      <WhatsAppIcon className="size-[18px]" />
      {children}
    </a>
  );
}

function SectionTitle({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h2 className={`font-serif text-[2.1rem] font-medium leading-[1.1] text-balance sm:text-[2.75rem] ${className}`}>
      {children}
    </h2>
  );
}

const nav = [
  { label: "Sobre", href: "#sobre" },
  { label: "Atendimento", href: "#atendimento" },
  { label: "Dúvidas", href: "#duvidas" },
  { label: "Localização", href: "#localizacao" },
];

export default function Home() {
  return (
    <>
      {/* Faixa de prévia */}
      <div className="fixed inset-x-0 top-0 z-50 bg-text px-4 py-[7px] text-center text-[11px] text-bg/80">
        Prévia desenvolvida por <span className="text-bg">Gonzaga Code</span> para {site.name}
      </div>

      <header className="border-b border-line pt-[31px]">
        <Container className="flex h-[72px] items-center justify-between gap-6">
          <a href="#inicio" className="leading-tight">
            <span className="block font-serif text-[22px] font-medium">{site.name}</span>
            <span className="block text-[11px] text-muted">{site.role}</span>
          </a>
          <nav aria-label="Principal" className="hidden lg:block">
            <ul className="flex gap-8 text-sm text-muted">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="transition-colors hover:text-text">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-[3px] border border-text/80 px-4 py-2 text-sm transition-colors hover:bg-text hover:text-bg sm:inline-flex"
          >
            Agendar avaliação
          </a>
        </Container>
      </header>

      <main id="inicio">
        {/* 1. Hero */}
        <section>
          <Container className="grid gap-10 pb-14 pt-10 sm:pt-16 lg:grid-cols-12 lg:gap-12 lg:pb-20">
            <div className="flex flex-col justify-center lg:col-span-6">
              <p className="flex items-center gap-2 text-[13px] text-muted">
                <span className="tracking-[0.15em] text-[#b8932c]" aria-hidden="true">
                  ★★★★★
                </span>
                <span>
                  {site.rating.value} no Google · {site.rating.count} avaliações
                </span>
              </p>
              <h1 className="mt-5 font-serif text-[3rem] font-medium leading-[1.02] sm:text-[4.25rem]">
                Tricologia <span className="whitespace-nowrap">em São Mateus</span>
              </h1>
              <p className="mt-6 max-w-[30rem] text-[17px] leading-[1.7] text-muted">
                Avaliação individual para entender a causa da queda de cabelo e definir o cuidado certo para os
                seus fios e couro cabeludo.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
                <CtaButton>Agendar avaliação pelo WhatsApp</CtaButton>
                <a href="#localizacao" className="whitespace-nowrap text-sm text-muted underline decoration-line underline-offset-[6px] hover:text-text hover:decoration-text">
                  Ver endereço e horários
                </a>
              </div>
              <p className="mt-10 border-t border-line pt-5 text-sm text-muted">
                <span className="text-text">{site.name}</span> · {site.role}
              </p>
            </div>
            <div className="lg:col-span-6">
              <div className="photo aspect-[4/3] w-full sm:aspect-[16/11] lg:aspect-[5/6]" role="img" aria-label="Espaço reservado para foto do consultório" />
            </div>
          </Container>

          {/* Informações práticas */}
          <div className="border-y border-line bg-surface">
            <Container className="grid divide-y divide-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              <div className="py-5 sm:pr-8">
                <p className="text-xs text-muted">Endereço</p>
                <p className="mt-1 text-[15px]">
                  {site.address.street.replace(" – Sala 01", "")}, {site.address.district}
                </p>
              </div>
              <div className="py-5 sm:px-8">
                <p className="text-xs text-muted">Horário</p>
                <p className="mt-1 text-[15px]">Seg a sex 9h–18h · Sáb 9h–16h</p>
              </div>
              <div className="py-5 sm:pl-8">
                <p className="text-xs text-muted">Agendamento</p>
                <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="mt-1 block text-[15px] hover:text-sage-deep">
                  WhatsApp {site.phone.replace("+55 ", "")}
                </a>
              </div>
            </Container>
          </div>
        </section>

        {/* 2. Sobre */}
        <section id="sobre" className="scroll-mt-10 py-20 sm:py-28">
          <Container className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
            <div data-reveal className="lg:col-span-5">
              <div className="photo photo-sage aspect-[4/5] w-full" role="img" aria-label="Espaço reservado para foto da Dra. Márcia Regina" />
              <p className="mt-3 text-xs text-muted">Espaço para foto da profissional</p>
            </div>
            <div data-reveal className="lg:col-span-6 lg:col-start-7 lg:pt-10">
              <SectionTitle>Cuidado que começa por entender você</SectionTitle>
              <p className="mt-6 text-[17px] leading-[1.75] text-muted">
                A {site.name} é biomédica esteta com atuação em tricologia, a área que estuda a saúde dos cabelos
                e do couro cabeludo. Cada atendimento começa com uma avaliação detalhada, com tempo para ouvir,
                explicar e esclarecer cada etapa do tratamento.
              </p>
              <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-line pt-6 text-sm">
                <div>
                  <dt className="text-muted">Formação</dt>
                  <dd className="mt-1">Biomédica Esteta</dd>
                </div>
                <div>
                  <dt className="text-muted">Registro</dt>
                  <dd className="mt-1">CRBM {site.crbm}</dd>
                </div>
              </dl>
            </div>
          </Container>
        </section>

        {/* 3. Como funciona */}
        <section className="border-t border-line bg-surface py-20 sm:py-28">
          <Container>
            <SectionTitle className="max-w-md">Como funciona o atendimento</SectionTitle>
            <ol className="mt-12 grid gap-10 md:grid-cols-3 md:gap-10">
              {steps.map((s, i) => (
                <li key={s.n} data-reveal style={{ ["--delay" as string]: `${i * 100}ms` }} className="border-t border-text/70 pt-5">
                  <p className="text-sm tabular-nums text-sage-deep">{s.n}</p>
                  <h3 className="mt-3 font-serif text-2xl font-medium">{s.title}</h3>
                  <p className="mt-3 leading-[1.7] text-muted">{s.text}</p>
                </li>
              ))}
            </ol>
          </Container>
        </section>

        {/* 4. Áreas de atendimento */}
        <section id="atendimento" className="scroll-mt-10 py-20 sm:py-28">
          <Container className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div data-reveal className="lg:col-span-5">
              <SectionTitle>Áreas de atendimento</SectionTitle>
              <p className="mt-5 max-w-sm leading-[1.7] text-muted">
                Cuidado com a saúde dos fios, do couro cabeludo e da pele, sempre a partir de uma avaliação.
              </p>
            </div>
            <ul data-reveal className="border-t border-line lg:col-span-7">
              {areas.map((a, i) => (
                <li key={a} className="flex items-baseline gap-6 border-b border-line py-5">
                  <span className="w-6 text-sm tabular-nums text-muted">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-[17px]">{a}</span>
                </li>
              ))}
            </ul>
          </Container>
        </section>

        {/* 5. Perguntas frequentes */}
        <section id="duvidas" className="scroll-mt-10 border-t border-line py-20 sm:py-28">
          <Container className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div data-reveal className="lg:col-span-5">
              <SectionTitle>Perguntas frequentes</SectionTitle>
            </div>
            <div data-reveal className="border-t border-line lg:col-span-7">
              {faq.map((item) => (
                <details key={item.q} className="group border-b border-line">
                  <summary className="flex min-h-16 cursor-pointer items-center justify-between gap-6 py-5 text-[17px]">
                    {item.q}
                    <svg
                      viewBox="0 0 16 16"
                      className="size-4 shrink-0 text-muted transition-transform duration-300 group-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      aria-hidden="true"
                    >
                      <path d="M3.5 6l4.5 4.5L12.5 6" />
                    </svg>
                  </summary>
                  <p className="max-w-xl pb-6 leading-[1.7] text-muted">{item.a}</p>
                </details>
              ))}
            </div>
          </Container>
        </section>

        {/* 6. Localização */}
        <section id="localizacao" className="scroll-mt-10 border-t border-line bg-surface py-20 sm:py-28">
          <Container className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div data-reveal className="lg:col-span-5">
              <SectionTitle>Localização e horários</SectionTitle>
              <address className="mt-8 not-italic leading-[1.8]">
                {site.address.street}
                <br />
                {site.address.district}, {site.address.city} – {site.address.state}
                <br />
                CEP {site.address.zip}
              </address>
              <dl className="mt-8 border-t border-line text-[15px]">
                {site.hours.map((h) => (
                  <div key={h.days} className="flex justify-between border-b border-line py-3">
                    <dt className="text-muted">{h.days}</dt>
                    <dd className={h.time === "Fechado" ? "text-muted" : ""}>{h.time}</dd>
                  </div>
                ))}
              </dl>
              <a
                href={site.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex min-h-12 items-center rounded-[3px] border border-text/80 px-6 py-3 text-[15px] transition-colors hover:bg-text hover:text-bg"
              >
                Como chegar
              </a>
            </div>
            <div data-reveal className="border border-line bg-sand lg:col-span-7">
              <iframe
                src={site.mapEmbed}
                title={`Mapa: ${site.address.street}, ${site.address.district}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block h-80 w-full sm:h-full sm:min-h-[460px]"
              />
            </div>
          </Container>
        </section>

        {/* 7. CTA final */}
        <section className="bg-sage-deep text-white">
          <Container className="flex flex-col gap-8 py-16 sm:py-20 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="max-w-2xl font-serif text-[2.1rem] font-medium leading-[1.1] text-balance sm:text-[2.75rem]">
              Cuide da saúde dos seus fios com quem entende do assunto
            </h2>
            <div className="shrink-0">
              <CtaButton variant="light">Agendar avaliação</CtaButton>
            </div>
          </Container>
        </section>
      </main>

      {/* 8. Rodapé */}
      <footer className="pb-28 pt-14 text-sm text-muted md:pb-14">
        <Container className="grid gap-8 sm:grid-cols-3">
          <div>
            <p className="font-serif text-xl font-medium text-text">{site.name}</p>
            <p className="mt-1">{site.role}</p>
            <p>CRBM {site.crbm}</p>
          </div>
          <div>
            <p className="text-text">Endereço</p>
            <p className="mt-1">{site.address.street}</p>
            <p>
              {site.address.district}, {site.address.city} – {site.address.state}, {site.address.zip}
            </p>
          </div>
          <div>
            <p className="text-text">Contato</p>
            <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="mt-1 block hover:text-text">
              WhatsApp {site.phone}
            </a>
          </div>
        </Container>
        <Container className="mt-12 border-t border-line pt-6 text-xs">Desenvolvido por Gonzaga Code</Container>
      </footer>

      {/* Botão flutuante de WhatsApp (mobile) */}
      <a
        href={site.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Agendar avaliação pelo WhatsApp"
        className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-5 z-40 grid size-14 place-items-center rounded-full bg-[#25d366] text-white shadow-[0_6px_20px_-6px_rgba(0,0,0,0.35)] transition-transform active:scale-95 md:hidden"
      >
        <WhatsAppIcon className="size-7" />
      </a>

      <Reveal />
    </>
  );
}
