"use client";

import { Button } from "@/components/ui";
import { formatBRL } from "@/lib/money";

export type ReportRow = {
  payerName: string;
  amountCents: number;
  paidAt: string;
};

export function ExportButtons({
  monthLabel,
  totalCents,
  count,
  averageCents,
  rows,
}: {
  monthLabel: string;
  totalCents: number;
  count: number;
  averageCents: number;
  rows: ReportRow[];
}) {
  function handleExportCsv() {
    const header = ["Nome", "Valor (R$)", "Data", "Referência"];
    const lines = rows.map((r) => [
      r.payerName,
      (r.amountCents / 100).toFixed(2).replace(".", ","),
      new Date(r.paidAt).toLocaleDateString("pt-BR"),
      monthLabel,
    ]);

    const csv = [header, ...lines]
      .map((cols) => cols.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(";"))
      .join("\r\n");

    const blob = new Blob(["﻿" + csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `relatorio-${monthLabel.replace("/", "-")}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  async function handleExportPdf() {
    const { jsPDF } = await import("jspdf");
    const autoTable = (await import("jspdf-autotable")).default;

    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text("Ilê Alaletu Axé Omim Odé Iboalamo", 14, 18);
    doc.setFontSize(13);
    doc.text(`Relatório de Mensalidades - ${monthLabel}`, 14, 27);

    doc.setFontSize(11);
    doc.text(`Total arrecadado: ${formatBRL(totalCents)}`, 14, 38);
    doc.text(`Número de pagantes: ${count}`, 14, 45);
    doc.text(`Valor médio: ${formatBRL(averageCents)}`, 14, 52);

    autoTable(doc, {
      startY: 60,
      head: [["Nome", "Valor", "Data"]],
      body: rows.map((r) => [
        r.payerName,
        formatBRL(r.amountCents),
        new Date(r.paidAt).toLocaleDateString("pt-BR"),
      ]),
      headStyles: { fillColor: [74, 144, 226] },
    });

    doc.save(`relatorio-${monthLabel.replace("/", "-")}.pdf`);
  }

  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <Button variant="secondary" className="flex-1" onClick={handleExportPdf}>
        Exportar PDF
      </Button>
      <Button variant="secondary" className="flex-1" onClick={handleExportCsv}>
        Exportar CSV
      </Button>
    </div>
  );
}
