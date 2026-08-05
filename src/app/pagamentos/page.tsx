import { prisma } from "@/lib/prisma";
import { monthRange, monthLabel } from "@/lib/payments";
import { formatBRL } from "@/lib/money";
import { MonthNav } from "@/components/MonthNav";
import { FilterSelect } from "@/components/FilterSelect";
import { LinkButton } from "@/components/ui";
import { PaymentRow, type PaymentRowData } from "./PaymentRow";

export default async function ListaPage({
  searchParams,
}: {
  searchParams: Promise<{ year?: string; month?: string; status?: string }>;
}) {
  const sp = await searchParams;
  const now = new Date();
  const year = Number(sp.year ?? now.getFullYear());
  const month = Number(sp.month ?? now.getMonth() + 1);
  const status = sp.status ?? "TODOS";

  const { start, end } = monthRange(year, month);

  const payments = await prisma.payment.findMany({
    where: {
      paidAt: { gte: start, lt: end },
      ...(status !== "TODOS"
        ? { status: status as "CONFIRMADO" | "PENDENTE" | "CANCELADO" }
        : {}),
    },
    orderBy: { paidAt: "desc" },
  });

  const rows: PaymentRowData[] = payments.map((p) => ({
    id: p.id,
    payerName: p.payerName,
    amountCents: p.amountCents,
    paidAt: p.paidAt.toISOString().slice(0, 10),
    status: p.status,
  }));

  const total = rows
    .filter((r) => r.status === "CONFIRMADO")
    .reduce((sum, r) => sum + r.amountCents, 0);

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 flex flex-col gap-6">
      <h1 className="text-2xl font-extrabold text-verde-escuro">
        Pagamentos - {monthLabel(year, month)}
      </h1>

      <MonthNav year={year} month={month} basePath="/pagamentos" />
      <FilterSelect basePath="/pagamentos" />

      {rows.length === 0 ? (
        <p className="text-lg text-cinza-escuro/70 text-center py-8">
          Nenhum pagamento encontrado para este mês.
        </p>
      ) : (
        <div className="flex flex-col gap-2">
          {rows.map((row) => (
            <PaymentRow key={row.id} payment={row} />
          ))}
        </div>
      )}

      <div className="bg-white rounded-xl border-2 border-verde-escuro px-4 py-3 flex items-center justify-between">
        <span className="text-lg font-bold">TOTAL (confirmado)</span>
        <span className="text-2xl font-extrabold text-verde-escuro">
          {formatBRL(total)}
        </span>
      </div>

      <p className="text-sm text-cinza-escuro/60 text-center">
        Toque em um pagamento para editar ou excluir.
      </p>

      <LinkButton href="/" variant="secondary" className="w-full">
        Voltar ao Dashboard
      </LinkButton>
    </div>
  );
}
