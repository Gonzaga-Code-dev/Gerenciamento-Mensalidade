import { parseBRLToCents } from "./money";

export type ParsedPayment = {
  payerName: string;
  amountCents: number;
  paidAt: string; // ISO date (yyyy-mm-dd)
  rawLine: string;
};

const WHATSAPP_LINE = /^\[?(\d{1,2}\/\d{1,2}\/\d{2,4})[,]?\s*(\d{1,2}:\d{2})(?::\d{2})?\s*\]?\s*[-–]?\s*([^:]{2,40}):\s*(.*)$/;

const AMOUNT_PATTERN = /(?:r\$\s*)(\d{1,3}(?:\.\d{3})*(?:,\d{2})?|\d+(?:,\d{2})?)|(\d{1,3}(?:\.\d{3})*,\d{2})\s*(?:reais)?|(\d+)\s*reais/i;

const DATE_PATTERN = /(\d{1,2})\/(\d{1,2})(?:\/(\d{2,4}))?/;

function toISODate(day: number, month: number, year?: number, referenceYear?: number) {
  const y = year ?? referenceYear ?? new Date().getFullYear();
  const fullYear = y < 100 ? 2000 + y : y;
  const mm = String(month).padStart(2, "0");
  const dd = String(day).padStart(2, "0");
  return `${fullYear}-${mm}-${dd}`;
}

function extractAmountCents(text: string): number | null {
  const match = text.match(AMOUNT_PATTERN);
  if (!match) return null;
  const raw = match[1] ?? match[2] ?? match[3];
  if (!raw) return null;
  return parseBRLToCents(raw);
}

function looksLikePayment(text: string) {
  return /r\$|reais|pag(uei|amento|ou)?|mensalidade/i.test(text);
}

/**
 * Parser heurístico (regex) usado quando não há ANTHROPIC_API_KEY configurada,
 * ou como base para o parser com IA revisar/complementar.
 */
export function parseWhatsappText(
  text: string,
  referenceDate: Date = new Date()
): ParsedPayment[] {
  const lines = text
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter(Boolean);

  const results: ParsedPayment[] = [];

  for (const line of lines) {
    const waMatch = line.match(WHATSAPP_LINE);

    if (waMatch) {
      const [, dateStr, , sender, message] = waMatch;
      if (!looksLikePayment(message)) continue;

      const amountCents = extractAmountCents(message);
      if (amountCents == null || amountCents <= 0) continue;

      const dateMatch = dateStr.match(DATE_PATTERN);
      const paidAt = dateMatch
        ? toISODate(
            Number(dateMatch[1]),
            Number(dateMatch[2]),
            dateMatch[3] ? Number(dateMatch[3]) : undefined,
            referenceDate.getFullYear()
          )
        : referenceDate.toISOString().slice(0, 10);

      results.push({
        payerName: sender.trim(),
        amountCents,
        paidAt,
        rawLine: line,
      });
      continue;
    }

    // Formato livre: "Nome - R$ 50,00 - 08/04" ou "Nome R$50,00"
    if (!looksLikePayment(line)) continue;
    const amountCents = extractAmountCents(line);
    if (amountCents == null || amountCents <= 0) continue;

    const dateMatch = line.match(DATE_PATTERN);
    const paidAt = dateMatch
      ? toISODate(
          Number(dateMatch[1]),
          Number(dateMatch[2]),
          dateMatch[3] ? Number(dateMatch[3]) : undefined,
          referenceDate.getFullYear()
        )
      : referenceDate.toISOString().slice(0, 10);

    const amountIndex = line.search(/r\$|\d/i);
    let name = (amountIndex > 0 ? line.slice(0, amountIndex) : line)
      .replace(/[-–:]+$/, "")
      .trim();
    if (!name) name = "Não identificado";

    results.push({ payerName: name, amountCents, paidAt, rawLine: line });
  }

  return results;
}
