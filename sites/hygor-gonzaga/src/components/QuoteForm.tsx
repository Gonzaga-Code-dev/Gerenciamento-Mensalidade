"use client";

import { useState, type FormEvent } from "react";
import { projectTypes, whatsappLink } from "@/content/site";

const field =
  "w-full rounded-xl border border-line bg-bg px-4 py-3 text-sm text-text placeholder:text-muted/70 outline-none transition-colors focus:border-accent";

export default function QuoteForm() {
  const [type, setType] = useState(projectTypes[0]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const business = String(data.get("business") ?? "").trim();
    const details = String(data.get("details") ?? "").trim();

    const message = [
      `Olá, Hygor! Meu nome é ${name}.`,
      business && `Negócio: ${business}`,
      `Projeto: ${type}`,
      details && `Detalhes: ${details}`,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-line bg-surface p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block space-y-2">
          <span className="text-xs text-muted">Seu nome</span>
          <input name="name" required autoComplete="name" className={field} placeholder="Como posso te chamar?" />
        </label>
        <label className="block space-y-2">
          <span className="text-xs text-muted">Seu negócio</span>
          <input name="business" className={field} placeholder="Nome ou segmento" />
        </label>
      </div>

      <fieldset className="space-y-2">
        <legend className="text-xs text-muted">O que você precisa?</legend>
        <div className="flex flex-wrap gap-2 pt-1">
          {projectTypes.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setType(option)}
              aria-pressed={type === option}
              className={`rounded-full border px-4 py-2 text-xs transition-colors ${
                type === option
                  ? "border-accent bg-accent text-accent-ink"
                  : "border-line text-muted hover:border-muted hover:text-text"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </fieldset>

      <label className="block space-y-2">
        <span className="text-xs text-muted">Conte um pouco sobre o projeto</span>
        <textarea
          name="details"
          rows={4}
          className={`${field} resize-none`}
          placeholder="Objetivo, prazo, se já tem site ou domínio…"
        />
      </label>

      <button
        type="submit"
        className="w-full rounded-full bg-accent px-5 py-3 text-sm font-medium text-accent-ink transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        Enviar pelo WhatsApp
      </button>
      <p className="text-center text-xs text-muted">Resposta em até 1 dia útil.</p>
    </form>
  );
}
