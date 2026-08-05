"use client";

import { useState } from "react";
import { Card } from "@/components/ui";
import { PasteWhatsappFlow } from "./PasteWhatsappFlow";
import { ManualForm } from "./ManualForm";

type Mode = "escolha" | "colar" | "manual";

export default function NovoPagamentoPage() {
  const [mode, setMode] = useState<Mode>("escolha");

  return (
    <div className="max-w-2xl mx-auto px-4 py-6 flex flex-col gap-6">
      <h1 className="text-2xl font-extrabold text-verde-escuro">Novo Pagamento</h1>

      {mode === "escolha" && (
        <div className="flex flex-col gap-4">
          <button
            onClick={() => setMode("colar")}
            className="btn-grande bg-azul text-white rounded-2xl px-6 py-8 text-xl font-bold shadow-sm hover:bg-azul-escuro text-left flex items-center gap-4"
          >
            <span className="text-3xl" aria-hidden>
              💬
            </span>
            <span>
              Colar do WhatsApp
              <span className="block text-sm font-normal opacity-90">
                Cole as mensagens do grupo e deixe o sistema encontrar os pagamentos
              </span>
            </span>
          </button>

          <button
            onClick={() => setMode("manual")}
            className="btn-grande bg-white border-2 border-cinza-escuro/20 rounded-2xl px-6 py-8 text-xl font-bold shadow-sm hover:bg-cinza-claro text-left flex items-center gap-4"
          >
            <span className="text-3xl" aria-hidden>
              ✏️
            </span>
            <span>
              Digite Manualmente
              <span className="block text-sm font-normal text-cinza-escuro/60">
                Preencha nome, valor e data
              </span>
            </span>
          </button>
        </div>
      )}

      {mode === "colar" && (
        <Card>
          <PasteWhatsappFlow onCancel={() => setMode("escolha")} />
        </Card>
      )}

      {mode === "manual" && (
        <Card>
          <ManualForm onCancel={() => setMode("escolha")} />
        </Card>
      )}
    </div>
  );
}
