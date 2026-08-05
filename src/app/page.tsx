import { lastNMonths, monthLabel, totalsForMonth } from "@/lib/payments";
import { formatBRL } from "@/lib/money";
import { MonthNav } from "@/components/MonthNav";
import { BarChart } from "@/components/BarChart";
import { Card, LinkButton } from "@/components/ui";

export default async function DashboardPage({
  searchParams,
}: {
  searchParams: Promise<{ year?: string; month?: string }>;
}) {
  const sp = await searchParams;
  const now = new Date();
  const year = Number(sp.year ?? now.getFullYear());
  const month = Number(sp.month ?? now.getMonth() + 1);

  const current = await totalsForMonth(year, month);
  const months = lastNMonths(year, month, 6);
  const history = await Promise.all(
    months.map((m) => totalsForMonth(m.year, m.month))
  );

  const chartItems = history.map((h) => ({
    label: monthLabel(h.year, h.month).split("/")[0].slice(0, 3),
    totalCents: h.totalCents,
  }));

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 flex flex-col gap-6">
      <MonthNav year={year} month={month} basePath="/" />

      <Card className="text-center bg-white">
        <p className="text-lg font-bold text-cinza-escuro/70 uppercase tracking-wide">
          Arrecadado este mês
        </p>
        <p className="text-5xl sm:text-6xl font-extrabold text-verde-escuro my-4">
          {formatBRL(current.totalCents)}
        </p>
        <p className="text-xl font-bold text-confirmado">
          ✓ {current.count} {current.count === 1 ? "pessoa pagou" : "pessoas pagaram"}
        </p>
      </Card>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <LinkButton href="/pagamentos/novo" className="w-full">
          + Adicionar Pagamento
        </LinkButton>
        <LinkButton
          href={`/pagamentos?year=${year}&month=${month}`}
          variant="secondary"
          className="w-full"
        >
          Ver Lista
        </LinkButton>
        <LinkButton
          href={`/relatorio?year=${year}&month=${month}`}
          variant="secondary"
          className="w-full"
        >
          Relatório
        </LinkButton>
      </div>

      <Card>
        <h2 className="text-lg font-bold text-verde-escuro mb-2">
          Últimos 6 meses
        </h2>
        <BarChart items={chartItems} />
      </Card>
    </div>
  );
}
