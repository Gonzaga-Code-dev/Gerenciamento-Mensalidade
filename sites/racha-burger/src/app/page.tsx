import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { menu, orderLink, site, steps } from "@/content/site";

const container = "mx-auto w-full max-w-6xl px-5 sm:px-8";

function OrderButton({ children, variant = "mustard" }: { children: ReactNode; variant?: "mustard" | "dark" }) {
  return (
    <a
      href={orderLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-12 items-center justify-center gap-2.5 whitespace-nowrap rounded-full px-7 py-3.5 text-[15px] font-bold uppercase tracking-wide transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mustard ${
        variant === "mustard" ? "bg-mustard text-char" : "bg-char text-cream"
      }`}
    >
      <WhatsAppIcon className="size-[18px]" />
      {children}
    </a>
  );
}

function BurgerArt({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 320" className={className} role="img" aria-label="Ilustração de um hambúrguer">
      <ellipse cx="200" cy="296" rx="150" ry="14" fill="#000" opacity=".35" />
      <path d="M62 236h276c0 30-26 50-58 50H120c-32 0-58-20-58-50z" fill="#f2b33d" />
      <path d="M58 214c40 14 72-10 104 4s60 14 92-2 56-10 88 0v14H58z" fill="#7cb342" />
      <rect x="50" y="190" width="300" height="34" rx="17" fill="#5a2e1b" />
      <path d="M58 186l26 22 22-22 26 22 22-22 26 22 22-22 26 22 22-22 26 22 22-22 26 22 22-22v-6H58z" fill="#ffd54a" />
      <rect x="60" y="168" width="280" height="14" rx="7" fill="#d9412b" />
      <path d="M60 160c0-70 62-112 140-112s140 42 140 112z" fill="#f2b33d" />
      <path d="M90 140c8-40 50-70 110-70" stroke="#fff" strokeOpacity=".35" strokeWidth="8" strokeLinecap="round" fill="none" />
      {[
        [130, 92],
        [170, 76],
        [214, 80],
        [256, 96],
        [150, 118],
        [196, 108],
        [238, 122],
        [284, 128],
      ].map(([x, y]) => (
        <ellipse key={`${x}-${y}`} cx={x} cy={y} rx="7" ry="4" fill="#fff6dc" transform={`rotate(-20 ${x} ${y})`} />
      ))}
    </svg>
  );
}

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <>
      {/* Faixa de prévia */}
      <div className="fixed inset-x-0 top-0 z-50 bg-mustard px-4 py-[7px] text-center text-[11px] font-semibold text-char">
        Prévia desenvolvida por Gonzaga Code para o {site.name}
      </div>

      <header className="pt-[31px]">
        <div className={`${container} flex h-20 items-center justify-between gap-6`}>
          <a href="#inicio" className="font-display text-xl uppercase tracking-tight sm:text-2xl">
            Racha <span className="text-mustard">Burger</span>
          </a>
          <nav aria-label="Principal" className="hidden gap-8 text-sm font-semibold text-muted md:flex">
            <a href="#cardapio" className="hover:text-cream">
              Cardápio
            </a>
            <a href="#como-pedir" className="hover:text-cream">
              Como pedir
            </a>
            <a href="#onde" className="hover:text-cream">
              Onde estamos
            </a>
          </nav>
          <a
            href={orderLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border-2 border-mustard px-4 py-2 text-xs font-bold uppercase tracking-wide text-mustard transition-colors hover:bg-mustard hover:text-char sm:text-sm"
          >
            Pedir agora
          </a>
        </div>
      </header>

      <main id="inicio">
        {/* 1. Hero */}
        <section className={`${container} grid items-center gap-10 pb-16 pt-8 sm:pt-12 lg:grid-cols-2 lg:pb-24`}>
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-char-2 px-4 py-2 text-sm font-semibold ring-1 ring-line">
              <span className="text-mustard">★★★★★</span>
              {site.rating.value} no Google · {site.rating.count} avaliações
            </p>
            <h1 className="mt-6 font-display text-[3rem] uppercase leading-[0.95] tracking-tight sm:text-7xl">
              Lanche que <span className="text-mustard">racha</span> de bom
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
              Hambúrguer na Vila Santo Antônio, com nota 5,0 no Google. Escolha o seu e peça direto pelo WhatsApp.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <OrderButton>Pedir agora</OrderButton>
              <a href="#cardapio" className="text-sm font-semibold text-cream underline decoration-mustard underline-offset-[6px]">
                Ver o cardápio
              </a>
            </div>
            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
              <li>{site.opens}</li>
              <li>{site.priceRange}</li>
              <li>{site.address.district}</li>
            </ul>
          </div>
          <div className="relative">
            <div className="absolute inset-6 rounded-full bg-ketchup/25 blur-3xl" aria-hidden="true" />
            <BurgerArt className="relative mx-auto w-full max-w-md" />
          </div>
        </section>

        {/* Faixa da nota */}
        <div className="overflow-hidden border-y border-line bg-ketchup py-4">
          <p className="whitespace-nowrap text-center font-display text-lg uppercase tracking-wide text-cream sm:text-xl">
            Nota {site.rating.value} no Google · {site.rating.count} avaliações · Vila Santo Antônio
          </p>
        </div>

        {/* 2. Cardápio */}
        <section id="cardapio" className="scroll-mt-10 py-20 sm:py-28">
          <div className={container}>
            <div data-reveal className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="font-display text-4xl uppercase tracking-tight sm:text-5xl">
                O <span className="text-mustard">cardápio</span>
              </h2>
              <p className="max-w-sm text-sm text-muted">
                Os lanches, combos e preços do Racha entram aqui, com foto de cada um.
              </p>
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {menu.map((m, i) => (
                <article key={m.title} data-reveal className="flex flex-col rounded-3xl bg-char-2 p-6 ring-1 ring-line">
                  <div className="grid aspect-[4/3] place-items-center rounded-2xl bg-char ring-1 ring-line">
                    <span className="font-display text-5xl text-line">0{i + 1}</span>
                  </div>
                  <h3 className="mt-5 font-display text-2xl uppercase">{m.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{m.text}</p>
                </article>
              ))}
            </div>
            <div data-reveal className="mt-10 flex justify-center">
              <OrderButton>Fazer meu pedido</OrderButton>
            </div>
          </div>
        </section>

        {/* 3. Como pedir */}
        <section id="como-pedir" className="scroll-mt-10 bg-mustard py-20 text-char sm:py-24">
          <div className={container}>
            <h2 data-reveal className="font-display text-4xl uppercase tracking-tight sm:text-5xl">
              Como pedir
            </h2>
            <ol className="mt-12 grid gap-6 md:grid-cols-3">
              {steps.map((s) => (
                <li key={s.n} data-reveal className="rounded-3xl bg-char p-7 text-cream">
                  <span className="grid size-11 place-items-center rounded-full bg-ketchup font-display text-lg">
                    {s.n}
                  </span>
                  <h3 className="mt-5 font-display text-xl uppercase">{s.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 4. Onde estamos */}
        <section id="onde" className="scroll-mt-10 py-20 sm:py-28">
          <div className={`${container} grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-14`}>
            <div data-reveal>
              <h2 className="font-display text-4xl uppercase tracking-tight sm:text-5xl">
                Onde <span className="text-mustard">estamos</span>
              </h2>
              <address className="mt-8 text-lg not-italic leading-relaxed">
                {site.address.street}
                <br />
                {site.address.district}, {site.address.city} – {site.address.state}
                <br />
                CEP {site.address.zip}
              </address>
              <p className="mt-6 text-muted">{site.opens}</p>
              <a
                href={site.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex min-h-12 items-center rounded-full border-2 border-cream/30 px-6 py-3 text-sm font-bold uppercase tracking-wide transition-colors hover:border-mustard hover:text-mustard"
              >
                Como chegar
              </a>
            </div>
            <div data-reveal className="overflow-hidden rounded-3xl bg-char-2 ring-1 ring-line">
              <iframe
                src={site.mapEmbed}
                title={`Mapa: ${site.name}, ${site.address.street}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block h-80 w-full sm:h-full sm:min-h-[400px]"
              />
            </div>
          </div>
        </section>

        {/* 5. CTA final */}
        <section className={`${container} pb-20 sm:pb-28`}>
          <div data-reveal className="rounded-[2rem] bg-ketchup px-6 py-14 text-center sm:py-20">
            <h2 className="mx-auto max-w-2xl font-display text-4xl uppercase leading-tight tracking-tight sm:text-6xl">
              Bateu a fome?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-cream">Escolha o seu lanche e peça agora pelo WhatsApp.</p>
            <div className="mt-9">
              <OrderButton variant="dark">Pedir pelo WhatsApp</OrderButton>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line pb-28 pt-10 text-sm text-muted md:pb-10">
        <div className={`${container} flex flex-col gap-3 sm:flex-row sm:justify-between`}>
          <div>
            <p className="font-display text-lg uppercase text-cream">{site.name}</p>
            <p className="mt-1">
              {site.address.street} · {site.address.district}, {site.address.city} – {site.address.state}
            </p>
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
