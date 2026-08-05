"use client";

import { useRouter } from "next/navigation";
import { MONTH_NAMES_PT } from "@/lib/money";

export function MonthNav({
  year,
  month,
  basePath,
}: {
  year: number;
  month: number;
  basePath: string;
}) {
  const router = useRouter();

  function go(deltaMonths: number) {
    const d = new Date(Date.UTC(year, month - 1 + deltaMonths, 1));
    const params = new URLSearchParams({
      year: String(d.getUTCFullYear()),
      month: String(d.getUTCMonth() + 1),
    });
    router.push(`${basePath}?${params.toString()}`);
  }

  return (
    <div className="flex items-center justify-center gap-3 sm:gap-6">
      <button
        onClick={() => go(-1)}
        className="btn-grande px-4 rounded-full bg-white border-2 border-cinza-escuro/20 font-bold text-lg hover:bg-cinza-claro"
        aria-label="Mês anterior"
      >
        ◄ Mês Anterior
      </button>
      <span className="text-xl sm:text-2xl font-extrabold text-verde-escuro min-w-[160px] text-center">
        {MONTH_NAMES_PT[month - 1]}/{year}
      </span>
      <button
        onClick={() => go(1)}
        className="btn-grande px-4 rounded-full bg-white border-2 border-cinza-escuro/20 font-bold text-lg hover:bg-cinza-claro"
        aria-label="Próximo mês"
      >
        Próximo Mês ►
      </button>
    </div>
  );
}
