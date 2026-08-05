import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";

function monthRange(year: number, month: number) {
  const start = new Date(Date.UTC(year, month - 1, 1));
  const end = new Date(Date.UTC(year, month, 1));
  return { start, end };
}

export async function GET(request: NextRequest) {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "Não autenticado." }, { status: 401 });
  }

  const { searchParams } = request.nextUrl;
  const now = new Date();
  const year = Number(searchParams.get("year") ?? now.getFullYear());
  const month = Number(searchParams.get("month") ?? now.getMonth() + 1);
  const status = searchParams.get("status");

  const { start, end } = monthRange(year, month);

  const payments = await prisma.payment.findMany({
    where: {
      paidAt: { gte: start, lt: end },
      ...(status && status !== "TODOS"
        ? { status: status as "CONFIRMADO" | "PENDENTE" | "CANCELADO" }
        : {}),
    },
    orderBy: { paidAt: "desc" },
  });

  return NextResponse.json({ payments });
}

const PaymentInput = z.object({
  payerName: z.string().min(1, "Informe o nome."),
  amountCents: z.number().int().positive("O valor deve ser maior que zero."),
  paidAt: z.string().min(1),
  status: z.enum(["CONFIRMADO", "PENDENTE", "CANCELADO"]).default("CONFIRMADO"),
  source: z
    .enum(["MANUAL", "WHATSAPP_COLADO", "WHATSAPP_AUTO"])
    .default("MANUAL"),
});

const CreateBody = z.union([PaymentInput, z.array(PaymentInput).min(1)]);

export async function POST(request: NextRequest) {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "Não autenticado." }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  const parsed = CreateBody.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Dados inválidos.", details: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const items = Array.isArray(parsed.data) ? parsed.data : [parsed.data];

  const created = await prisma.$transaction(
    items.map((item) =>
      prisma.payment.create({
        data: {
          payerName: item.payerName,
          amountCents: item.amountCents,
          paidAt: new Date(item.paidAt),
          status: item.status,
          source: item.source,
          createdById: session.userId,
        },
      })
    )
  );

  return NextResponse.json({ payments: created }, { status: 201 });
}
