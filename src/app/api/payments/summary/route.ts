import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { lastNMonths, totalsForMonth } from "@/lib/payments";

export async function GET(request: NextRequest) {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "Não autenticado." }, { status: 401 });
  }

  const { searchParams } = request.nextUrl;
  const now = new Date();
  const year = Number(searchParams.get("year") ?? now.getFullYear());
  const month = Number(searchParams.get("month") ?? now.getMonth() + 1);

  const months = lastNMonths(year, month, 6);
  const history = await Promise.all(
    months.map((m) => totalsForMonth(m.year, m.month))
  );

  const current = history[history.length - 1];
  const previous = history[history.length - 2];

  const changePct =
    previous.totalCents > 0
      ? ((current.totalCents - previous.totalCents) / previous.totalCents) * 100
      : null;

  return NextResponse.json({ current, previous, changePct, history });
}
