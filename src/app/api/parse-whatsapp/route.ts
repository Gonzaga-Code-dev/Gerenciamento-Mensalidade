import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getSession } from "@/lib/auth";
import { extractPaymentsFromText } from "@/lib/aiExtract";

const BodySchema = z.object({
  text: z.string().min(1, "Cole ao menos uma mensagem."),
});

export async function POST(request: NextRequest) {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "Não autenticado." }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  const parsed = BodySchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Cole o texto copiado do WhatsApp." },
      { status: 400 }
    );
  }

  const candidates = await extractPaymentsFromText(parsed.data.text);

  if (candidates.length === 0) {
    return NextResponse.json({
      candidates: [],
      message:
        "Não encontramos nenhum pagamento nas mensagens coladas. Tente digitar manualmente.",
    });
  }

  return NextResponse.json({ candidates });
}
