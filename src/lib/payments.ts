import { prisma } from "./prisma";
import { MONTH_NAMES_PT } from "./money";

export function monthRange(year: number, month: number) {
  const start = new Date(Date.UTC(year, month - 1, 1));
  const end = new Date(Date.UTC(year, month, 1));
  return { start, end };
}

export async function totalsForMonth(year: number, month: number) {
  const { start, end } = monthRange(year, month);
  const payments = await prisma.payment.findMany({
    where: { paidAt: { gte: start, lt: end }, status: "CONFIRMADO" },
    select: { amountCents: true },
  });

  const totalCents = payments.reduce((sum, p) => sum + p.amountCents, 0);
  return { year, month, totalCents, count: payments.length };
}

export function lastNMonths(year: number, month: number, n: number) {
  const months: { year: number; month: number }[] = [];
  for (let i = n - 1; i >= 0; i--) {
    const d = new Date(Date.UTC(year, month - 1 - i, 1));
    months.push({ year: d.getUTCFullYear(), month: d.getUTCMonth() + 1 });
  }
  return months;
}

export function monthLabel(year: number, month: number) {
  return `${MONTH_NAMES_PT[month - 1]}/${year}`;
}
