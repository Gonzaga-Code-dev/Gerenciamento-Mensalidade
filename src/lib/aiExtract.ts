import { z } from "zod";
import { parseWhatsappText, type ParsedPayment } from "./whatsappParser";

const AiResultSchema = z.array(
  z.object({
    payerName: z.string().min(1),
    amount: z.number().positive(),
    date: z.string(), // yyyy-mm-dd
  })
);

/**
 * Extrai pagamentos de um texto colado do WhatsApp.
 * Se ANTHROPIC_API_KEY estiver configurada, usa a Claude API para uma
 * extração mais robusta (nomes com apelidos, "paguei", erros de digitação etc).
 * Caso contrário, cai para o parser por regex.
 */
export async function extractPaymentsFromText(
  text: string,
  referenceDate: Date = new Date()
): Promise<ParsedPayment[]> {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return parseWhatsappText(text, referenceDate);
  }

  try {
    const today = referenceDate.toISOString().slice(0, 10);
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-5",
        max_tokens: 2048,
        system:
          "Você extrai registros de pagamento de mensagens de WhatsApp de um grupo de terreiro. " +
          "Responda APENAS com um array JSON válido, sem texto adicional, no formato: " +
          '[{"payerName": string, "amount": number (em reais, com ponto decimal), "date": "YYYY-MM-DD"}]. ' +
          `Se uma mensagem não mencionar um pagamento/mensalidade com valor, ignore-a. Se a mensagem não tiver uma data explícita, use ${today}.`,
        messages: [{ role: "user", content: text }],
      }),
    });

    if (!response.ok) {
      return parseWhatsappText(text, referenceDate);
    }

    const data = await response.json();
    const rawText: string = data?.content?.[0]?.text ?? "[]";
    const jsonMatch = rawText.match(/\[[\s\S]*\]/);
    const parsed = JSON.parse(jsonMatch ? jsonMatch[0] : rawText);
    const validated = AiResultSchema.parse(parsed);

    return validated.map((item) => ({
      payerName: item.payerName,
      amountCents: Math.round(item.amount * 100),
      paidAt: item.date,
      rawLine: `${item.payerName} · R$ ${item.amount}`,
    }));
  } catch {
    return parseWhatsappText(text, referenceDate);
  }
}
