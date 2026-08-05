"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui";
import { SuccessModal } from "@/components/SuccessModal";
import { parseBRLToCents } from "@/lib/money";

function today() {
  return new Date().toISOString().slice(0, 10);
}

export function ManualForm({ onCancel }: { onCancel: () => void }) {
  const router = useRouter();
  const [payerName, setPayerName] = useState("");
  const [amount, setAmount] = useState("");
  const [paidAt, setPaidAt] = useState(today());
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [added, setAdded] = useState<{ payerName: string; amountCents: number }[]>([]);
  const [showSuccess, setShowSuccess] = useState(false);

  function validate(): number | null {
    if (!payerName.trim()) {
      setError("Informe o nome da pessoa.");
      return null;
    }
    const cents = parseBRLToCents(amount);
    if (!cents || cents <= 0) {
      setError("Informe um valor válido.");
      return null;
    }
    if (!paidAt) {
      setError("Informe a data do pagamento.");
      return null;
    }
    return cents;
  }

  async function save(): Promise<boolean> {
    setError(null);
    const cents = validate();
    if (cents == null) return false;

    setSaving(true);
    try {
      const res = await fetch("/api/payments", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          payerName: payerName.trim(),
          amountCents: cents,
          paidAt,
          status: "CONFIRMADO",
          source: "MANUAL",
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error ?? "Não foi possível salvar o pagamento.");
        return false;
      }

      setAdded((prev) => [...prev, { payerName: payerName.trim(), amountCents: cents }]);
      return true;
    } catch {
      setError("Erro de conexão. Tente novamente.");
      return false;
    } finally {
      setSaving(false);
    }
  }

  async function handleAdicionar() {
    const ok = await save();
    if (ok) setShowSuccess(true);
  }

  async function handleAdicionarOutro() {
    const ok = await save();
    if (ok) {
      setPayerName("");
      setAmount("");
      setPaidAt(today());
    }
  }

  const totalCents = added.reduce((sum, a) => sum + a.amountCents, 0);

  return (
    <div className="flex flex-col gap-4">
      <label className="flex flex-col gap-1">
        <span className="font-bold text-lg">Nome</span>
        <input
          value={payerName}
          onChange={(e) => setPayerName(e.target.value)}
          autoFocus
          placeholder="Ex: João Silva"
          className="btn-grande border-2 border-cinza-escuro/20 rounded-xl px-4 text-lg focus:border-azul outline-none"
        />
      </label>

      <label className="flex flex-col gap-1">
        <span className="font-bold text-lg">Valor</span>
        <div className="relative">
          <span className="absolute left-4 top-0 h-full flex items-center text-lg font-bold text-cinza-escuro/60">
            R$
          </span>
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            inputMode="decimal"
            placeholder="50,00"
            className="btn-grande w-full border-2 border-cinza-escuro/20 rounded-xl pl-12 pr-4 text-lg focus:border-azul outline-none"
          />
        </div>
      </label>

      <label className="flex flex-col gap-1">
        <span className="font-bold text-lg">Data</span>
        <input
          type="date"
          value={paidAt}
          onChange={(e) => setPaidAt(e.target.value)}
          className="btn-grande border-2 border-cinza-escuro/20 rounded-xl px-4 text-lg focus:border-azul outline-none"
        />
      </label>

      {error && (
        <p className="text-red-600 font-semibold" role="alert">
          {error}
        </p>
      )}

      {added.length > 0 && (
        <p className="text-confirmado font-semibold">
          ✓ {added.length} pagamento{added.length === 1 ? "" : "s"} adicionado
          {added.length === 1 ? "" : "s"} nesta sessão
        </p>
      )}

      <div className="flex flex-col sm:flex-row gap-3">
        <Button variant="success" className="flex-1" onClick={handleAdicionar} disabled={saving}>
          ADICIONAR
        </Button>
        <Button variant="primary" className="flex-1" onClick={handleAdicionarOutro} disabled={saving}>
          ADICIONAR OUTRO
        </Button>
        <Button variant="secondary" className="flex-1" onClick={onCancel} disabled={saving}>
          CANCELAR
        </Button>
      </div>

      {showSuccess && (
        <SuccessModal
          count={added.length}
          totalCents={totalCents}
          onClose={() => router.push("/")}
        />
      )}
    </div>
  );
}
