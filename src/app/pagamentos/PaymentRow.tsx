"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { formatBRL, parseBRLToCents } from "@/lib/money";
import { Button, StatusBadge } from "@/components/ui";

export type PaymentRowData = {
  id: string;
  payerName: string;
  amountCents: number;
  paidAt: string; // yyyy-mm-dd
  status: "CONFIRMADO" | "PENDENTE" | "CANCELADO";
};

export function PaymentRow({ payment }: { payment: PaymentRowData }) {
  const router = useRouter();
  const [editing, setEditing] = useState(false);
  const [payerName, setPayerName] = useState(payment.payerName);
  const [amount, setAmount] = useState(
    (payment.amountCents / 100).toFixed(2).replace(".", ",")
  );
  const [paidAt, setPaidAt] = useState(payment.paidAt);
  const [status, setStatus] = useState(payment.status);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSalvar() {
    setError(null);
    const cents = parseBRLToCents(amount);
    if (!payerName.trim() || !cents || cents <= 0 || !paidAt) {
      setError("Revise os campos antes de salvar.");
      return;
    }

    setSaving(true);
    try {
      const res = await fetch(`/api/payments/${payment.id}`, {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ payerName: payerName.trim(), amountCents: cents, paidAt, status }),
      });
      if (!res.ok) {
        setError("Não foi possível salvar as alterações.");
        return;
      }
      setEditing(false);
      router.refresh();
    } catch {
      setError("Erro de conexão. Tente novamente.");
    } finally {
      setSaving(false);
    }
  }

  async function handleExcluir() {
    if (!confirm(`Excluir o pagamento de ${payment.payerName}?`)) return;
    setSaving(true);
    try {
      const res = await fetch(`/api/payments/${payment.id}`, { method: "DELETE" });
      if (!res.ok) {
        setError("Não foi possível excluir.");
        return;
      }
      router.refresh();
    } catch {
      setError("Erro de conexão. Tente novamente.");
    } finally {
      setSaving(false);
    }
  }

  if (editing) {
    return (
      <div className="bg-white rounded-xl border-2 border-azul p-4 flex flex-col gap-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <label className="flex flex-col gap-1">
            <span className="font-semibold text-sm">Nome</span>
            <input
              value={payerName}
              onChange={(e) => setPayerName(e.target.value)}
              className="btn-grande border-2 border-cinza-escuro/20 rounded-lg px-3 text-lg focus:border-azul outline-none"
            />
          </label>
          <label className="flex flex-col gap-1">
            <span className="font-semibold text-sm">Valor (R$)</span>
            <input
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              inputMode="decimal"
              className="btn-grande border-2 border-cinza-escuro/20 rounded-lg px-3 text-lg focus:border-azul outline-none"
            />
          </label>
          <label className="flex flex-col gap-1">
            <span className="font-semibold text-sm">Data</span>
            <input
              type="date"
              value={paidAt}
              onChange={(e) => setPaidAt(e.target.value)}
              className="btn-grande border-2 border-cinza-escuro/20 rounded-lg px-3 text-lg focus:border-azul outline-none"
            />
          </label>
          <label className="flex flex-col gap-1">
            <span className="font-semibold text-sm">Status</span>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value as typeof status)}
              className="btn-grande border-2 border-cinza-escuro/20 rounded-lg px-3 text-lg bg-white focus:border-azul outline-none"
            >
              <option value="CONFIRMADO">Confirmado</option>
              <option value="PENDENTE">Pendente</option>
              <option value="CANCELADO">Cancelado</option>
            </select>
          </label>
        </div>

        {error && (
          <p className="text-red-600 font-semibold" role="alert">
            {error}
          </p>
        )}

        <div className="flex flex-col sm:flex-row gap-3">
          <Button variant="success" className="flex-1" onClick={handleSalvar} disabled={saving}>
            Salvar
          </Button>
          <Button variant="danger" className="flex-1" onClick={handleExcluir} disabled={saving}>
            Excluir
          </Button>
          <Button variant="secondary" className="flex-1" onClick={() => setEditing(false)} disabled={saving}>
            Cancelar
          </Button>
        </div>
      </div>
    );
  }

  return (
    <button
      onClick={() => setEditing(true)}
      className="btn-grande w-full bg-white rounded-xl border border-cinza-escuro/10 px-4 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3 hover:border-azul text-left"
    >
      <span className="font-semibold text-lg break-words">{payment.payerName}</span>
      <span className="flex items-center gap-3 shrink-0">
        <span className="font-bold text-lg">{formatBRL(payment.amountCents)}</span>
        <StatusBadge status={payment.status} />
      </span>
    </button>
  );
}
