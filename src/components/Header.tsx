import { nav, site, whatsappLink } from "@/content/site";
import { Container } from "./ui";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/60 bg-bg/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-6">
        <a href="#inicio" className="text-sm font-medium tracking-tight">
          {site.name}
          <span className="text-accent">.</span>
        </a>
        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm text-muted">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition-colors hover:text-text">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href={whatsappLink("Olá, Hygor! Vim pelo seu site e quero conversar sobre um projeto.")}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-line px-4 py-2 text-sm transition-colors hover:border-accent hover:text-accent"
        >
          Conversar
        </a>
      </Container>
    </header>
  );
}
