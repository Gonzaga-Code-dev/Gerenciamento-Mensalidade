"use client";

import { useRouter, useSearchParams } from "next/navigation";

const OPTIONS = [
  { value: "TODOS", label: "Todos" },
  { value: "CONFIRMADO", label: "Confirmado" },
  { value: "PENDENTE", label: "Pendente" },
  { value: "CANCELADO", label: "Cancelado" },
];

export function FilterSelect({ basePath }: { basePath: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const current = searchParams.get("status") ?? "TODOS";

  function handleChange(value: string) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("status", value);
    router.push(`${basePath}?${params.toString()}`);
  }

  return (
    <label className="flex items-center gap-2 text-lg font-semibold">
      Filtrar por:
      <select
        value={current}
        onChange={(e) => handleChange(e.target.value)}
        className="btn-grande border-2 border-cinza-escuro/20 rounded-lg px-3 text-lg bg-white focus:border-azul outline-none"
      >
        {OPTIONS.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );
}
