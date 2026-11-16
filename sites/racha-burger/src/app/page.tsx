import Image from "next/image";
import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { burgers, extras, orderItemLink, orderLink, photos, site, steps } from "@/content/site";

const container = "mx-auto w-full max-w-6xl px-5 sm:px-8";

function OrderButton({ children, variant = "gold" }: { children: ReactNode; variant?: "gold" | "dark" }) {
  const styles = {
    gold: "bg-mustard text-char hover:bg-[#efc061]",
    dark: "bg-char text-cream hover:bg-char-2",
  }[variant];
  return (
    <a
      href={orderLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-12 items-center justify-center gap-2.5 whitespace-nowrap rounded-xl px-6 py-3.5 text-sm font-bold uppercase tracking-wide transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mustard ${styles}`}
    >
      <WhatsAppIcon className="size-[18px]" />
      {children}
    </a>
  );
}

function Kicker({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <p
      className={`flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.24em] ${dark ? "text-char/70" : "text-mustard"}`}
    >
      <span className={`h-px w-8 ${dark ? "bg-char/40" : "bg-mustard/60"}`} aria-hidden="true" />
      {children}
    </p>
  );
}

function Title({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h2 className={`mt-4 font-display text-[2rem] uppercase leading-[1.05] sm:text-[2.6rem] ${className}`}>{children}</h2>
  );
}

const ghostButton =
  "inline-flex min-h-12 items-center justify-center rounded-xl border border-cream/25 px-6 py-3.5 text-sm font-bold uppercase tracking-wide transition-colors hover:border-mustard hover:text-mustard";

const highlights = [
  { value: site.rating.value, label: "Nota no Google" },
  { value: String(site.rating.count), label: "Avaliações" },
  { value: "R$ 22,90", label: "Burgers a partir de" },
  { value: "18h", label: "Abre a partir de" },
];

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <>
      {/* Faixa de prévia */}
      <div className="fixed inset-x-0 top-0 z-50 bg-mustard px-4 py-[7px] text-center text-[11px] font-semibold text-char">
        Prévia desenvolvida por Gonzaga Code para o {site.name}
      </div>

      <header className="sticky top-[31px] z-40 mt-[31px] border-b border-line bg-char/90 backdrop-blur">
        <div className={`${container} flex h-16 items-center justify-between gap-6 sm:h-20`}>
          <a href="#inicio" className="flex items-center gap-3">
            <span className="grid size-7 shrink-0 rotate-45 place-items-center border-2 border-mustard sm:size-10" aria-hidden="true">
              <span className="-rotate-45 font-display text-[10px] text-mustard sm:text-sm">RB</span>
            </span>
            <span className="whitespace-nowrap font-display text-base uppercase tracking-wide text-mustard sm:text-xl">Racha Burger</span>
          </a>
          <nav aria-label="Principal" className="hidden gap-8 text-sm font-semibold text-muted lg:flex">
            <a href="#fotos" className="hover:text-cream">
              Fotos
            </a>
            <a href="#cardapio" className="hover:text-cream">
              Cardápio
            </a>
            <a href="#avaliacoes" className="hover:text-cream">
              Avaliações
            </a>
            <a href="#onde" className="hover:text-cream">
              Onde estamos
            </a>
          </nav>
          <a
            href={orderLink}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 whitespace-nowrap rounded-xl bg-mustard px-3 py-2 text-xs font-bold uppercase tracking-wide text-char sm:px-4 sm:py-2.5 sm:text-sm"
          >
            Pedir agora
          </a>
        </div>
      </header>

      <main id="inicio">
        {/* 1. Hero */}
        <section className={`${container} grid items-center gap-10 pb-14 pt-10 sm:pt-14 lg:grid-cols-12 lg:gap-12 lg:pb-20`}>
          <div className="lg:col-span-6">
            <Kicker>{site.tagline} · {site.address.district} · SP</Kicker>
            <h1 className="mt-5 font-display text-[2.2rem] uppercase leading-[1.05] sm:text-6xl">
              Uma volta ao mundo <span className="text-mustard">em burgers</span>
            </h1>
            <p className="mt-6 max-w-md text-[17px] leading-relaxed text-muted">
              Cada lanche leva o nome de um circuito famoso: Interlagos, Monza, Suzuka, Daytona. Nota 5,0 no Google
              com mais de 230 avaliações. Escolha o seu e peça pelo WhatsApp.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <OrderButton>Pedir pelo WhatsApp</OrderButton>
              <a href="#cardapio" className={ghostButton}>
                Ver cardápio
              </a>
            </div>
            <p className="mt-7 flex items-center gap-2 text-sm text-muted">
              <span className="text-mustard">★★★★★</span>
              <span>
                <strong className="text-cream">{site.rating.value}</strong> no Google · {site.rating.count} avaliações
              </span>
            </p>
          </div>

          <div className="lg:col-span-6">
            <figure className="relative mx-auto max-w-md overflow-hidden rounded-3xl ring-1 ring-line lg:max-w-none">
              <Image
                src="/fotos/burger-mao.webp"
                alt="Hambúrguer do Racha Burger com queijo, alface, tomate e molho, servido no papel da casa"
                width={758}
                height={1264}
                priority
                sizes="(min-width: 1024px) 520px, 90vw"
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-char/90 via-char/10 to-transparent" />
              <figcaption className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3 rounded-2xl border border-line bg-char/80 px-4 py-3 backdrop-blur">
                <span>
                  <span className="block text-sm font-bold">Hambúrguer artesanal</span>
                  <span className="block text-xs text-muted">Foto real do Racha Burger</span>
                </span>
                <span className="rounded-md bg-mustard px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-char">
                  5,0 ★
                </span>
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Destaques */}
        <section className="border-y border-line bg-char-2">
          <div className={`${container} grid grid-cols-2 lg:grid-cols-4`}>
            {highlights.map((h, i) => (
              <div
                key={h.label}
                className={`py-6 sm:py-8 ${i % 2 === 1 ? "pl-5 sm:pl-8" : ""} ${i > 0 ? "lg:border-l lg:border-line lg:pl-8" : ""} ${i > 1 ? "border-t border-line lg:border-t-0" : ""}`}
              >
                <p className="font-display text-3xl text-mustard sm:text-4xl">{h.value}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-muted">{h.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 2. Fotos */}
        <section id="fotos" className="scroll-mt-28 py-20 sm:py-24">
          <div className={container}>
            <div data-reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <Kicker>Fotos reais</Kicker>
                <Title>
                  Do jeito que <span className="text-mustard">chega na mesa</span>
                </Title>
              </div>
              <p className="max-w-sm text-sm text-muted">
                Imagens do perfil do Racha Burger. Na versão final, entram as fotos de cada lanche do cardápio.
              </p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {photos.map((p) => (
                <figure key={p.src} data-reveal className="group overflow-hidden rounded-3xl bg-char-2 ring-1 ring-line">
                  <div className="overflow-hidden">
                    <Image
                      src={p.src}
                      alt={p.alt}
                      width={p.w}
                      height={p.h}
                      sizes="(min-width: 768px) 540px, 90vw"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <figcaption className="flex items-center justify-between px-5 py-4">
                    <span className="font-display text-lg uppercase">{p.caption}</span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted">Foto real</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Cardápio */}
        <section id="cardapio" className="scroll-mt-28 border-t border-line bg-char-2 py-20 sm:py-24">
          <div className={container}>
            <div data-reveal className="mx-auto max-w-2xl text-center">
              <div className="flex justify-center">
                <Kicker>Cardápio</Kicker>
              </div>
              <Title>
                Escolha o <span className="text-mustard">seu circuito</span>
              </Title>
              <p className="mt-4 text-muted">
                Toque em &quot;Pedir&quot; e o WhatsApp já abre com o nome do lanche.
              </p>
            </div>

            <ul className="mt-12 grid gap-4 md:grid-cols-2">
              {burgers.map((b) => (
                <li
                  key={b.name}
                  data-reveal
                  className="flex flex-col justify-between gap-5 rounded-2xl border border-line bg-char p-5 sm:flex-row sm:items-center sm:p-6"
                >
                  <div className="flex gap-4">
                    <span className="text-3xl leading-none" aria-hidden="true">
                      {b.flag}
                    </span>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-display text-xl uppercase">{b.name}</h3>
                        {b.tag && (
                          <span className="rounded-md bg-mustard/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-mustard">
                            {b.tag}
                          </span>
                        )}
                      </div>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted">{b.text}</p>
                    </div>
                  </div>
                  <div className="flex shrink-0 items-center justify-between gap-4 sm:flex-col sm:items-end">
                    <span className="font-display text-xl text-mustard">{b.price}</span>
                    <a
                      href={orderItemLink(b.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg border border-mustard/60 px-4 py-2 text-xs font-bold uppercase tracking-wide text-mustard transition-colors hover:bg-mustard hover:text-char"
                    >
                      Pedir
                    </a>
                  </div>
                </li>
              ))}
            </ul>

            <ul className="mt-4 grid gap-4 md:grid-cols-3">
              {extras.map((e, i) => (
                <li
                  key={e.name}
                  data-reveal
                  className={`flex flex-col rounded-2xl p-6 ${i === 0 ? "bg-mustard text-char" : "border border-line bg-char"}`}
                >
                  <span className="text-3xl leading-none" aria-hidden="true">
                    {e.flag}
                  </span>
                  <h3 className="mt-4 font-display text-xl uppercase">{e.name}</h3>
                  <p className={`mt-1.5 flex-1 text-sm leading-relaxed ${i === 0 ? "text-char/75" : "text-muted"}`}>{e.text}</p>
                  <div className="mt-5 flex items-center justify-between">
                    <span className={`font-display text-xl ${i === 0 ? "" : "text-mustard"}`}>{e.price}</span>
                    <a
                      href={orderItemLink(e.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`rounded-lg px-4 py-2 text-xs font-bold uppercase tracking-wide transition-colors ${
                        i === 0
                          ? "bg-char text-cream hover:bg-char-2"
                          : "border border-mustard/60 text-mustard hover:bg-mustard hover:text-char"
                      }`}
                    >
                      Pedir
                    </a>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-center text-xs text-muted">Preços do catálogo do WhatsApp do Racha Burger.</p>
          </div>
        </section>

        {/* 4. Avaliações */}
        <section id="avaliacoes" className="scroll-mt-28 py-20 sm:py-24">
          <div className={`${container} grid items-center gap-10 lg:grid-cols-12`}>
            <div data-reveal className="lg:col-span-5">
              <Kicker>Avaliações</Kicker>
              <Title>
                Quem prova, <span className="text-mustard">aprova</span>
              </Title>
              <p className="mt-5 max-w-md leading-relaxed text-muted">
                São {site.rating.count} avaliações no Google e nota máxima. Veja o que os clientes dizem direto no
                perfil.
              </p>
              <a href={site.mapLink} target="_blank" rel="noopener noreferrer" className={`mt-8 ${ghostButton}`}>
                Ver avaliações no Google
              </a>
            </div>
            <div data-reveal className="lg:col-span-7">
              <div className="rounded-3xl border border-line bg-char-2 p-8 text-center sm:p-12">
                <p className="font-display text-7xl text-mustard sm:text-8xl">{site.rating.value}</p>
                <p className="mt-3 text-2xl tracking-[0.3em] text-mustard" aria-hidden="true">
                  ★★★★★
                </p>
                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-muted">
                  {site.rating.count} avaliações no Google
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Como pedir */}
        <section className="bg-mustard py-20 text-char sm:py-24">
          <div className={container}>
            <div data-reveal>
              <Kicker dark>Como pedir</Kicker>
              <Title>Três passos e está pedido</Title>
            </div>
            <ol className="mt-12 grid gap-5 md:grid-cols-3">
              {steps.map((s) => (
                <li key={s.n} data-reveal className="rounded-2xl bg-char p-7 text-cream">
                  <span className="font-display text-3xl text-mustard">0{s.n}</span>
                  <h3 className="mt-3 font-display text-xl uppercase">{s.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 6. Onde estamos */}
        <section id="onde" className="scroll-mt-28 py-20 sm:py-24">
          <div className={`${container} grid gap-10 lg:grid-cols-12 lg:gap-12`}>
            <div data-reveal className="lg:col-span-5">
              <Kicker>Onde estamos</Kicker>
              <Title>
                Vila <span className="text-mustard">Santo Antônio</span>
              </Title>
              <address className="mt-8 text-lg not-italic leading-relaxed">
                {site.address.street}
                <br />
                {site.address.district}, {site.address.city} – {site.address.state}
                <br />
                CEP {site.address.zip}
              </address>
              <dl className="mt-6 space-y-2 text-sm">
                <div className="flex gap-3">
                  <dt className="w-20 text-muted">Horário</dt>
                  <dd>{site.opens}</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="w-20 text-muted">WhatsApp</dt>
                  <dd>{site.phone}</dd>
                </div>
              </dl>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <OrderButton>Pedir agora</OrderButton>
                <a href={site.mapLink} target="_blank" rel="noopener noreferrer" className={ghostButton}>
                  Como chegar
                </a>
              </div>
            </div>
            <div data-reveal className="overflow-hidden rounded-3xl bg-char-2 ring-1 ring-line lg:col-span-7">
              <iframe
                src={site.mapEmbed}
                title={`Mapa: ${site.name}, ${site.address.street}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block h-80 w-full sm:h-full sm:min-h-[420px]"
              />
            </div>
          </div>
        </section>

        {/* 7. CTA final */}
        <section className={`${container} pb-20 sm:pb-24`}>
          <div
            data-reveal
            className="flex flex-col gap-8 rounded-3xl bg-ketchup px-6 py-12 sm:px-12 sm:py-16 lg:flex-row lg:items-center lg:justify-between"
          >
            <div>
              <h2 className="font-display text-[2rem] uppercase leading-tight sm:text-5xl">Bateu a fome?</h2>
              <p className="mt-3 max-w-md text-cream">Escolha o seu lanche e peça agora pelo WhatsApp.</p>
            </div>
            <OrderButton variant="dark">Pedir pelo WhatsApp</OrderButton>
          </div>
        </section>
      </main>

      <footer className="border-t border-line pb-28 pt-12 text-sm text-muted md:pb-12">
        <div className={`${container} flex flex-col gap-6 sm:flex-row sm:justify-between`}>
          <div>
            <p className="font-display text-xl uppercase text-mustard">{site.name}</p>
            <p className="mt-2">
              {site.address.street} · {site.address.district}, {site.address.city} – {site.address.state}
            </p>
            <p>WhatsApp {site.phone}</p>
          </div>
          <p className="text-xs sm:text-right">
            © {year} {site.name}
            <br />
            Desenvolvido por Gonzaga Code
          </p>
        </div>
      </footer>

      {/* Pedido flutuante (mobile) */}
      <a
        href={orderLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Pedir pelo WhatsApp"
        className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-40 grid size-14 place-items-center rounded-full bg-mustard text-char shadow-lg shadow-black/40 transition-transform active:scale-95 md:hidden"
      >
        <WhatsAppIcon className="size-7" />
      </a>

      <Reveal />
    </>
  );
}
