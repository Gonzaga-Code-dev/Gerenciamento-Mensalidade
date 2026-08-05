"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Card } from "@/components/ui";
import { SuccessModal } from "@/components/SuccessModal";
import { parseBRLToCents } from "@/lib/money";

type Candidate = {
  payerName: string;
  amountReais: string;
  paidAt: string;
  rawLine: string;
};

export function PasteWhatsappFlow({ onCancel }: { onCancel: () => void }) {
  const router = useRouter();
  const [text, setText] = useState("");
  const [candidates, setCandidates] = useState<Candidate[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<{ count: number; totalCents: number } | null>(
    null
  );

  async function handleAnalisar() {
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/parse-whatsapp", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ text }),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error ?? "Não foi possível analisar as mensagens.");
        setLoading(false);
        return;
      }

      if (!data.candidates || data.candidates.length === 0) {
        setError(
          data.message ??
            "Não encontramos nenhum pagamento nas mensagens coladas."
        );
        setLoading(false);
        return;
      }

      setCandidates(
        data.candidates.map(
          (c: { payerName: string; amountCents: number; paidAt: string; rawLine: string }) => ({
            payerName: c.payerName,
            amountReais: (c.amountCents / 100).toFixed(2).replace(".", ","),
            paidAt: c.paidAt,
            rawLine: c.rawLine,
          })
        )
      );
    } catch {
      setError("Erro de conexão. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  function updateCandidate(index: number, patch: Partial<Candidate>) {
    setCandidates((prev) =>
      prev ? prev.map((c, i) => (i === index ? { ...c, ...patch } : c)) : prev
    );
  }

  function removeCandidate(index: number) {
    setCandidates((prev) => (prev ? prev.filter((_, i) => i !== index) : prev));
  }

  async function handleSalvarTudo() {
    if (!candidates || candidates.length === 0) return;
    setError(null);
    setSaving(true);

    const items = candidates.map((c) => ({
      payerName: c.payerName.trim() || "Não identificado",
      amountCents: parseBRLToCents(c.amountReais) ?? 0,
      paidAt: c.paidAt,
      status: "CONFIRMADO" as const,
      source: "WHATSAPP_COLADO" as const,
    }));

    const invalid = items.find((i) => !i.amountCents || i.amountCents <= 0);
    if (invalid) {
      setError("Revise os valores: há um valor inválido em algum cartão.");
      setSaving(false);
      return;
    }

    try {
      const res = await fetch("/api/payments", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(items),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error ?? "Não foi possível salvar os pagamentos.");
        setSaving(false);
        return;
      }

      const totalCents = items.reduce((sum, i) => sum + i.amountCents, 0);
      setSuccess({ count: items.length, totalCents });
    } catch {
      setError("Erro de conexão. Tente novamente.");
    } finally {
      setSaving(false);
    }
  }

  if (candidates) {
    return (
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-bold text-verde-escuro">Encontrado:</h2>

        {candidates.map((c, i) => (
          <Card key={i} className="flex flex-col gap-3">
            <div className="flex items-start justify-between gap-2">
              <span className="text-confirmado font-bold text-lg">✓ Pagamento</span>
              <button
                onClick={() => removeCandidate(i)}
                className="text-cancelado hover:text-red-600 font-bold text-sm px-2 py-1"
                aria-label="Remover este pagamento"
              >
                ✕ Remover
              </button>
            </div>

            <label className="flex flex-col gap-1">
              <span className="font-semibold text-sm">Nome</span>
              <input
                value={c.payerName}
                onChange={(e) => updateCandidate(i, { payerName: e.target.value })}
                className="btn-grande border-2 border-cinza-escuro/20 rounded-lg px-3 text-lg focus:border-azul outline-none"
              />
            </label>

            <div className="grid grid-cols-2 gap-3">
              <label className="flex flex-col gap-1">
                <span className="font-semibold text-sm">Valor (R$)</span>
                <input
                  value={c.amountReais}
                  onChange={(e) => updateCandidate(i, { amountReais: e.target.value })}
                  inputMode="decimal"
                  className="btn-grande border-2 border-cinza-escuro/20 rounded-lg px-3 text-lg focus:border-azul outline-none"
                />
              </label>
              <label className="flex flex-col gap-1">
                <span className="font-semibold text-sm">Data</span>
                <input
                  type="date"
                  value={c.paidAt}
                  onChange={(e) => updateCandidate(i, { paidAt: e.target.value })}
                  className="btn-grande border-2 border-cinza-escuro/20 rounded-lg px-3 text-lg focus:border-azul outline-none"
                />
              </label>
            </div>
            <p className="text-xs text-cinza-escuro/50 italic truncate">
              Mensagem original: “{c.rawLine}”
            </p>
          </Card>
        ))}

        {error && (
          <p className="text-red-600 font-semibold" role="alert">
            {error}
          </p>
        )}

        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            variant="success"
            className="flex-1"
            onClick={handleSalvarTudo}
            disabled={saving}
          >
            {saving ? "Salvando..." : "SALVAR TUDO"}
          </Button>
          <Button
            variant="secondary"
            className="flex-1"
            onClick={() => setCandidates(null)}
            disabled={saving}
          >
            VOLTAR
          </Button>
        </div>

        {success && (
          <SuccessModal
            count={success.count}
            totalCents={success.totalCents}
            onClose={() => router.push("/")}
          />
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <p className="text-lg font-semibold">Cole as mensagens do grupo aqui:</p>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={8}
        placeholder={
          "Exemplo:\n[08/04/2024, 10:23] João Silva: paguei R$ 50,00\nMaria Santos - R$ 100,00 - 08/04/2024"
        }
        className="w-full border-2 border-cinza-escuro/20 rounded-xl p-4 text-lg focus:border-azul outline-none resize-y"
      />

      {error && (
        <p className="text-red-600 font-semibold" role="alert">
          {error}
        </p>
      )}

      <div className="flex flex-col sm:flex-row gap-3">
        <Button
          className="flex-1"
          onClick={handleAnalisar}
          disabled={loading || !text.trim()}
        >
          {loading ? "Analisando..." : "ANALISAR"}
        </Button>
        <Button variant="secondary" className="flex-1" onClick={onCancel}>
          CANCELAR
        </Button>
      </div>
    </div>
  );
}
