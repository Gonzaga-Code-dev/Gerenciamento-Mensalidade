import { existsSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";
import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";
import {
  CalendarIcon,
  ChatIcon,
  ClipboardIcon,
  ClockIcon,
  DropIcon,
  LeafIcon,
  PinIcon,
  SearchIcon,
  SparkIcon,
  StarIcon,
  StrandsIcon,
  UserIcon,
  WhatsAppIcon,
} from "@/components/icons";
import { areas, faq, photos, site, steps } from "@/content/site";

// A foto entra automaticamente quando o arquivo existir em public/.
const hasFile = (src: string) => existsSync(join(process.cwd(), "public", src));

function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1160px] px-5 sm:px-8 ${className}`}>{children}</div>;
}

function GoldButton({ children }: { children: ReactNode }) {
  return (
    <a
      href={site.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-gold px-7 py-3.5 text-[15px] font-semibold text-green-deep shadow-[0_10px_30px_-12px_rgba(201,166,107,0.7)] transition-colors hover:bg-gold-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
    >
      <WhatsAppIcon className="size-[18px]" />
      {children}
    </a>
  );
}

function Kicker({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p className={`flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] ${light ? "text-gold" : "text-gold-deep"}`}>
      <span className={`h-px w-8 ${light ? "bg-gold/70" : "bg-gold"}`} aria-hidden="true" />
      {children}
    </p>
  );
}

function Title({ children, light = false, className = "" }: { children: ReactNode; light?: boolean; className?: string }) {
  return (
    <h2
      className={`mt-4 font-serif text-[2.25rem] font-medium leading-[1.08] text-balance sm:text-5xl ${light ? "text-white" : ""} ${className}`}
    >
      {children}
    </h2>
  );
}

function Portrait() {
  const ok = hasFile(photos.portrait);
  return (
    <div className="relative mx-auto h-[400px] w-full max-w-[460px] sm:h-[500px] lg:h-[580px]">
      {/* Arco de fundo */}
      <div className="absolute inset-x-[6%] bottom-0 top-[6%] rounded-t-full border border-gold/45 bg-white/[0.06]" />
      <div className="absolute inset-x-[12%] bottom-0 top-[12%] rounded-t-full bg-gradient-to-b from-sage/25 to-transparent" />
      {ok ? (
        <Image
          src={photos.portrait}
          alt={`${site.name}, ${site.role}`}
          fill
          priority
          sizes="(min-width: 1024px) 460px, 90vw"
          className="object-contain object-bottom"
        />
      ) : (
        <div className="absolute inset-x-[12%] bottom-0 top-[12%] flex items-end justify-center overflow-hidden rounded-t-full">
          <svg viewBox="0 0 200 220" className="w-[78%] text-sage/45" fill="currentColor" aria-hidden="true">
            <circle cx="100" cy="70" r="42" />
            <path d="M18 220c4-58 40-92 82-92s78 34 82 92z" />
          </svg>
          <span className="absolute bottom-5 rounded-full bg-green-deep/70 px-3 py-1 text-[11px] text-white/80 backdrop-blur">
            Foto da {site.name}
          </span>
        </div>
      )}
    </div>
  );
}

function AboutPhoto() {
  const ok = hasFile(photos.about);
  return (
    <div className="relative mx-auto w-full max-w-[440px]">
      <div className="absolute -right-3 -top-3 bottom-3 left-3 rounded-t-full rounded-b-3xl border border-gold/60" aria-hidden="true" />
      <div className="relative aspect-[4/5] overflow-hidden rounded-t-full rounded-b-3xl bg-sand">
        {ok ? (
          <Image src={photos.about} alt={`${site.name} em atendimento`} fill sizes="(min-width: 1024px) 440px, 90vw" className="object-cover" />
        ) : (
          <div className="absolute inset-0 grid place-items-center bg-gradient-to-b from-[#ece3d7] to-sand">
            <span className="rounded-full bg-white/70 px-3 py-1 text-[11px] text-muted">Foto do atendimento ou consultório</span>
          </div>
        )}
      </div>
    </div>
  );
}

const nav = [
  { label: "Sobre", href: "#sobre" },
  { label: "Atendimento", href: "#atendimento" },
  { label: "Dúvidas", href: "#duvidas" },
  { label: "Localização", href: "#localizacao" },
];

const highlights = [
  { icon: StarIcon, title: `${site.rating.value} no Google`, text: `${site.rating.count} avaliações` },
  { icon: SearchIcon, title: "Avaliação individual", text: "Couro cabeludo e fios" },
  { icon: ClockIcon, title: "Segunda a sábado", text: "Seg a sex 9h às 18h" },
  { icon: PinIcon, title: "Cidade São Mateus", text: "Zona Leste de SP" },
];

const evaluation = [
  { icon: UserIcon, label: "Seu histórico" },
  { icon: LeafIcon, label: "Seus hábitos" },
  { icon: DropIcon, label: "Seu couro cabeludo" },
  { icon: StrandsIcon, label: "Seus fios" },
];

const stepIcons = [SearchIcon, ClipboardIcon, CalendarIcon];
const areaIcons = [SearchIcon, StrandsIcon, DropIcon, SparkIcon];

export default function Home() {
  return (
    <>
      {/* Faixa de prévia */}
      <div className="fixed inset-x-0 top-0 z-50 bg-[#1d2419] px-4 py-[7px] text-center text-[11px] text-white/75">
        Prévia desenvolvida por <span className="text-gold-soft">Gonzaga Code</span> para {site.name}
      </div>

      {/* 1. Hero */}
      <div className="hero-bg relative overflow-hidden pt-[31px] text-white">
        <svg className="pointer-events-none absolute -right-40 top-10 hidden w-[900px] text-gold/15 lg:block" viewBox="0 0 900 900" fill="none" stroke="currentColor" aria-hidden="true">
          <circle cx="450" cy="450" r="440" />
          <circle cx="450" cy="450" r="360" />
        </svg>

        <header className="relative">
          <Container className="flex h-20 items-center justify-between gap-6">
            <a href="#inicio" className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-full border border-gold/60 font-serif text-lg text-gold">MR</span>
              <span className="leading-tight">
                <span className="block font-serif text-xl">{site.name}</span>
                <span className="block text-[11px] text-white/60">{site.role}</span>
              </span>
            </a>
            <nav aria-label="Principal" className="hidden lg:block">
              <ul className="flex gap-8 text-sm text-white/75">
                {nav.map((n) => (
                  <li key={n.href}>
                    <a href={n.href} className="transition-colors hover:text-gold-soft">
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
              className="hidden items-center gap-2 rounded-full border border-gold/60 px-5 py-2.5 text-sm text-gold-soft transition-colors hover:bg-gold hover:text-green-deep sm:inline-flex"
            >
              <WhatsAppIcon className="size-4" /> Agendar avaliação
            </a>
          </Container>
        </header>

        <main id="inicio">
          <section className="relative">
            <Container className="grid items-end gap-6 pt-8 lg:grid-cols-12 lg:gap-8 lg:pt-6">
              <div className="pb-4 lg:col-span-6 lg:pb-24">
                <ul className="flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.14em] text-gold-soft">
                  {["Tricologia", "Saúde capilar", "Avaliação individual"].map((t) => (
                    <li key={t} className="rounded-full border border-gold/40 bg-white/[0.04] px-3 py-1.5">
                      {t}
                    </li>
                  ))}
                </ul>
                <h1 className="mt-7 font-serif text-[3.1rem] font-medium leading-[1] sm:text-7xl lg:text-[5.25rem]">
                  Tricologia em <em className="block font-normal italic text-gold">São Mateus</em>
                </h1>
                <p className="mt-6 max-w-[31rem] text-[17px] leading-[1.7] text-white/80">
                  Avaliação individual para entender a causa da queda de cabelo e definir o cuidado certo para os
                  seus fios e couro cabeludo.
                </p>
                <div className="mt-9">
                  <GoldButton>Agendar avaliação pelo WhatsApp</GoldButton>
                </div>
                <p className="mt-6 text-sm text-white/70">
                  <span className="text-white">{site.name}</span> · {site.role}
                </p>
              </div>
              <div className="lg:col-span-6">
                <Portrait />
              </div>
            </Container>
          </section>

          {/* Destaques */}
          <div className="relative border-t border-gold/20 bg-green-deep/80">
            <Container className="grid grid-cols-2 gap-y-6 py-7 lg:grid-cols-4 lg:divide-x lg:divide-gold/20">
              {highlights.map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex items-center gap-3 lg:justify-center lg:px-4">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full border border-gold/40 text-gold">
                    <Icon className="size-[18px]" />
                  </span>
                  <span className="leading-tight">
                    <span className="block text-sm text-white">{title}</span>
                    <span className="block text-xs text-white/60">{text}</span>
                  </span>
                </div>
              ))}
            </Container>
          </div>
        </main>
      </div>

      {/* 2. Sobre */}
      <section id="sobre" className="scroll-mt-10 py-20 sm:py-28">
        <Container className="grid items-center gap-14 lg:grid-cols-12 lg:gap-12">
          <div data-reveal className="lg:col-span-5">
            <AboutPhoto />
          </div>
          <div data-reveal className="lg:col-span-6 lg:col-start-7">
            <Kicker>Sobre</Kicker>
            <Title>
              Cuidado que começa por <em className="font-normal italic text-gold-deep">entender você</em>
            </Title>
            <p className="mt-6 text-[17px] leading-[1.75] text-muted">
              A {site.name} é biomédica esteta com atuação em tricologia, a área que estuda a saúde dos cabelos e
              do couro cabeludo. Cada atendimento começa com uma avaliação detalhada, com tempo para ouvir, explicar
              e esclarecer cada etapa do tratamento.
            </p>
            <p className="mt-8 text-sm font-medium">Na avaliação, olhamos para:</p>
            <ul className="mt-4 grid grid-cols-2 gap-3">
              {evaluation.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-3 rounded-xl border border-line bg-white px-3 py-3 text-sm">
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-green text-gold-soft">
                    <Icon className="size-[18px]" />
                  </span>
                  {label}
                </li>
              ))}
            </ul>
            <div className="mt-9 border-t border-line pt-6">
              <p className="font-serif text-2xl italic">{site.name}</p>
              <p className="mt-1 text-sm text-muted">
                Biomédica Esteta · CRBM {site.crbm}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Como funciona */}
      <section className="bg-surface py-20 sm:py-28">
        <Container>
          <div data-reveal className="mx-auto max-w-xl text-center">
            <div className="flex justify-center">
              <Kicker>Como funciona</Kicker>
            </div>
            <Title>
              Seu cuidado em <em className="font-normal italic text-gold-deep">três etapas</em>
            </Title>
          </div>
          <ol className="mt-14 grid gap-5 md:grid-cols-3">
            {steps.map((s, i) => {
              const Icon = stepIcons[i];
              return (
                <li
                  key={s.n}
                  data-reveal
                  style={{ ["--delay" as string]: `${i * 110}ms` }}
                  className="relative rounded-3xl border border-line bg-white p-7 sm:p-8"
                >
                  <span className="absolute right-7 top-6 font-serif text-4xl text-gold/70">{s.n}</span>
                  <span className="grid size-12 place-items-center rounded-full bg-green text-gold-soft">
                    <Icon />
                  </span>
                  <h3 className="mt-6 font-serif text-2xl font-medium">{s.title}</h3>
                  <p className="mt-3 leading-[1.7] text-muted">{s.text}</p>
                </li>
              );
            })}
          </ol>
        </Container>
      </section>

      {/* 4. Áreas de atendimento */}
      <section id="atendimento" className="hero-bg scroll-mt-10 py-20 text-white sm:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div data-reveal className="lg:col-span-7">
              <Kicker light>Áreas de atendimento</Kicker>
              <Title light>
                Saúde dos fios, do couro cabeludo <em className="font-normal italic text-gold">e da pele</em>
              </Title>
            </div>
            <p data-reveal className="text-white/75 lg:col-span-5 lg:pb-2">
              Todo tratamento parte de uma avaliação. Assim, cada cuidado é indicado para a causa certa.
            </p>
          </div>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2">
            {areas.map((a, i) => {
              const Icon = areaIcons[i % areaIcons.length];
              return (
                <li
                  key={a}
                  data-reveal
                  style={{ ["--delay" as string]: `${i * 90}ms` }}
                  className="flex items-center gap-5 rounded-2xl border border-gold/25 bg-white/[0.04] p-6"
                >
                  <span className="grid size-12 shrink-0 place-items-center rounded-full border border-gold/50 text-gold">
                    <Icon />
                  </span>
                  <span className="font-serif text-xl leading-snug sm:text-2xl">{a}</span>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>

      {/* 5. Perguntas frequentes */}
      <section id="duvidas" className="scroll-mt-10 py-20 sm:py-28">
        <Container className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div data-reveal className="lg:col-span-5">
            <Kicker>Dúvidas frequentes</Kicker>
            <Title>
              Antes da sua <em className="font-normal italic text-gold-deep">avaliação</em>
            </Title>
            <p className="mt-5 max-w-sm leading-[1.7] text-muted">Ficou alguma dúvida? Pergunte direto pelo WhatsApp.</p>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-green underline decoration-gold underline-offset-[6px]"
            >
              <ChatIcon /> Falar com a clínica
            </a>
          </div>
          <div data-reveal className="space-y-3 lg:col-span-7">
            {faq.map((item) => (
              <details key={item.q} className="group rounded-2xl border border-line bg-white px-6 open:border-gold/50">
                <summary className="flex min-h-16 cursor-pointer items-center justify-between gap-6 py-5 text-[17px] font-medium">
                  {item.q}
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-green-soft text-green transition-transform duration-300 group-open:rotate-45" aria-hidden="true">
                    <svg viewBox="0 0 16 16" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="1.6">
                      <path d="M8 3v10M3 8h10" />
                    </svg>
                  </span>
                </summary>
                <p className="max-w-xl pb-6 leading-[1.7] text-muted">{item.a}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. Localização */}
      <section id="localizacao" className="scroll-mt-10 bg-surface py-20 sm:py-28">
        <Container className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div data-reveal className="lg:col-span-5">
            <Kicker>Localização</Kicker>
            <Title>
              Na Cidade <em className="font-normal italic text-gold-deep">São Mateus</em>
            </Title>
            <div className="mt-8 flex gap-4">
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-green text-gold-soft">
                <PinIcon />
              </span>
              <address className="not-italic leading-[1.7]">
                {site.address.street}
                <br />
                {site.address.district}, {site.address.city} – {site.address.state}
                <br />
                CEP {site.address.zip}
              </address>
            </div>
            <div className="mt-6 flex gap-4">
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-green text-gold-soft">
                <ClockIcon />
              </span>
              <dl className="flex-1 text-[15px]">
                {site.hours.map((h) => (
                  <div key={h.days} className="flex justify-between border-b border-line py-2 first:pt-0">
                    <dt className="text-muted">{h.days}</dt>
                    <dd className={h.time === "Fechado" ? "text-muted" : ""}>{h.time}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <a
              href={site.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-green px-6 py-3 text-[15px] text-white transition-colors hover:bg-green-deep"
            >
              <PinIcon /> Como chegar
            </a>
          </div>
          <div data-reveal className="overflow-hidden rounded-3xl border border-line bg-sand lg:col-span-7">
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
      <section className="py-20 sm:py-24">
        <Container>
          <div data-reveal className="hero-bg relative overflow-hidden rounded-[32px] px-6 py-16 text-center text-white sm:px-16 sm:py-20">
            <svg className="pointer-events-none absolute -left-24 -top-24 w-80 text-gold/20" viewBox="0 0 300 300" fill="none" stroke="currentColor" aria-hidden="true">
              <circle cx="150" cy="150" r="145" />
              <circle cx="150" cy="150" r="110" />
            </svg>
            <div className="relative">
              <h2 className="mx-auto max-w-3xl font-serif text-[2.25rem] font-medium leading-[1.1] text-balance sm:text-5xl">
                Cuide da saúde dos seus fios com <em className="font-normal italic text-gold">quem entende do assunto</em>
              </h2>
              <div className="mt-10 flex justify-center">
                <GoldButton>Agendar avaliação</GoldButton>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 8. Rodapé */}
      <footer className="bg-green-deep pb-28 pt-14 text-sm text-white/65 md:pb-12">
        <Container className="grid gap-10 sm:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-full border border-gold/60 font-serif text-gold">MR</span>
              <p className="font-serif text-xl text-white">{site.name}</p>
            </div>
            <p className="mt-4">{site.role}</p>
            <p>CRBM {site.crbm}</p>
          </div>
          <div>
            <p className="text-gold-soft">Endereço</p>
            <p className="mt-2">{site.address.street}</p>
            <p>
              {site.address.district}, {site.address.city} – {site.address.state}
            </p>
            <p>CEP {site.address.zip}</p>
          </div>
          <div>
            <p className="text-gold-soft">Contato</p>
            <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="mt-2 flex items-center gap-2 hover:text-white">
              <WhatsAppIcon className="size-4" /> {site.phone}
            </a>
          </div>
        </Container>
        <Container className="mt-12 border-t border-white/10 pt-6 text-xs">Desenvolvido por Gonzaga Code</Container>
      </footer>

      {/* Botão flutuante de WhatsApp (mobile) */}
      <a
        href={site.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Agendar avaliação pelo WhatsApp"
        className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-5 z-40 grid size-14 place-items-center rounded-full bg-[#25d366] text-white shadow-[0_8px_24px_-6px_rgba(0,0,0,0.4)] transition-transform active:scale-95 md:hidden"
      >
        <WhatsAppIcon className="size-7" />
      </a>

      <Reveal />
    </>
  );
}
