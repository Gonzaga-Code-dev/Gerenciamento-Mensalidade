import { prisma } from "@/lib/prisma";
import { lastNMonths, monthLabel, monthRange, totalsForMonth } from "@/lib/payments";
import { formatBRL } from "@/lib/money";
import { MonthYearSelect } from "@/components/MonthYearSelect";
import { BarChart } from "@/components/BarChart";
import { Card, LinkButton } from "@/components/ui";
import { ExportButtons } from "./ExportButtons";

export default async function RelatorioPage({
  searchParams,
}: {
  searchParams: Promise<{ year?: string; month?: string }>;
}) {
  const sp = await searchParams;
  const now = new Date();
  const year = Number(sp.year ?? now.getFullYear());
  const month = Number(sp.month ?? now.getMonth() + 1);

  const { start, end } = monthRange(year, month);
  const payments = await prisma.payment.findMany({
    where: { paidAt: { gte: start, lt: end }, status: "CONFIRMADO" },
    orderBy: { paidAt: "asc" },
  });

  const totalCents = payments.reduce((sum, p) => sum + p.amountCents, 0);
  const count = payments.length;
  const averageCents = count > 0 ? Math.round(totalCents / count) : 0;

  const months = lastNMonths(year, month, 6);
  const history = await Promise.all(
    months.map((m) => totalsForMonth(m.year, m.month))
  );
  const previous = history[history.length - 2];
  const changePct =
    previous.totalCents > 0
      ? ((totalCents - previous.totalCents) / previous.totalCents) * 100
      : null;

  const rows = payments.map((p) => ({
    payerName: p.payerName,
    amountCents: p.amountCents,
    paidAt: p.paidAt.toISOString().slice(0, 10),
  }));

  const chartItems = history.map((h) => ({
    label: monthLabel(h.year, h.month).split("/")[0].slice(0, 3),
    totalCents: h.totalCents,
  }));

  const label = monthLabel(year, month);

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 flex flex-col gap-6">
      <h1 className="text-2xl font-extrabold text-verde-escuro">Relatório</h1>

      <MonthYearSelect year={year} month={month} basePath="/relatorio" />

      <Card>
        <h2 className="text-xl font-extrabold text-verde-escuro mb-4">{label}</h2>

        <p className="text-lg">
          Total Arrecadado:{" "}
          <span className="font-extrabold text-2xl text-verde-escuro">
            {formatBRL(totalCents)}
          </span>
        </p>
        <p className="text-lg mt-2">
          Número de Pagantes: <span className="font-bold">{count}</span>
        </p>
        <p className="text-lg mt-2">
          Valor Médio: <span className="font-bold">{formatBRL(averageCents)}</span>
        </p>
        {changePct !== null && (
          <p className="text-lg mt-2">
            Comparado com {monthLabel(previous.year, previous.month)}:{" "}
            <span
              className={`font-bold ${changePct >= 0 ? "text-confirmado" : "text-red-600"}`}
            >
              {changePct >= 0 ? "↑" : "↓"} {Math.abs(changePct).toFixed(0)}%{" "}
              {changePct >= 0 ? "(mais)" : "(menos)"}
            </span>
          </p>
        )}
      </Card>

      <Card>
        <h3 className="text-lg font-extrabold text-verde-escuro mb-3">Quem Pagou:</h3>
        {rows.length === 0 ? (
          <p className="text-cinza-escuro/70">Nenhum pagamento confirmado neste mês.</p>
        ) : (
          <ol className="flex flex-col gap-1">
            {rows.map((r, i) => (
              <li key={i} className="flex justify-between text-lg border-b border-cinza-claro py-1">
                <span>
                  {i + 1}. {r.payerName}
                </span>
                <span className="font-semibold">{formatBRL(r.amountCents)}</span>
              </li>
            ))}
          </ol>
        )}
      </Card>

      <Card>
        <h3 className="text-lg font-extrabold text-verde-escuro mb-3">Meses Anteriores:</h3>
        <ol className="flex flex-col gap-1 mb-4">
          {history.slice(0, -1).map((h) => (
            <li
              key={`${h.year}-${h.month}`}
              className="flex justify-between text-lg border-b border-cinza-claro py-1"
            >
              <span>{monthLabel(h.year, h.month)}</span>
              <span className="font-semibold">{formatBRL(h.totalCents)}</span>
            </li>
          ))}
        </ol>
        <BarChart items={chartItems} />
      </Card>

      <ExportButtons
        monthLabel={label}
        totalCents={totalCents}
        count={count}
        averageCents={averageCents}
        rows={rows}
      />

      <LinkButton href="/" variant="secondary" className="w-full">
        Voltar ao Dashboard
      </LinkButton>
    </div>
  );
}
