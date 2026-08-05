import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { extractPaymentsFromText } from "@/lib/aiExtract";

/**
 * Integração automática com o WhatsApp Cloud API (Meta) - OPÇÃO 1 do escopo.
 *
 * Esta rota fica inativa até que as variáveis de ambiente sejam configuradas:
 *   WHATSAPP_VERIFY_TOKEN, WHATSAPP_ACCESS_TOKEN, WHATSAPP_PHONE_NUMBER_ID
 *
 * Configuração no Meta for Developers:
 *   1. Criar um app Business > WhatsApp e ativar o produto Webhooks.
 *   2. Callback URL: https://SEU_DOMINIO/api/whatsapp/webhook
 *   3. Verify Token: o mesmo valor de WHATSAPP_VERIFY_TOKEN.
 *   4. Assinar o campo "messages".
 *
 * Enquanto essas variáveis não existirem, o app funciona normalmente pela
 * OPÇÃO 2 (colar mensagens manualmente em /pagamentos/novo).
 */

export async function GET(request: NextRequest) {
  const verifyToken = process.env.WHATSAPP_VERIFY_TOKEN;
  if (!verifyToken) {
    return NextResponse.json(
      { error: "Integração com WhatsApp não configurada." },
      { status: 503 }
    );
  }

  const { searchParams } = request.nextUrl;
  const mode = searchParams.get("hub.mode");
  const token = searchParams.get("hub.verify_token");
  const challenge = searchParams.get("hub.challenge");

  if (mode === "subscribe" && token === verifyToken && challenge) {
    return new NextResponse(challenge, { status: 200 });
  }

  return NextResponse.json({ error: "Token inválido." }, { status: 403 });
}

type WhatsappWebhookPayload = {
  entry?: {
    changes?: {
      value?: {
        messages?: { from?: string; timestamp?: string; text?: { body?: string } }[];
      };
    }[];
  }[];
};

export async function POST(request: NextRequest) {
  if (!process.env.WHATSAPP_VERIFY_TOKEN) {
    return NextResponse.json(
      { error: "Integração com WhatsApp não configurada." },
      { status: 503 }
    );
  }

  const payload = (await request.json().catch(() => null)) as WhatsappWebhookPayload | null;
  if (!payload) {
    return NextResponse.json({ ok: true });
  }

  const messages = (payload.entry ?? [])
    .flatMap((entry) => entry.changes ?? [])
    .flatMap((change) => change.value?.messages ?? [])
    .map((m) => m.text?.body)
    .filter((body): body is string => Boolean(body));

  if (messages.length === 0) {
    return NextResponse.json({ ok: true });
  }

  const adminUser = await prisma.user.findFirst({ orderBy: { createdAt: "asc" } });
  if (!adminUser) {
    return NextResponse.json({ ok: true });
  }

  const text = messages.join("\n");
  const candidates = await extractPaymentsFromText(text);

  if (candidates.length > 0) {
    await prisma.$transaction(
      candidates.map((c) =>
        prisma.payment.create({
          data: {
            payerName: c.payerName,
            amountCents: c.amountCents,
            paidAt: new Date(c.paidAt),
            status: "PENDENTE",
            source: "WHATSAPP_AUTO",
            createdById: adminUser.id,
          },
        })
      )
    );
  }

  return NextResponse.json({ ok: true, detected: candidates.length });
}
