"use client";

import { useRouter } from "next/navigation";
import { MONTH_NAMES_PT } from "@/lib/money";

export function MonthYearSelect({
  year,
  month,
  basePath,
}: {
  year: number;
  month: number;
  basePath: string;
}) {
  const router = useRouter();

  function go(nextYear: number, nextMonth: number) {
    const params = new URLSearchParams({
      year: String(nextYear),
      month: String(nextMonth),
    });
    router.push(`${basePath}?${params.toString()}`);
  }

  const years = Array.from({ length: 6 }, (_, i) => new Date().getFullYear() - 4 + i);

  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <span className="font-bold text-lg">Escolha o mês:</span>
      <select
        value={month}
        onChange={(e) => go(year, Number(e.target.value))}
        className="btn-grande border-2 border-cinza-escuro/20 rounded-lg px-3 text-lg bg-white focus:border-azul outline-none"
      >
        {MONTH_NAMES_PT.map((name, i) => (
          <option key={name} value={i + 1}>
            {name}
          </option>
        ))}
      </select>
      <select
        value={year}
        onChange={(e) => go(Number(e.target.value), month)}
        className="btn-grande border-2 border-cinza-escuro/20 rounded-lg px-3 text-lg bg-white focus:border-azul outline-none"
      >
        {years.map((y) => (
          <option key={y} value={y}>
            {y}
          </option>
        ))}
      </select>
    </div>
  );
}
