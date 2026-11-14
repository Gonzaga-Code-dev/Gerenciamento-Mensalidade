import Image from "next/image";
import type { ReactNode } from "react";
import FaqAccordion from "@/components/FaqAccordion";
import Reveal from "@/components/Reveal";
import { ArrowUpRightIcon, ClockIcon, MapPinIcon, StarIcon, WhatsAppIcon } from "@/components/icons";
import { areas, faq, site, steps } from "@/content/site";

const container = "mx-auto max-w-6xl px-5 sm:px-8";

const primaryButton =
  "inline-flex min-h-12 w-full items-center justify-center gap-2.5 rounded-lg bg-sage py-3.5 text-sm font-medium text-white transition-colors duration-150 hover:bg-sage-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage sm:w-auto sm:text-[15px]";

function ClinicImage({
  src,
  alt,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <figure className={`relative overflow-hidden rounded-xl border border-hairline/70 bg-image ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={896}
        priority={priority}
        sizes="(min-width: 1024px) 560px, 100vw"
        className="h-full w-full object-cover object-center"
      />
    </figure>
  );
}

function Kicker({ children }: { children: ReactNode }) {
  return <p className="text-xs font-medium tracking-wide text-sage">{children}</p>;
}

function SectionTitle({ id, children, className = "" }: { id: string; children: ReactNode; className?: string }) {
  return (
    <h2 id={id} className={`mt-3 text-balance text-3xl font-medium leading-tight text-graphite sm:text-4xl ${className}`}>
      {children}
    </h2>
  );
}

const nav = [
  { label: "Sobre", href: "#sobre" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Atendimentos", href: "#atendimentos" },
  { label: "Localização", href: "#localizacao" },
];

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-canvas text-graphite">
      {/* Faixa discreta fixa de prévia */}
      <div
        role="note"
        aria-label="Aviso de prévia"
        className="fixed inset-x-0 top-0 z-50 flex h-7 items-center justify-center border-b border-hairline bg-sand/95 px-4 text-center backdrop-blur-sm"
      >
        <p className="truncate text-[11px] font-medium tracking-wide text-muted">
          Prévia desenvolvida por Gonzaga Code para {site.name}
        </p>
      </div>

      {/* Cabeçalho */}
      <header className="border-b border-hairline/80 bg-canvas pt-7">
        <div className={`${container} flex items-center justify-between gap-8 py-4`}>
          <a href="#inicio" className="shrink-0 whitespace-nowrap font-serif text-xl font-semibold tracking-tight sm:text-2xl">
            {site.name}
          </a>
          <nav aria-label="Navegação principal" className="hidden items-center gap-7 text-sm font-medium text-muted md:flex">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="shrink-0 whitespace-nowrap transition-colors duration-150 hover:text-graphite hover:underline hover:underline-offset-4"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-10 shrink-0 items-center justify-center whitespace-nowrap rounded-lg bg-sage px-4 py-2 text-xs font-medium text-white transition-colors duration-150 hover:bg-sage-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage sm:text-sm"
          >
            Agendar
          </a>
        </div>
      </header>

      <main id="inicio">
        {/* 1. Hero */}
        <section className={`${container} pb-16 pt-10 sm:pb-24 sm:pt-16 lg:pt-20`}>
          <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="flex flex-col justify-center lg:col-span-6">
              <div className="mb-5 flex items-center gap-2 text-xs font-medium text-muted sm:text-sm">
                <StarIcon className="size-3.5 text-sage" />
                <span className="tabular-nums">{site.rating.value} no Google</span>
                <span aria-hidden="true">·</span>
                <span className="tabular-nums">{site.rating.count} avaliações</span>
              </div>

              <h1 className="max-w-xl text-balance text-[clamp(2.35rem,5vw,3.85rem)] font-medium leading-[1.06] tracking-tight">
                Tricologia em São Mateus
              </h1>

              <p className="mt-5 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
                Avaliação individual para entender a causa da queda de cabelo e definir o cuidado certo para os seus fios
                e couro cabeludo.
              </p>

              <div className="mt-8 flex flex-col items-start gap-4">
                <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className={`${primaryButton} px-7`}>
                  <WhatsAppIcon className="size-4 shrink-0" />
                  <span>Agendar avaliação pelo WhatsApp</span>
                </a>
                <p className="text-sm text-muted">
                  {site.name} <span aria-hidden="true">·</span> {site.role}
                </p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <ClinicImage
                src="/images/hero.webp"
                alt="Composição minimalista em pedra travertino, linho claro e ramo de eucalipto sob luz natural"
                priority
                className="aspect-[4/3] h-full w-full"
              />
            </div>
          </div>
        </section>

        {/* 2. Sobre */}
        <section
          id="sobre"
          data-reveal
          aria-labelledby="sobre-titulo"
          className="border-t border-hairline/80 bg-sand/55 py-16 sm:py-24"
        >
          <div className={`${container} grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16`}>
            <div className="order-2 lg:order-1 lg:col-span-5">
              <ClinicImage
                src="/images/sobre.webp"
                alt="Detalhe de ambiente clínico minimalista em tons areia, pedra natural e cerâmica verde-sálvia"
                className="aspect-[4/3] w-full"
              />
            </div>
            <div className="order-1 lg:order-2 lg:col-span-7">
              <Kicker>Sobre o atendimento</Kicker>
              <SectionTitle id="sobre-titulo" className="max-w-xl">
                Cuidado que começa por entender você
              </SectionTitle>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-[17px]">
                A {site.name} é biomédica esteta com atuação em tricologia, a área que estuda a saúde dos cabelos e do
                couro cabeludo. Cada atendimento começa com uma avaliação detalhada, com tempo para ouvir, explicar e
                esclarecer cada etapa do tratamento.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-hairline pt-6 text-sm text-muted">
                <span>Escuta individualizada</span>
                <span aria-hidden="true">·</span>
                <span>Explicação clara em cada etapa</span>
                <span aria-hidden="true">·</span>
                <span>São Mateus, Zona Leste</span>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Como funciona */}
        <section
          id="como-funciona"
          data-reveal
          aria-labelledby="como-funciona-titulo"
          className="border-t border-hairline/80 py-16 sm:py-24"
        >
          <div className={container}>
            <div className="max-w-xl">
              <Kicker>Como funciona</Kicker>
              <SectionTitle id="como-funciona-titulo">
                Um processo claro, do primeiro contato ao acompanhamento
              </SectionTitle>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-8 border-t border-hairline pt-10 md:grid-cols-3 md:gap-10">
              {steps.map((step) => (
                <article key={step.n} className="flex flex-col">
                  <span className="font-serif text-3xl font-normal tabular-nums text-sage">{step.n}</span>
                  <h3 className="mt-3 text-2xl font-medium">{step.title}</h3>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-muted">{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Áreas de atendimento */}
        <section
          id="atendimentos"
          data-reveal
          aria-labelledby="atendimentos-titulo"
          className="border-t border-hairline/80 bg-sand/55 py-16 sm:py-24"
        >
          <div className={`${container} grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-14`}>
            <div className="lg:col-span-5">
              <Kicker>Áreas de atendimento</Kicker>
              <SectionTitle id="atendimentos-titulo">Atenção dedicada à saúde capilar e estética</SectionTitle>
              <p className="mt-4 text-[15px] leading-relaxed text-muted sm:text-base">
                As condutas são definidas presencialmente após a avaliação individual, considerando o histórico e os
                objetivos de cada pessoa.
              </p>
              <ClinicImage
                src="/images/cuidado.webp"
                alt="Frasco de vidro fosco sobre pedra natural em tons neutros suaves"
                className="mt-8 aspect-[4/3] w-full"
              />
            </div>
            <div className="lg:col-span-7">
              <div className="divide-y divide-hairline border-y border-hairline">
                {areas.map((area, idx) => (
                  <div key={area.title} className="py-6 sm:py-7">
                    <div className="flex items-baseline gap-4">
                      <span className="text-xs font-medium tabular-nums text-sage">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="text-2xl font-medium">{area.title}</h3>
                        <p className="mt-2 text-[15px] leading-relaxed text-muted">{area.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 5. Perguntas frequentes */}
        <section
          id="duvidas"
          data-reveal
          aria-labelledby="duvidas-titulo"
          className="border-t border-hairline/80 py-16 sm:py-24"
        >
          <div className={`${container} grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14`}>
            <div className="lg:col-span-4">
              <Kicker>Perguntas frequentes</Kicker>
              <SectionTitle id="duvidas-titulo">Dúvidas comuns antes da consulta</SectionTitle>
              <p className="mt-4 text-[15px] leading-relaxed text-muted">
                Se preferir tirar alguma dúvida antes de agendar, você pode conversar diretamente com a clínica pelo
                WhatsApp.
              </p>
            </div>
            <div className="lg:col-span-8">
              <FaqAccordion items={faq} />
            </div>
          </div>
        </section>

        {/* 6. Localização */}
        <section
          id="localizacao"
          data-reveal
          aria-labelledby="localizacao-titulo"
          className="border-t border-hairline/80 bg-sand/55 py-16 sm:py-24"
        >
          <div className={`${container} grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12`}>
            <div className="flex flex-col justify-between lg:col-span-5">
              <div>
                <Kicker>Localização</Kicker>
                <SectionTitle id="localizacao-titulo">Atendimento em São Mateus</SectionTitle>

                <div className="mt-8 space-y-6 border-t border-hairline pt-6">
                  <div className="flex items-start gap-3.5">
                    <MapPinIcon className="mt-0.5 size-5 shrink-0 text-sage" />
                    <div>
                      <p className="text-sm font-medium">Endereço</p>
                      <p className="mt-1 text-[15px] leading-relaxed text-muted">
                        {site.address.street}
                        <br />
                        {site.address.district}, {site.address.city} – {site.address.state}, {site.address.zip}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <ClockIcon className="mt-0.5 size-5 shrink-0 text-sage" />
                    <div>
                      <p className="text-sm font-medium">Horários de atendimento</p>
                      <p className="mt-1 text-[15px] leading-relaxed tabular-nums text-muted">
                        Segunda a sexta: 9h–18h
                        <br />
                        Sábado: 9h–16h
                        <br />
                        Domingo: fechado
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href={site.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-sage px-6 py-2.5 text-sm font-medium text-sage transition-colors duration-150 hover:bg-sage hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
                >
                  <span>Como chegar</span>
                  <ArrowUpRightIcon className="size-4 shrink-0" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="h-[300px] w-full overflow-hidden rounded-xl border border-hairline bg-image sm:h-[360px] lg:h-full lg:min-h-[380px]">
                <iframe
                  title={`Mapa com a localização da clínica ${site.name} em São Mateus`}
                  src={site.mapEmbed}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full border-0"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </section>

        {/* 7. CTA final */}
        <section data-reveal aria-labelledby="cta-final-titulo" className="border-t border-hairline/80 py-20 sm:py-28">
          <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
            <h2
              id="cta-final-titulo"
              className="mx-auto max-w-2xl text-balance text-3xl font-medium leading-tight sm:text-5xl"
            >
              Cuide da saúde dos seus fios com quem entende do assunto
            </h2>
            <div className="mt-8 flex justify-center">
              <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className={`${primaryButton} px-8`}>
                <WhatsAppIcon className="size-4 shrink-0" />
                <span>Agendar avaliação</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* 8. Rodapé */}
      <footer className="border-t border-hairline bg-sand/70 pb-24 pt-12 md:pb-12">
        <div className={container}>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <p className="font-serif text-2xl font-medium">{site.name}</p>
              <p className="mt-1.5 text-sm text-muted">{site.role}</p>
              <p className="mt-1 text-sm text-muted">CRBM {site.crbm}</p>
            </div>
            <div>
              <p className="text-sm font-medium">Consultório</p>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">
                {site.address.street}
                <br />
                {site.address.district}, {site.address.city} – {site.address.state}, {site.address.zip}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium">Contato</p>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1.5 inline-flex min-h-10 items-center gap-2 text-sm tabular-nums text-sage underline-offset-4 hover:underline"
              >
                <WhatsAppIcon className="size-4 shrink-0" />
                <span>{site.phone}</span>
              </a>
            </div>
          </div>
          <div className="mt-10 flex flex-col items-start justify-between gap-2 border-t border-hairline pt-6 text-xs text-muted sm:flex-row sm:items-center">
            <p>
              © {year} {site.name}. Todos os direitos reservados.
            </p>
            <p>Desenvolvido por Gonzaga Code</p>
          </div>
        </div>
      </footer>

      {/* Botão flutuante de WhatsApp (mobile) */}
      <a
        href={site.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Agendar avaliação pelo WhatsApp"
        className="fixed bottom-4 right-4 z-40 inline-flex h-12 items-center gap-2 rounded-full bg-sage px-5 text-sm font-medium text-white shadow-lg shadow-graphite/15 transition-transform duration-150 hover:bg-sage-hover active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage md:hidden"
      >
        <WhatsAppIcon className="size-5 shrink-0" />
        <span className="whitespace-nowrap">WhatsApp</span>
      </a>

      <Reveal />
    </div>
  );
}
