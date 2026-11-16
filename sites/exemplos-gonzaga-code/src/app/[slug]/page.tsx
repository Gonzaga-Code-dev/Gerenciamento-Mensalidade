import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ExamplePage from "@/components/ExamplePage";
import { examples } from "@/content/examples";

export const dynamicParams = false;

export function generateStaticParams() {
  return examples.map((e) => ({ slug: e.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const ex = examples.find((e) => e.slug === slug);
  if (!ex) return {};
  return {
    title: `Exemplo de site de ${ex.nicho}`,
    description: `Exemplo de site para ${ex.nicho}, criado pela Gonzaga Code.`,
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const ex = examples.find((e) => e.slug === slug);
  if (!ex) notFound();
  return <ExamplePage ex={ex} />;
}
