import { ButtonLink, Container, Eyebrow } from "@/components/ui";
import { site, whatsappLink } from "@/content/site";

export default function Home() {
  return (
    <main>
      <Container className="py-32">
        <Eyebrow>Em construção</Eyebrow>
        <h1 className="mt-4 text-5xl font-medium tracking-tight">{site.name}</h1>
        <p className="mt-4 max-w-xl text-muted">{site.description}</p>
        <div className="mt-8">
          <ButtonLink href={whatsappLink(`Olá! Vim pelo site.`)} external>
            Falar no WhatsApp
          </ButtonLink>
        </div>
      </Container>
    </main>
  );
}
