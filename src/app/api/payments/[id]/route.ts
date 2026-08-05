import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";

const UpdateSchema = z.object({
  payerName: z.string().min(1).optional(),
  amountCents: z.number().int().positive().optional(),
  paidAt: z.string().min(1).optional(),
  status: z.enum(["CONFIRMADO", "PENDENTE", "CANCELADO"]).optional(),
});

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "Não autenticado." }, { status: 401 });
  }

  const { id } = await params;
  const body = await request.json().catch(() => null);
  const parsed = UpdateSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Dados inválidos." }, { status: 400 });
  }

  const { paidAt, ...rest } = parsed.data;

  const payment = await prisma.payment.update({
    where: { id },
    data: {
      ...rest,
      ...(paidAt ? { paidAt: new Date(paidAt) } : {}),
    },
  });

  return NextResponse.json({ payment });
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "Não autenticado." }, { status: 401 });
  }

  const { id } = await params;
  await prisma.payment.delete({ where: { id } });
  return NextResponse.json({ ok: true });
}
