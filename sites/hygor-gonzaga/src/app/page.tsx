import Header from "@/components/Header";
import QuoteForm from "@/components/QuoteForm";
import { Arrow, ButtonLink, Container, Eyebrow, Section, SectionHeader } from "@/components/ui";
import {
  faq,
  hero,
  plans,
  process,
  projects,
  services,
  site,
  thesis,
  whatsappLink,
} from "@/content/site";

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <>
      <Header />
      <main id="inicio">
        {/* Hero */}
        <Container className="pb-20 pt-20 sm:pb-28 sm:pt-32">
          <div className="flex items-center gap-2">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:hidden" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            <Eyebrow>{hero.eyebrow} · Agenda aberta</Eyebrow>
          </div>
          <h1 className="mt-6 max-w-4xl text-4xl font-medium leading-[1.05] tracking-tight text-balance sm:text-6xl lg:text-7xl">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{hero.subtitle}</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#contato">
              Solicitar orçamento <Arrow />
            </ButtonLink>
            <ButtonLink href="#processo" variant="ghost">
              Como funciona
            </ButtonLink>
          </div>
          <ul className="mt-14 flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-6 font-mono text-xs uppercase tracking-[0.14em] text-muted">
            {hero.highlights.map((h) => (
              <li key={h} className="flex items-center gap-2">
                <span className="text-accent">+</span> {h}
              </li>
            ))}
          </ul>
        </Container>

        {/* Tese */}
        <Section>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
            <div>
              <Eyebrow>Por que isso importa</Eyebrow>
              <h2 className="mt-4 text-3xl font-medium tracking-tight text-balance sm:text-4xl">{thesis.title}</h2>
              <p className="mt-6 leading-relaxed text-muted sm:text-lg">{thesis.body}</p>
            </div>
            <ul className="divide-y divide-line border-y border-line">
              {thesis.points.map((p) => (
                <li key={p.title} className="py-6">
                  <h3 className="font-medium">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{p.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </Section>

        {/* Serviços */}
        <Section id="servicos">
          <SectionHeader
            eyebrow="Serviços"
            title="Do primeiro site à operação digital do seu negócio."
            text="Cada projeto começa pelo objetivo comercial. O formato vem depois."
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
            {services.map((s) => (
              <article key={s.title} className="bg-bg p-7 sm:p-9">
                <h3 className="text-xl font-medium tracking-tight">{s.title}</h3>
                <p className="mt-2 text-sm text-muted">{s.for}</p>
                <ul className="mt-6 space-y-2.5 text-sm">
                  {s.items.map((i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
                      {i}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        {/* Processo */}
        <Section id="processo">
          <SectionHeader
            eyebrow="Processo"
            title="Quatro etapas, sem surpresa no caminho."
            text="Você sabe o que está acontecendo em cada fase, e aprova antes de seguir para a próxima."
          />
          <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {process.map((p) => (
              <li key={p.step} className="border-t border-line pt-6">
                <span className="font-mono text-xs text-accent">{p.step}</span>
                <h3 className="mt-3 font-medium">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.text}</p>
              </li>
            ))}
          </ol>
        </Section>

        {/* Projetos */}
        <Section id="projetos">
          <SectionHeader
            eyebrow="Projetos"
            title="Como o pensamento vira página."
            text="Estudos que mostram a abordagem aplicada a segmentos diferentes."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {projects.map((p) => (
              <article key={p.name} className="group flex flex-col rounded-2xl border border-line bg-surface p-3">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-line bg-bg">
                  <div className="absolute inset-x-0 top-0 flex gap-1.5 border-b border-line px-3 py-2.5">
                    <span className="size-2 rounded-full bg-line" />
                    <span className="size-2 rounded-full bg-line" />
                    <span className="size-2 rounded-full bg-line" />
                  </div>
                  <div className="absolute inset-x-5 top-12 space-y-2.5">
                    <div className="h-2 w-1/3 rounded bg-accent/80" />
                    <div className="h-4 w-4/5 rounded bg-line" />
                    <div className="h-4 w-3/5 rounded bg-line" />
                    <div className="h-2 w-2/3 rounded bg-line/60" />
                    <div className="mt-4 h-6 w-24 rounded-full bg-line transition-colors group-hover:bg-accent/70" />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">{p.kind}</p>
                    <span className="rounded-full border border-line px-2 py-0.5 text-[11px] text-muted">{p.tag}</span>
                  </div>
                  <h3 className="mt-3 font-medium">{p.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{p.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </Section>

        {/* Planos */}
        <Section id="planos">
          <SectionHeader
            eyebrow="Planos"
            title="Investimento claro, sem letras miúdas."
            text="Valores de referência. O orçamento final sai depois do diagnóstico, sem compromisso."
          />
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {plans.map((p) => (
              <article
                key={p.name}
                className={`flex flex-col rounded-2xl border p-7 sm:p-8 ${
                  p.featured ? "border-accent/60 bg-surface" : "border-line"
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">{p.name}</h3>
                  {p.featured && (
                    <span className="rounded-full bg-accent px-2.5 py-0.5 text-[11px] font-medium text-accent-ink">
                      Mais procurado
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm text-muted">{p.description}</p>
                <p className="mt-8 text-3xl font-medium tracking-tight">
                  {p.price}
                  {p.note && <span className="ml-2 text-xs font-normal text-muted">{p.note}</span>}
                </p>
                <ul className="mt-8 flex-1 space-y-3 border-t border-line pt-6 text-sm">
                  {p.items.map((i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-accent">✓</span>
                      {i}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <a
                    href={whatsappLink(`Olá, Hygor! Tenho interesse no plano ${p.name}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block rounded-full px-5 py-3 text-center text-sm font-medium transition-colors ${
                      p.featured
                        ? "bg-accent text-accent-ink hover:bg-white"
                        : "border border-line hover:border-muted"
                    }`}
                  >
                    Quero este
                  </a>
                </div>
              </article>
            ))}
          </div>
        </Section>

        {/* FAQ */}
        <Section id="duvidas">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
            <SectionHeader eyebrow="Dúvidas" title="Perguntas que sempre aparecem." />
            <div className="divide-y divide-line border-y border-line">
              {faq.map((item) => (
                <details key={item.q} className="group py-5">
                  <summary className="flex cursor-pointer items-center justify-between gap-6 font-medium">
                    {item.q}
                    <span className="text-muted transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 pr-8 text-sm leading-relaxed text-muted">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </Section>

        {/* Contato */}
        <Section id="contato">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <Eyebrow>Contato</Eyebrow>
              <h2 className="mt-4 text-3xl font-medium tracking-tight text-balance sm:text-5xl">
                Vamos colocar o seu negócio no lugar certo.
              </h2>
              <p className="mt-6 max-w-md leading-relaxed text-muted sm:text-lg">
                Conte o que você precisa. Respondo com uma proposta de caminho, mesmo que a resposta seja
                &quot;você ainda não precisa de um site&quot;.
              </p>
              <dl className="mt-10 space-y-4 text-sm">
                <div className="flex gap-4">
                  <dt className="w-24 text-muted">WhatsApp</dt>
                  <dd>
                    <a
                      href={whatsappLink("Olá, Hygor! Vim pelo seu site.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-line underline-offset-4 hover:decoration-accent"
                    >
                      Iniciar conversa
                    </a>
                  </dd>
                </div>
                <div className="flex gap-4">
                  <dt className="w-24 text-muted">Instagram</dt>
                  <dd>
                    <a
                      href={`https://instagram.com/${site.instagram}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-line underline-offset-4 hover:decoration-accent"
                    >
                      @{site.instagram}
                    </a>
                  </dd>
                </div>
                <div className="flex gap-4">
                  <dt className="w-24 text-muted">Local</dt>
                  <dd>{site.city}</dd>
                </div>
              </dl>
            </div>
            <QuoteForm />
          </div>
        </Section>
      </main>

      <footer className="border-t border-line py-10">
        <Container className="flex flex-col gap-3 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. {site.role}.
          </p>
          <a href="#inicio" className="hover:text-text">
            Voltar ao topo ↑
          </a>
        </Container>
      </footer>
    </>
  );
}
